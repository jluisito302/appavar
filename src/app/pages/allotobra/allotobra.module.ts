import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllotobraPageRoutingModule } from './allotobra-routing.module';

import { AllotobraPage } from './allotobra.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    AllotobraPageRoutingModule
  ],
  declarations: [AllotobraPage]
})
export class AllotobraPageModule {}
