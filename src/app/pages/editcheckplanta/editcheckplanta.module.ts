import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcheckplantaPageRoutingModule } from './editcheckplanta-routing.module';

import { EditcheckplantaPage } from './editcheckplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditcheckplantaPageRoutingModule
  ],
  declarations: [EditcheckplantaPage]
})
export class EditcheckplantaPageModule {}
