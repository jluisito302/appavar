import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcheckplantaPage } from './rcheckplanta.page';

const routes: Routes = [
  {
    path: '',
    component: RcheckplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcheckplantaPageRoutingModule {}
