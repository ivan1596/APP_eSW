import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { CarrelloPage } from '../carrello/carrello';
import firebase from 'firebase';

@Component({
  selector: 'page-negozio',
  templateUrl: 'negozio.html'
})
export class NegozioPage {

  constructor(public navCtrl: NavController, public http: Http) {
  }
  catalogo=[];
  prodottiCatalogo=[];
  user = firebase.auth().currentUser;
  email= this.user.email;

  goToCarrello(){
    this.navCtrl.push(CarrelloPage);
  }

  aggiungiAlCarrello(prodottoDaAggiungere){

    console.log(prodottoDaAggiungere);
    //prodottoDaAggiungere["Utente"] = this.email;
    //this.prodottiCatalogo.push(prodottoDaAggiungere);
    var utente = this.email;
    var codice = prodottoDaAggiungere.codice;
    var nome = prodottoDaAggiungere.nome;
    var prezzo = prodottoDaAggiungere.prezzo;
    var quantita = prodottoDaAggiungere.quantita;
    var immagine =prodottoDaAggiungere.immagine;
    //console.log("Utente Aggiunto " + JSON.stringify(prodottoDaAggiungere));
    var pCatalogo = JSON.stringify({utente,codice,nome,prezzo,quantita,immagine});
    this.http.post('http://localhost:8080/aggiornaCarrello',pCatalogo).pipe( 
            map(res => res.json())
        ).subscribe(request => {
          console.log('POST Response:', request);
        });
    
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:8080/prodotti' ).pipe(
     map(res => res.json())
   ).subscribe(productList => {
   for(var x in productList.Prodotti){
     this.catalogo[x]=productList.Prodotti[x];
     console.log("Oggetto nell indice: ",x + " ",this.catalogo[x]);
   
   }      
 });
}

}
