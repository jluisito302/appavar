import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepmantenimientoPageRoutingModule } from './repmantenimiento-routing.module';

import { RepmantenimientoPage } from './repmantenimiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RepmantenimientoPageRoutingModule
  ],
  declarations: [RepmantenimientoPage]
})
export class RepmantenimientoPageModule {}
