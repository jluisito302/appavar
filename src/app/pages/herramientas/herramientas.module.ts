import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasPageRoutingModule } from './herramientas-routing.module';

import { HerramientasPage } from './herramientas.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    HerramientasPageRoutingModule
  ],
  declarations: [HerramientasPage]
})
export class HerramientasPageModule {}
