import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltcheckplantaPageRoutingModule } from './ultcheckplanta-routing.module';

import { UltcheckplantaPage } from './ultcheckplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    UltcheckplantaPageRoutingModule
  ],
  declarations: [UltcheckplantaPage]
})
export class UltcheckplantaPageModule {}
