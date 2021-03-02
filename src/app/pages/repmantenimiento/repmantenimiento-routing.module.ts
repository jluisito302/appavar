import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepmantenimientoPage } from './repmantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: RepmantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepmantenimientoPageRoutingModule {}
