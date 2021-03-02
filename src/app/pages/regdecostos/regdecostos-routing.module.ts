import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegdecostosPage } from './regdecostos.page';

const routes: Routes = [
  {
    path: '',
    component: RegdecostosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegdecostosPageRoutingModule {}
