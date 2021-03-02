import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcheckvPage } from './allcheckv.page';

const routes: Routes = [
  {
    path: '',
    component: AllcheckvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllcheckvPageRoutingModule {}
