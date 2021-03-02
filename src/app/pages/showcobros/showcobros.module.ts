import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcobrosPageRoutingModule } from './showcobros-routing.module';

import { ShowcobrosPage } from './showcobros.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ShowcobrosPageRoutingModule
  ],
  declarations: [ShowcobrosPage]
})
export class ShowcobrosPageModule {}
