import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoPageRoutingModule } from './mantenimiento-routing.module';

import { MantenimientoPage } from './mantenimiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MantenimientoPageRoutingModule
  ],
  declarations: [MantenimientoPage]
})
export class MantenimientoPageModule {}
