import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivteleinfoPage } from './activteleinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ActivteleinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivteleinfoPageRoutingModule {}
