import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerottelePageRoutingModule } from './verottele-routing.module';

import { VerottelePage } from './verottele.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerottelePageRoutingModule
  ],
  declarations: [VerottelePage]
})
export class VerottelePageModule {}
