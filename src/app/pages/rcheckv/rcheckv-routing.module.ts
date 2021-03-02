import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcheckvPage } from './rcheckv.page';

const routes: Routes = [
  {
    path: '',
    component: RcheckvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcheckvPageRoutingModule {}
