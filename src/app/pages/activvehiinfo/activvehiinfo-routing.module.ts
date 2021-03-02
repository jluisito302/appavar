import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivvehiinfoPage } from './activvehiinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ActivvehiinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivvehiinfoPageRoutingModule {}
