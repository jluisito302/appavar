import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerotvPage } from './verotv.page';

const routes: Routes = [
  {
    path: '',
    component: VerotvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerotvPageRoutingModule {}
