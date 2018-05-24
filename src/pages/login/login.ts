import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrazionePage } from '../registrazione/registrazione';
import { HomePage } from '../home/home';
import { ProfiloPage } from '../profilo/profilo';
import { NegozioPage } from '../negozio/negozio';
import { CorsiPage } from '../corsi/corsi';
import { ContattaciPage } from '../contattaci/contattaci';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToRegistrazione(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrazionePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToProfilo(params){
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
}
