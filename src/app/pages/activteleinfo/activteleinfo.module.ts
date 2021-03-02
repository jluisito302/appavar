import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivteleinfoPageRoutingModule } from './activteleinfo-routing.module';

import { ActivteleinfoPage } from './activteleinfo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    ActivteleinfoPageRoutingModule
  ],
  declarations: [ActivteleinfoPage]
})
export class ActivteleinfoPageModule {}
