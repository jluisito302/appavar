import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservarmttoPageRoutingModule } from './observarmtto-routing.module';

import { ObservarmttoPage } from './observarmtto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ObservarmttoPageRoutingModule
  ],
  declarations: [ObservarmttoPage]
})
export class ObservarmttoPageModule {}
