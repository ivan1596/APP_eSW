import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfiloPage } from '../profilo/profilo';
import { NegozioPage } from '../negozio/negozio';
import { CorsiPage } from '../corsi/corsi';
import { ContattaciPage } from '../contattaci/contattaci';
import {AngularFireAuth} from 'angularfire2/auth';
import { DatiPersonaliPage } from '../dati-personali/dati-personali';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth ) {
  }
  

  goToProfilo(params){
    if (!params) params = {};
    this.navCtrl.push(ProfiloPage);
  }goToNegozio(params){
    if (!params) params = {};
    this.navCtrl.push(NegozioPage);
  }goToCorsi(params){
    if (!params) params = {};
    this.navCtrl.push(CorsiPage);
  }goToContattaci(params){
    if (!params) params = {};
    this.navCtrl.push(ContattaciPage);
  }


  ionViewDidLoad() {
    // this.afAuth.authState.take(1).subscribe(auth => {
    //   if(!auth.uid){
    //       this.navCtrl.setRoot(DatiPersonaliPage);
    //   }
    //   else{
    //     this.navCtrl.setRoot(HomePage);
    //   }
    // })  
  }

}
