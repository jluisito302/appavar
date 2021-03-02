import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RordretroPageRoutingModule } from './rordretro-routing.module';

import { RordretroPage } from './rordretro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RordretroPageRoutingModule
  ],
  declarations: [RordretroPage]
})
export class RordretroPageModule {}
