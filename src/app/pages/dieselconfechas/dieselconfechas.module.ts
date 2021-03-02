import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DieselconfechasPageRoutingModule } from './dieselconfechas-routing.module';

import { DieselconfechasPage } from './dieselconfechas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DieselconfechasPageRoutingModule
  ],
  declarations: [DieselconfechasPage]
})
export class DieselconfechasPageModule {}
