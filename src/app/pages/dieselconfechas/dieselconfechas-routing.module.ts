import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DieselconfechasPage } from './dieselconfechas.page';

const routes: Routes = [
  {
    path: '',
    component: DieselconfechasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DieselconfechasPageRoutingModule {}
