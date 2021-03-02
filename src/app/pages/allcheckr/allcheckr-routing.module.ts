import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcheckrPage } from './allcheckr.page';

const routes: Routes = [
  {
    path: '',
    component: AllcheckrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllcheckrPageRoutingModule {}
