import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivretroinfoPageRoutingModule } from './activretroinfo-routing.module';

import { ActivretroinfoPage } from './activretroinfo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    ActivretroinfoPageRoutingModule
  ],
  declarations: [ActivretroinfoPage]
})
export class ActivretroinfoPageModule {}
