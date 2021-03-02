import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RottelePageRoutingModule } from './rottele-routing.module';

import { RottelePage } from './rottele.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RottelePageRoutingModule
  ],
  declarations: [RottelePage]
})
export class RottelePageModule {}
