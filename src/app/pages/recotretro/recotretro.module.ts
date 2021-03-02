import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecotretroPageRoutingModule } from './recotretro-routing.module';

import { RecotretroPage } from './recotretro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecotretroPageRoutingModule
  ],
  declarations: [RecotretroPage]
})
export class RecotretroPageModule {}
