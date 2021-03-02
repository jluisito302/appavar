import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcheckretroPageRoutingModule } from './rcheckretro-routing.module';

import { RcheckretroPage } from './rcheckretro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcheckretroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RcheckretroPage]
})
export class RcheckretroPageModule {}
