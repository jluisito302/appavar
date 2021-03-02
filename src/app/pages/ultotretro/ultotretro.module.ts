import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltotretroPageRoutingModule } from './ultotretro-routing.module';

import { UltotretroPage } from './ultotretro.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    UltotretroPageRoutingModule
  ],
  declarations: [UltotretroPage]
})
export class UltotretroPageModule {}
