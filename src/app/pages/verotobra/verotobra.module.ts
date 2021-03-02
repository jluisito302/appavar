import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerotobraPageRoutingModule } from './verotobra-routing.module';

import { VerotobraPage } from './verotobra.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    VerotobraPageRoutingModule
  ],
  declarations: [VerotobraPage]
})
export class VerotobraPageModule {}
