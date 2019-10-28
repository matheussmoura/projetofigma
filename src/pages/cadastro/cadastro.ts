import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  email: String
  senha: String
  nome: String
  dtNascimento: Date

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar() {
    this.navCtrl.setRoot(LoginPage)
  }

  jaPossuoConta() {
    this.navCtrl.push(LoginPage)
  }
}
