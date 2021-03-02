import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivobrainfoPage } from './activobrainfo.page';

const routes: Routes = [
  {
    path: '',
    component: ActivobrainfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivobrainfoPageRoutingModule {}
