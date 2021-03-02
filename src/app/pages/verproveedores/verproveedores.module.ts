import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerproveedoresPageRoutingModule } from './verproveedores-routing.module';

import { VerproveedoresPage } from './verproveedores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerproveedoresPageRoutingModule
  ],
  declarations: [VerproveedoresPage]
})
export class VerproveedoresPageModule {}
