import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermttoregPageRoutingModule } from './vermttoreg-routing.module';

import { VermttoregPage } from './vermttoreg.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VermttoregPageRoutingModule
  ],
  declarations: [VermttoregPage]
})
export class VermttoregPageModule {}
