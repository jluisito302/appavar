import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockarticulosPageRoutingModule } from './stockarticulos-routing.module';

import { StockarticulosPage } from './stockarticulos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    StockarticulosPageRoutingModule
  ],
  declarations: [StockarticulosPage]
})
export class StockarticulosPageModule {}
