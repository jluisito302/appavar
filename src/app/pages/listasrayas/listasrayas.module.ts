import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasrayasPageRoutingModule } from './listasrayas-routing.module';

import { ListasrayasPage } from './listasrayas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListasrayasPageRoutingModule
  ],
  declarations: [ListasrayasPage]
})
export class ListasrayasPageModule {}
