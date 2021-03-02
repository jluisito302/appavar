import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VercheckrPage } from './vercheckr.page';

const routes: Routes = [
  {
    path: '',
    component: VercheckrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VercheckrPageRoutingModule {}
