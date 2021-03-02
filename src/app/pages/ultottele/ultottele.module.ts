import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltottelePageRoutingModule } from './ultottele-routing.module';

import { UltottelePage } from './ultottele.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    UltottelePageRoutingModule
  ],
  declarations: [UltottelePage]
})
export class UltottelePageModule {}
