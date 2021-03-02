import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllottelePageRoutingModule } from './allottele-routing.module';

import { AllottelePage } from './allottele.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    AllottelePageRoutingModule
  ],
  declarations: [AllottelePage]
})
export class AllottelePageModule {}
