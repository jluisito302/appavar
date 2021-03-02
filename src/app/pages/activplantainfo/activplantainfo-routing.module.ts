import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivplantainfoPage } from './activplantainfo.page';

const routes: Routes = [
  {
    path: '',
    component: ActivplantainfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivplantainfoPageRoutingModule {}
