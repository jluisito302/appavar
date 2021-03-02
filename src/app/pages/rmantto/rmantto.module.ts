import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmanttoPageRoutingModule } from './rmantto-routing.module';

import { RmanttoPage } from './rmantto.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    RmanttoPageRoutingModule
  ],
  declarations: [RmanttoPage]
})
export class RmanttoPageModule {}
