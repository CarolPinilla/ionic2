import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MipaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mipagina',
  templateUrl: 'mipagina.html',
})
export class MipaginaPage {

  objeto: Array<{title:string, description: string, num: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.objeto = [
      {title:'primero', description: 'este es el primero', num: '1' },
      {title:'segundo', description: 'este es el segundo', num: '2' },
      {title:'tercero', description: 'este es el tercero', num: '3' },
      {title:'cuarto', description: 'este es el cuarto', num: '4' }
    ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MipaginaPage');
  }

}
