import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobrosfechafechaPageRoutingModule } from './cobrosfechafecha-routing.module';

import { CobrosfechafechaPage } from './cobrosfechafecha.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CobrosfechafechaPageRoutingModule
  ],
  declarations: [CobrosfechafechaPage]
})
export class CobrosfechafechaPageModule {}
