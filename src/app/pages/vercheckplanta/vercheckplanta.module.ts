import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VercheckplantaPageRoutingModule } from './vercheckplanta-routing.module';

import { VercheckplantaPage } from './vercheckplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VercheckplantaPageRoutingModule
  ],
  declarations: [VercheckplantaPage]
})
export class VercheckplantaPageModule {}
