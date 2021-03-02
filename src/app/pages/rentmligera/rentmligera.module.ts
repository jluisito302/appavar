import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentmligeraPageRoutingModule } from './rentmligera-routing.module';

import { RentmligeraPage } from './rentmligera.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RentmligeraPageRoutingModule
  ],
  declarations: [RentmligeraPage]
})
export class RentmligeraPageModule {}
