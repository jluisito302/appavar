import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllcheckplantaPageRoutingModule } from './allcheckplanta-routing.module';

import { AllcheckplantaPage } from './allcheckplanta.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    AllcheckplantaPageRoutingModule
  ],
  declarations: [AllcheckplantaPage]
})
export class AllcheckplantaPageModule {}
