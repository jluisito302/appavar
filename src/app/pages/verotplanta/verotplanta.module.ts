import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerotplantaPageRoutingModule } from './verotplanta-routing.module';

import { VerotplantaPage } from './verotplanta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VerotplantaPageRoutingModule
  ],
  declarations: [VerotplantaPage]
})
export class VerotplantaPageModule {}
