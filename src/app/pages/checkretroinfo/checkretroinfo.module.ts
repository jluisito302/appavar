import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckretroinfoPageRoutingModule } from './checkretroinfo-routing.module';

import { CheckretroinfoPage } from './checkretroinfo.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    CheckretroinfoPageRoutingModule
  ],
  declarations: [CheckretroinfoPage]
})
export class CheckretroinfoPageModule {}
