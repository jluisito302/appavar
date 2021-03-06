import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivplantainfoPageRoutingModule } from './activplantainfo-routing.module';

import { ActivplantainfoPage } from './activplantainfo.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    ActivplantainfoPageRoutingModule
  ],
  declarations: [ActivplantainfoPage]
})
export class ActivplantainfoPageModule {}
