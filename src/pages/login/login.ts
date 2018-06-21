import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrazionePage } from '../registrazione/registrazione';
import { HomePage } from '../home/home';
import {User} from '../../models/user';
import { ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
/* import { GooglePlus } from '@ionic-native/google-plus'; */
import firebase from 'firebase';





@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   user={} as User;

  //  userProfile: any = null; For goggle and android authentication

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, private toastCtrl: ToastController) {
    /*For google authenticated on android and ios  add private googlePlus: GooglePlus,*/
   /*  firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProfile = user;
      } else { 
          this.userProfile = null;
      }
    }); */
    

  }

  

  async login(user : User){
    let toast = this.toastCtrl.create({
      message: "E-Mail/Password Non Corretti",
      duration: 3000,
      position: 'top'
    });
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
    }catch(e) {
      toast.present();
      this.navCtrl.setRoot(LoginPage);
    }
  }

    loginWithGoogle() {
      let toast = this.toastCtrl.create({
        message: "E-Mail/Password Errati",
        duration: 3000,
        position: 'top'
      });
      
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
        console.log(error);        
        toast.present();
        this.navCtrl.setRoot(LoginPage);
        
      });
  }


 goToRegistrazione(){
    this.navCtrl.push(RegistrazionePage);
  }

}





 /* loginWithGoogle() {   Google authentication for Android and ios
    this.googlePlus.login({
      'webClientId': '953884612296-vfsan1gatsjop71e3cmsc9amn1vsni6f.com.googleusercontent.apps',
      'offline': true
    }).then( res => {
            const googleCredential = firebase.auth.GoogleAuthProvider
                .credential(res.idToken);
   
            firebase.auth().signInWithCredential(googleCredential)
          .then( response => {
              console.log("Firebase success: " + JSON.stringify(response));
          });
    }, err => {
        console.error("Error: ", err)
    });
  } */

 
 
