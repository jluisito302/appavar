import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominaspsemanasPageRoutingModule } from './nominaspsemanas-routing.module';

import { NominaspsemanasPage } from './nominaspsemanas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NominaspsemanasPageRoutingModule
  ],
  declarations: [NominaspsemanasPage]
})
export class NominaspsemanasPageModule {}
