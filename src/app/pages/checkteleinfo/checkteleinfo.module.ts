import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckteleinfoPageRoutingModule } from './checkteleinfo-routing.module';

import { CheckteleinfoPage } from './checkteleinfo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    CheckteleinfoPageRoutingModule
  ],
  declarations: [CheckteleinfoPage]
})
export class CheckteleinfoPageModule {}
