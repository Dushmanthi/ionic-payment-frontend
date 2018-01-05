import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { Stripe } from '@ionic-native/stripe';

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class Card {
  cardinfo: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public stripe: Stripe, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Card');
  }

  pay() {
    this.stripe.setPublishableKey('pk_test_fQRQ8D0byRBCHs3sZNX7tani');
    this.stripe.createCardToken(this.cardinfo).then((token) => {
      var data = 'stripetoken=' + token + '&amount=50';
      var headers = new Headers();
      headers.append('Conent-Type', 'application/x-www-form-urlencoded');
      this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
        if (res.json().success)
        alert('transaction Successfull!!')  
      })
    })
  }
    
}