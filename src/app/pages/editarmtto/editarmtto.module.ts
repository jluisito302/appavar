import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmttoPageRoutingModule } from './editarmtto-routing.module';

import { EditarmttoPage } from './editarmtto.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    EditarmttoPageRoutingModule
  ],
  declarations: [EditarmttoPage]
})
export class EditarmttoPageModule {}
