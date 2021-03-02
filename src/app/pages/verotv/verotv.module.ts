import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerotvPageRoutingModule } from './verotv-routing.module';

import { VerotvPage } from './verotv.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerotvPageRoutingModule
  ],
  declarations: [VerotvPage]
})
export class VerotvPageModule {}
