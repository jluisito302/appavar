import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegdecostosPageRoutingModule } from './regdecostos-routing.module';

import { RegdecostosPage } from './regdecostos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegdecostosPageRoutingModule
  ],
  declarations: [RegdecostosPage]
})
export class RegdecostosPageModule {}
