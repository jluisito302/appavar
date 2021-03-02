import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcredespecificosPageRoutingModule } from './acredespecificos-routing.module';

import { AcredespecificosPage } from './acredespecificos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AcredespecificosPageRoutingModule
  ],
  declarations: [AcredespecificosPage]
})
export class AcredespecificosPageModule {}
