import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditotvPageRoutingModule } from './editotv-routing.module';

import { EditotvPage } from './editotv.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditotvPageRoutingModule
  ],
  declarations: [EditotvPage]
})
export class EditotvPageModule {}
