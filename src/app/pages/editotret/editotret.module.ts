import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditotretPageRoutingModule } from './editotret-routing.module';

import { EditotretPage } from './editotret.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditotretPageRoutingModule
  ],
  declarations: [EditotretPage]
})
export class EditotretPageModule {}
