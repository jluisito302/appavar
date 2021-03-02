import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistabonosPageRoutingModule } from './histabonos-routing.module';

import { HistabonosPage } from './histabonos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HistabonosPageRoutingModule
  ],
  declarations: [HistabonosPage]
})
export class HistabonosPageModule {}
