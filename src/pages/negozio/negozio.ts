import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-negozio',
  templateUrl: 'negozio.html'
})
export class NegozioPage {

  constructor(public navCtrl: NavController, public http: Http) {
  }
  catalogo=[];

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
