import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosmttorfechasPageRoutingModule } from './costosmttorfechas-routing.module';

import { CostosmttorfechasPage } from './costosmttorfechas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CostosmttorfechasPageRoutingModule
  ],
  declarations: [CostosmttorfechasPage]
})
export class CostosmttorfechasPageModule {}
