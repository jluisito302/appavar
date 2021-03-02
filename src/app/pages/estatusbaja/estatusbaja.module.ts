import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatusbajaPageRoutingModule } from './estatusbaja-routing.module';

import { EstatusbajaPage } from './estatusbaja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatusbajaPageRoutingModule
  ],
  declarations: [EstatusbajaPage]
})
export class EstatusbajaPageModule {}
