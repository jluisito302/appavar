import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VercheckrPageRoutingModule } from './vercheckr-routing.module';

import { VercheckrPage } from './vercheckr.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VercheckrPageRoutingModule
  ],
  declarations: [VercheckrPage]
})
export class VercheckrPageModule {}
