import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostoseqgeneralesPageRoutingModule } from './costoseqgenerales-routing.module';

import { CostoseqgeneralesPage } from './costoseqgenerales.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CostoseqgeneralesPageRoutingModule
  ],
  declarations: [CostoseqgeneralesPage]
})
export class CostoseqgeneralesPageModule {}
