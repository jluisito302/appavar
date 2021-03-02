import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerrprestadasPageRoutingModule } from './herrprestadas-routing.module';

import { HerrprestadasPage } from './herrprestadas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HerrprestadasPageRoutingModule
  ],
  declarations: [HerrprestadasPage]
})
export class HerrprestadasPageModule {}
