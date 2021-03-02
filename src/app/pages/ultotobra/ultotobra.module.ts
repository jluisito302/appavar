import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltotobraPageRoutingModule } from './ultotobra-routing.module';

import { UltotobraPage } from './ultotobra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltotobraPageRoutingModule
  ],
  declarations: [UltotobraPage]
})
export class UltotobraPageModule {}
