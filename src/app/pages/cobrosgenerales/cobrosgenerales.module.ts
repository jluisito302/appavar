import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobrosgeneralesPageRoutingModule } from './cobrosgenerales-routing.module';

import { CobrosgeneralesPage } from './cobrosgenerales.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CobrosgeneralesPageRoutingModule
  ],
  declarations: [CobrosgeneralesPage]
})
export class CobrosgeneralesPageModule {}
