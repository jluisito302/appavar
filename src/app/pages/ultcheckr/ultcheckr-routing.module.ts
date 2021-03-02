import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltcheckrPage } from './ultcheckr.page';

const routes: Routes = [
  {
    path: '',
    component: UltcheckrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltcheckrPageRoutingModule {}
