import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerotretroPageRoutingModule } from './verotretro-routing.module';

import { VerotretroPage } from './verotretro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerotretroPageRoutingModule
  ],
  declarations: [VerotretroPage]
})
export class VerotretroPageModule {}
