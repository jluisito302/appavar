import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltcheckvPageRoutingModule } from './ultcheckv-routing.module';

import { UltcheckvPage } from './ultcheckv.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    UltcheckvPageRoutingModule
  ],
  declarations: [UltcheckvPage]
})
export class UltcheckvPageModule {}
