import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprhPage } from './reprh.page';

const routes: Routes = [
  {
    path: '',
    component: ReprhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprhPageRoutingModule {}
