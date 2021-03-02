import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditottelePageRoutingModule } from './editottele-routing.module';

import { EditottelePage } from './editottele.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditottelePageRoutingModule
  ],
  declarations: [EditottelePage]
})
export class EditottelePageModule {}
