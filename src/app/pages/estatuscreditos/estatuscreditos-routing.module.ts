import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatuscreditosPage } from './estatuscreditos.page';

const routes: Routes = [
  {
    path: '',
    component: EstatuscreditosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatuscreditosPageRoutingModule {}
