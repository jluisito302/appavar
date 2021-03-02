import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermtexternoPageRoutingModule } from './vermtexterno-routing.module';

import { VermtexternoPage } from './vermtexterno.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    VermtexternoPageRoutingModule
  ],
  declarations: [VermtexternoPage]
})
export class VermtexternoPageModule {}
