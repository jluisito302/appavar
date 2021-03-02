import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MttoexternosPageRoutingModule } from './mttoexternos-routing.module';

import { MttoexternosPage } from './mttoexternos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MttoexternosPageRoutingModule
  ],
  declarations: [MttoexternosPage]
})
export class MttoexternosPageModule {}
