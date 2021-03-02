import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RchecktelePageRoutingModule } from './rchecktele-routing.module';

import { RchecktelePage } from './rchecktele.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RchecktelePageRoutingModule
  ],
  declarations: [RchecktelePage]
})
export class RchecktelePageModule {}
