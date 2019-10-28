import { Vibration } from '@ionic-native/vibration';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GpsPage } from './../pages/gps/gps';
import { EventosPage } from './../pages/eventos/eventos';
import { Evento1Page } from './../pages/evento1/evento1';
import { AddeventoPage } from './../pages/addevento/addevento';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public geolocation: Geolocation,
    public camera: Camera,
    public vibration: Vibration) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Cadastro', component: CadastroPage },
      { title: 'Gps', component: GpsPage },
      { title: 'Eventos', component: EventosPage },
      { title: 'Evento1', component: Evento1Page },
      { title: 'Addevento', component: AddeventoPage }
    ]; 

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  pegarGps() {
    this.geolocation
    .getCurrentPosition()
    .then((resp) =>{
      let lat = resp.coords.latitude
      let log = resp.coords.longitude
  
      alert('Sua posição é ' + lat + ' ' + log)
    })   
    .catch((error) => {
      console.log('Error getting location', error)
    }) 
  }

  vibrar() {
    this.vibration.vibrate([2000,1000,2000]);
  }

  abrirCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  
  }
}
