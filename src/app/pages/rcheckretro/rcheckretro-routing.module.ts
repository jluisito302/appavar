import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcheckretroPage } from './rcheckretro.page';

const routes: Routes = [
  {
    path: '',
    component: RcheckretroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcheckretroPageRoutingModule {}
