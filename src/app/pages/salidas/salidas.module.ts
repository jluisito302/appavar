import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalidasPageRoutingModule } from './salidas-routing.module';

import { SalidasPage } from './salidas.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SalidasPageRoutingModule
  ],
  declarations: [SalidasPage]
})
export class SalidasPageModule {}
