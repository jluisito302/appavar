import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominasprfechasPageRoutingModule } from './nominasprfechas-routing.module';

import { NominasprfechasPage } from './nominasprfechas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NominasprfechasPageRoutingModule
  ],
  declarations: [NominasprfechasPage]
})
export class NominasprfechasPageModule {}
