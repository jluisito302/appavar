import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RordenesvPageRoutingModule } from './rordenesv-routing.module';

import { RordenesvPage } from './rordenesv.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RordenesvPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RordenesvPage]
})
export class RordenesvPageModule {}
