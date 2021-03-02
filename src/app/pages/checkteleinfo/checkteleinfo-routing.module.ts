import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckteleinfoPage } from './checkteleinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CheckteleinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckteleinfoPageRoutingModule {}
