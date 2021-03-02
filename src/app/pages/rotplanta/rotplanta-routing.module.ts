import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotplantaPage } from './rotplanta.page';

const routes: Routes = [
  {
    path: '',
    component: RotplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotplantaPageRoutingModule {}
