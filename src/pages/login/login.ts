import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrazionePage } from '../registrazione/registrazione';
import { HomePage } from '../home/home';
import {User} from '../../models/user';
/*import { RegistrazionePage } from '../registrazione/registrazione';*/
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
/*import { ProfiloPage } from '../profilo/profilo';*/
/* import { NegozioPage } from '../negozio/negozio';
import { CorsiPage } from '../corsi/corsi';
import { ContattaciPage } from '../contattaci/contattaci'; */




@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   user={} as User;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
    

  }

    

  async login(user : User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      if(result){
        this.navCtrl.setRoot(HomePage);
      }else {
        console.log("Utente non registrato");
        this.navCtrl.setRoot(LoginPage);
    
      }
    }catch(e) {
      var errorCode = e.code;
      var errorMessage = e.message;
    }
  }

  /* loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(() => {
        this.navCtrl.setRoot(HomePage)
      });
      this.afAuth.auth.getRedirectResult().then(result => {
        if (result.credential) {
          var token = result.credential.accessToken;
        }
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  } */

  goToRegistrazione(){
    this.navCtrl.push(RegistrazionePage);
  }

}  
  /* goToRegistrazione(params){
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
  } */

