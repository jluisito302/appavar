import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllotplantaPage } from './allotplanta.page';

const routes: Routes = [
  {
    path: '',
    component: AllotplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllotplantaPageRoutingModule {}
