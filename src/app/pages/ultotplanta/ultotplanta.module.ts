import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltotplantaPageRoutingModule } from './ultotplanta-routing.module';

import { UltotplantaPage } from './ultotplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    UltotplantaPageRoutingModule
  ],
  declarations: [UltotplantaPage]
})
export class UltotplantaPageModule {}
