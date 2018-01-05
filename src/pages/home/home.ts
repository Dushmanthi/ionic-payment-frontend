import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../card/card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  carddetails() {
    this.navCtrl.push(Card);
  }

}