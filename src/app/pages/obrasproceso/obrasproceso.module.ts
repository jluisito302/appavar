import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObrasprocesoPageRoutingModule } from './obrasproceso-routing.module';

import { ObrasprocesoPage } from './obrasproceso.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ObrasprocesoPageRoutingModule
  ],
  declarations: [ObrasprocesoPage]
})
export class ObrasprocesoPageModule {}
