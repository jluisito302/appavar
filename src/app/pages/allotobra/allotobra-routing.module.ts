import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllotobraPage } from './allotobra.page';

const routes: Routes = [
  {
    path: '',
    component: AllotobraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllotobraPageRoutingModule {}
