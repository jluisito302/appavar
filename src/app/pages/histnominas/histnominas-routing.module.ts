import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistnominasPage } from './histnominas.page';

const routes: Routes = [
  {
    path: '',
    component: HistnominasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistnominasPageRoutingModule {}
