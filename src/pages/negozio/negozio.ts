import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { CarrelloPage } from '../carrello/carrello';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-negozio',
  templateUrl: 'negozio.html'
})
export class NegozioPage {

  constructor(public navCtrl: NavController, public http: Http,public alertCtrl: AlertController) {
  }
  catalogo=[];
  prodottiCatalogo=[];
  user = firebase.auth().currentUser;
  email= this.user.email;
  testRadioOpen;
  //testRadioResult = 1;
  //nSelez = this.testRadioResult -1;


  goToCarrello(){
    this.navCtrl.push(CarrelloPage);
  }


   aggiungiAlCarrello(prodottoDaAggiungere,quantitaOrdine){
    
    var utente = this.email;
    var codice = prodottoDaAggiungere.codice;
    var nome = prodottoDaAggiungere.nome;
    var prezzo = prodottoDaAggiungere.prezzo;
    var quantita = quantitaOrdine;
    var immagine =prodottoDaAggiungere.immagine;
    var pCatalogo = JSON.stringify({utente,codice,nome,prezzo,quantita,immagine});
    this.http.post('http://localhost:8080/aggiornaCarrello',pCatalogo).pipe( 
            map(res => res.json())
        ).subscribe(request => {
          console.log('POST Response:', request);
        });
    
    
  }

  aggiungiAiPreferiti(preferito){

    var utente = this.email;
    var codice = preferito.codice;
    var nome = preferito.nome;
    var prezzo = preferito.prezzo;
    var immagine =preferito.immagine;
    var inPreferito = JSON.stringify({utente,codice,nome,prezzo,immagine});

    this.http.post('http://localhost:8080/addPreferiti',inPreferito).pipe( 
            map(res => res.json())
        ).subscribe(request => {
          console.log('POST Response:', request);
        });

  }

  
 
    showRadio(n,pda) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Numero pezzi:');
    //var testRadioResult = 0;
    for(var i = 1; i <= n; i++){
      alert.addInput({
      type: 'radio',
      label: ''+i,
      value: ''+i,
      checked: false
    });
    
  }
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        var x =parseInt(data,10);
        this.aggiungiAlCarrello(pda,x);
        console.log('data radio' + x);
        
      }
      
      //return Promise.resolve(data);
       
    });
   
    alert.present();
    
  }

  getResults(n) :number{
    return n;
  }


  ionViewDidLoad() {
    this.http.get('http://localhost:8080/prodotti' ).pipe(
     map(res => res.json())
   ).subscribe(listaProdotti => {
   for(var x in listaProdotti.Prodotti){
     this.catalogo[x]=listaProdotti.Prodotti[x];
     console.log("Oggetto nell indice: ",x + " ",this.catalogo[x]);
   
   }      
 });
}

}
