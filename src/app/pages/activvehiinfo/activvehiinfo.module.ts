import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivvehiinfoPageRoutingModule } from './activvehiinfo-routing.module';

import { ActivvehiinfoPage } from './activvehiinfo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    ActivvehiinfoPageRoutingModule
  ],
  declarations: [ActivvehiinfoPage]
})
export class ActivvehiinfoPageModule {}
