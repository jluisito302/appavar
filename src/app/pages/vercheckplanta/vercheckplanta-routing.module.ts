import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VercheckplantaPage } from './vercheckplanta.page';

const routes: Routes = [
  {
    path: '',
    component: VercheckplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VercheckplantaPageRoutingModule {}
