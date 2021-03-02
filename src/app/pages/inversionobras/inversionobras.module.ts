import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InversionobrasPageRoutingModule } from './inversionobras-routing.module';

import { InversionobrasPage } from './inversionobras.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InversionobrasPageRoutingModule
  ],
  declarations: [InversionobrasPage]
})
export class InversionobrasPageModule {}
