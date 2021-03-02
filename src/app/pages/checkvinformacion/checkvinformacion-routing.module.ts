import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckvinformacionPage } from './checkvinformacion.page';

const routes: Routes = [
  {
    path: '',
    component: CheckvinformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckvinformacionPageRoutingModule {}
