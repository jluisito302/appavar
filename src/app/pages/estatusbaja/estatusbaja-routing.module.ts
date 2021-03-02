import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatusbajaPage } from './estatusbaja.page';

const routes: Routes = [
  {
    path: '',
    component: EstatusbajaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatusbajaPageRoutingModule {}
