import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllotplantaPageRoutingModule } from './allotplanta-routing.module';

import { AllotplantaPage } from './allotplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    AllotplantaPageRoutingModule
  ],
  declarations: [AllotplantaPage]
})
export class AllotplantaPageModule {}
