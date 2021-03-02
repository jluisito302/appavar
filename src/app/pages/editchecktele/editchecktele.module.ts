import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditchecktelePageRoutingModule } from './editchecktele-routing.module';

import { EditchecktelePage } from './editchecktele.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditchecktelePageRoutingModule
  ],
  declarations: [EditchecktelePage]
})
export class EditchecktelePageModule {}
