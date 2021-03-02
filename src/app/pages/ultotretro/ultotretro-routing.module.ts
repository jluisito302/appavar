import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltotretroPage } from './ultotretro.page';

const routes: Routes = [
  {
    path: '',
    component: UltotretroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltotretroPageRoutingModule {}
