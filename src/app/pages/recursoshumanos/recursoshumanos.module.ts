import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursoshumanosPageRoutingModule } from './recursoshumanos-routing.module';

import { RecursoshumanosPage } from './recursoshumanos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RecursoshumanosPageRoutingModule
  ],
  declarations: [RecursoshumanosPage]
})
export class RecursoshumanosPageModule {}
