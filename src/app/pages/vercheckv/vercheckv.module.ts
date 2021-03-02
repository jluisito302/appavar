import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VercheckvPageRoutingModule } from './vercheckv-routing.module';

import { VercheckvPage } from './vercheckv.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VercheckvPageRoutingModule
  ],
  declarations: [VercheckvPage]
})
export class VercheckvPageModule {}
