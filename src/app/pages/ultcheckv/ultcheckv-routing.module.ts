import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltcheckvPage } from './ultcheckv.page';

const routes: Routes = [
  {
    path: '',
    component: UltcheckvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltcheckvPageRoutingModule {}
