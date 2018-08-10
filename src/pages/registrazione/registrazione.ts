import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-registrazione',
  templateUrl: 'registrazione.html'
})
export class RegistrazionePage {
  user={} as User;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
  }

  async reg(user : User){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    this.navCtrl.push(LoginPage);
    }catch(e){console.error(e)}
  }
}
