import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {Profilo} from '../../models/profilo'
import { auth } from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the DatiPersonaliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dati-personali',
  templateUrl: 'dati-personali.html',
})
export class DatiPersonaliPage {

  profilo = {} as Profilo;

  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private afDatabase : AngularFireDatabase) {
  }

  creaProfilo(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`Profilo/${auth.uid}`).set(this.profilo)
      .then(() => {
        this.navCtrl.setRoot(HomePage)

      });
      
    })
   }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad DatiPersonaliPage');
  }

}
