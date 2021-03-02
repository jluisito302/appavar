import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RotplantaPageRoutingModule } from './rotplanta-routing.module';

import { RotplantaPage } from './rotplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RotplantaPageRoutingModule
  ],
  declarations: [RotplantaPage]
})
export class RotplantaPageModule {}
