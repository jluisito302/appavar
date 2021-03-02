import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckplantainfoPage } from './checkplantainfo.page';

const routes: Routes = [
  {
    path: '',
    component: CheckplantainfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckplantainfoPageRoutingModule {}
