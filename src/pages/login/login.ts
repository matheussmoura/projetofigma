import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro'
import { GpsPage } from '../gps/gps';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: String
  senha: String

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fazerLogin() {
    if (this.email == 'admin' && this.senha == "admin"){
      alert('Logado!')
    } else {
      alert('E-mail ou senha inválidos!')
    }
  }
  
  abrirCadastro() {
    this.navCtrl.push(CadastroPage)
  }
 
  abrirGps() {
    this.navCtrl.push(GpsPage)
  }

}
