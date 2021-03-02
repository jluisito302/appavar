import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckvinformacionPageRoutingModule } from './checkvinformacion-routing.module';

import { CheckvinformacionPage } from './checkvinformacion.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    CheckvinformacionPageRoutingModule
  ],
  declarations: [CheckvinformacionPage]
})
export class CheckvinformacionPageModule {}
