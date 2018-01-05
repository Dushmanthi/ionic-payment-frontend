import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Card } from './card';

@NgModule({
  declarations: [
    Card,
  ],
  imports: [
    IonicPageModule.forChild(Card),
  ],
})
export class CardPageModule {}
