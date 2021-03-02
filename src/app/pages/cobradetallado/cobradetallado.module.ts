import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobradetalladoPageRoutingModule } from './cobradetallado-routing.module';

import { CobradetalladoPage } from './cobradetallado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CobradetalladoPageRoutingModule
  ],
  declarations: [CobradetalladoPage]
})
export class CobradetalladoPageModule {}
