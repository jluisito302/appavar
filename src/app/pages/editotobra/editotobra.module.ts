import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditotobraPageRoutingModule } from './editotobra-routing.module';

import { EditotobraPage } from './editotobra.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    EditotobraPageRoutingModule
  ],
  declarations: [EditotobraPage]
})
export class EditotobraPageModule {}
