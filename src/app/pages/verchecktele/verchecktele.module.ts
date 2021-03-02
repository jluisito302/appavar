import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerchecktelePageRoutingModule } from './verchecktele-routing.module';

import { VerchecktelePage } from './verchecktele.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerchecktelePageRoutingModule
  ],
  declarations: [VerchecktelePage]
})
export class VerchecktelePageModule {}
