import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcheckvPageRoutingModule } from './rcheckv-routing.module';

import { RcheckvPage } from './rcheckv.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcheckvPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RcheckvPage]
})
export class RcheckvPageModule {}
