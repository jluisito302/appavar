import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvrubrosfechasPageRoutingModule } from './invrubrosfechas-routing.module';

import { InvrubrosfechasPage } from './invrubrosfechas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InvrubrosfechasPageRoutingModule
  ],
  declarations: [InvrubrosfechasPage]
})
export class InvrubrosfechasPageModule {}
