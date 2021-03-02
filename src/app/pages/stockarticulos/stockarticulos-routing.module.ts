import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockarticulosPage } from './stockarticulos.page';

const routes: Routes = [
  {
    path: '',
    component: StockarticulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockarticulosPageRoutingModule {}
