import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { OrdiniPage } from '../ordini/ordini';
import firebase from 'firebase';
import { PreferitiPage } from '../preferiti/preferiti';
import { DatiPersonaliPage } from '../dati-personali/dati-personali';

@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html'
})
export class ProfiloPage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
  }


  user = firebase.auth().currentUser;
  email = this.user.email;

  goToOrdini(){
    this.navCtrl.push(OrdiniPage);
  }

  goToDatiPersonali(){
    this.navCtrl.push(DatiPersonaliPage);
  }

  goToPreferiti(){
    this.navCtrl.push(PreferitiPage);
  }

  logout(){
    this.afAuth.auth.signOut();
	  this.navCtrl.setRoot(LoginPage);
  }
  
}
