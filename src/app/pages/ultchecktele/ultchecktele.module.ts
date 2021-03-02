import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltchecktelePageRoutingModule } from './ultchecktele-routing.module';

import { UltchecktelePage } from './ultchecktele.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    UltchecktelePageRoutingModule
  ],
  declarations: [UltchecktelePage]
})
export class UltchecktelePageModule {}
