import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepadministracionPage } from './repadministracion.page';

const routes: Routes = [
  {
    path: '',
    component: RepadministracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepadministracionPageRoutingModule {}
