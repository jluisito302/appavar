import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmacenPageRoutingModule } from './almacen-routing.module';

import { AlmacenPage } from './almacen.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AlmacenPageRoutingModule
  ],
  declarations: [AlmacenPage]
})
export class AlmacenPageModule {}
