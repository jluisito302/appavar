import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepalmacenPageRoutingModule } from './repalmacen-routing.module';

import { RepalmacenPage } from './repalmacen.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RepalmacenPageRoutingModule
  ],
  declarations: [RepalmacenPage]
})
export class RepalmacenPageModule {}
