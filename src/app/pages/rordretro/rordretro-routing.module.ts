import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RordretroPage } from './rordretro.page';

const routes: Routes = [
  {
    path: '',
    component: RordretroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RordretroPageRoutingModule {}
