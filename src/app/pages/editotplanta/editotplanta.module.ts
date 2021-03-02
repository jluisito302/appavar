import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditotplantaPageRoutingModule } from './editotplanta-routing.module';

import { EditotplantaPage } from './editotplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditotplantaPageRoutingModule
  ],
  declarations: [EditotplantaPage]
})
export class EditotplantaPageModule {}
