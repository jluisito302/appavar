import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservarmttoPage } from './observarmtto.page';

const routes: Routes = [
  {
    path: '',
    component: ObservarmttoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservarmttoPageRoutingModule {}
