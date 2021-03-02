import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltcheckrPageRoutingModule } from './ultcheckr-routing.module';

import { UltcheckrPage } from './ultcheckr.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    UltcheckrPageRoutingModule
  ],
  declarations: [UltcheckrPage]
})
export class UltcheckrPageModule {}
