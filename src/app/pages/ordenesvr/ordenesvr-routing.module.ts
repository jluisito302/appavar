import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenesvrPage } from './ordenesvr.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenesvrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesvrPageRoutingModule {}
