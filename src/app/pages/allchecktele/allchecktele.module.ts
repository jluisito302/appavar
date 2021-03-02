import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllchecktelePageRoutingModule } from './allchecktele-routing.module';

import { AllchecktelePage } from './allchecktele.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    AllchecktelePageRoutingModule
  ],
  declarations: [AllchecktelePage]
})
export class AllchecktelePageModule {}
