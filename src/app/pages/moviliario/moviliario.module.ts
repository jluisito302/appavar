import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviliarioPageRoutingModule } from './moviliario-routing.module';

import { MoviliarioPage } from './moviliario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MoviliarioPageRoutingModule
  ],
  declarations: [MoviliarioPage]
})
export class MoviliarioPageModule {}
