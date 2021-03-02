import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenesvrPageRoutingModule } from './ordenesvr-routing.module';

import { OrdenesvrPage } from './ordenesvr.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    OrdenesvrPageRoutingModule
  ],
  declarations: [OrdenesvrPage]
})
export class OrdenesvrPageModule {}
