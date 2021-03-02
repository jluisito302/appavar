import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllordenesvPageRoutingModule } from './allordenesv-routing.module';

import { AllordenesvPage } from './allordenesv.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    AllordenesvPageRoutingModule
  ],
  declarations: [AllordenesvPage]
})
export class AllordenesvPageModule {}
