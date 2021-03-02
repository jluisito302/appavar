import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepalmacenPage } from './repalmacen.page';

const routes: Routes = [
  {
    path: '',
    component: RepalmacenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepalmacenPageRoutingModule {}
