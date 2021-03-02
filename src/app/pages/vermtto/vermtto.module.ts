import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermttoPageRoutingModule } from './vermtto-routing.module';

import { VermttoPage } from './vermtto.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    VermttoPageRoutingModule
  ],
  declarations: [VermttoPage]
})
export class VermttoPageModule {}
