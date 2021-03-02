import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaqligeraPageRoutingModule } from './maqligera-routing.module';

import { MaqligeraPage } from './maqligera.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MaqligeraPageRoutingModule
  ],
  declarations: [MaqligeraPage]
})
export class MaqligeraPageModule {}
