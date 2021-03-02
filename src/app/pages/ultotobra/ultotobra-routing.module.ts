import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltotobraPage } from './ultotobra.page';

const routes: Routes = [
  {
    path: '',
    component: UltotobraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltotobraPageRoutingModule {}
