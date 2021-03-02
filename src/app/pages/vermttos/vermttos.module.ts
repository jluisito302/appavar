import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermttosPageRoutingModule } from './vermttos-routing.module';

import { VermttosPage } from './vermttos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VermttosPageRoutingModule
  ],
  declarations: [VermttosPage]
})
export class VermttosPageModule {}
