import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfiloPage } from '../profilo/profilo';
import { NegozioPage } from '../negozio/negozio';
import { ContattaciPage } from '../contattaci/contattaci';
import { CarrelloPage } from '../carrello/carrello';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ) {
  }
  

  goToProfilo(params){
    if (!params) params = {};
    this.navCtrl.push(ProfiloPage);
  }goToNegozio(params){
    if (!params) params = {};
    this.navCtrl.push(NegozioPage);
  }goToCarrello(params){
    if (!params) params = {};
    this.navCtrl.push(CarrelloPage);
  }goToContattaci(params){
    if (!params) params = {};
    this.navCtrl.push(ContattaciPage);
  }


  ionViewDidLoad() {
   
  }

}
