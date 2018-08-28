import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OrdiniPage } from '../ordini/ordini';

/**
 * Generated class for the CarrelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrello',
  templateUrl: 'carrello.html',
})
export class CarrelloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public alertCtrl: AlertController) {
  }
  visualizzaProdotti= [];
  
  
  user = firebase.auth().currentUser;
  email = this.user.email;

  

    totaleOrdine() : number{
    
     let sum = 0;
     let prodotto = 1;
     this.visualizzaProdotti.forEach(p=>{
      prodotto = p.prezzo*p.quantita;
      sum = prodotto + sum;
      
    });
    //console.log('somma'+ sum);
    return sum;
     
  } 
   

  
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Ordine Confermato!',
      message: 'Grazie per aver acquistato nel nostro negozio!',
      buttons: [
        {
          text: 'Home',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'I miei Ordini',
          handler: () => {
            this.navCtrl.push(OrdiniPage);
            //this.navCtrl.push(OrdiniPage);
          }
        }
      ]
    });
    confirm.present();
  }

  

      
  confermaOrdine(visualizzaProdotti){
  this.http.post('http://localhost:8080/confermaOrdine',visualizzaProdotti).pipe( 
    map(res => res.json())
  ).subscribe(request => {
  console.log('POST Response:', request);
  });
  this.showConfirm();
}
  
  

  ionViewDidLoad() {
    var eUtente = this.email;
    var utente = JSON.stringify({eUtente});
    this.http.post('http://localhost:8080/carrello', utente).pipe(
     map(res => res.json())
   ).subscribe(productList => {
   for(var x in productList.Prodotti){
     this.visualizzaProdotti[x]=productList.Prodotti[x];
     console.log("Oggetto nell indice: ",x + " ",this.visualizzaProdotti[x]);
    }      
  });
}

}
