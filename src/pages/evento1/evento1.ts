import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';

/**
 * Generated class for the Evento1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento1',
  templateUrl: 'evento1.html',
})
export class Evento1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Evento1Page');
  }

  abrirEventos() {
    this.navCtrl.setRoot(EventosPage)
  }
}
