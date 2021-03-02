import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DieselconsgeneralPageRoutingModule } from './dieselconsgeneral-routing.module';

import { DieselconsgeneralPage } from './dieselconsgeneral.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DieselconsgeneralPageRoutingModule
  ],
  declarations: [DieselconsgeneralPage]
})
export class DieselconsgeneralPageModule {}
