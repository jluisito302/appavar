import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckplantainfoPageRoutingModule } from './checkplantainfo-routing.module';

import { CheckplantainfoPage } from './checkplantainfo.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    CheckplantainfoPageRoutingModule
  ],
  declarations: [CheckplantainfoPage]
})
export class CheckplantainfoPageModule {}
