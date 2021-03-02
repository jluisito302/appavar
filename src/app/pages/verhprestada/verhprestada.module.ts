import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerhprestadaPageRoutingModule } from './verhprestada-routing.module';

import { VerhprestadaPage } from './verhprestada.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerhprestadaPageRoutingModule
  ],
  declarations: [VerhprestadaPage]
})
export class VerhprestadaPageModule {}
