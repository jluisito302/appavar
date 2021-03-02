import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcheckplantaPageRoutingModule } from './rcheckplanta-routing.module';

import { RcheckplantaPage } from './rcheckplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RcheckplantaPageRoutingModule
  ],
  declarations: [RcheckplantaPage]
})
export class RcheckplantaPageModule {}
