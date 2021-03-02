import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObrasprocesoPage } from './obrasproceso.page';

const routes: Routes = [
  {
    path: '',
    component: ObrasprocesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObrasprocesoPageRoutingModule {}
