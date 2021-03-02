import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegabonosPageRoutingModule } from './regabonos-routing.module';

import { RegabonosPage } from './regabonos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegabonosPageRoutingModule
  ],
  declarations: [RegabonosPage]
})
export class RegabonosPageModule {}
