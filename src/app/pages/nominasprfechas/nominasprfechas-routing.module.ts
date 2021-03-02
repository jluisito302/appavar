import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominasprfechasPage } from './nominasprfechas.page';

const routes: Routes = [
  {
    path: '',
    component: NominasprfechasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominasprfechasPageRoutingModule {}
