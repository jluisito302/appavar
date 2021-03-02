import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcheckplantaPage } from './allcheckplanta.page';

const routes: Routes = [
  {
    path: '',
    component: AllcheckplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllcheckplantaPageRoutingModule {}
