import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursoshumanosPage } from './recursoshumanos.page';

const routes: Routes = [
  {
    path: '',
    component: RecursoshumanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursoshumanosPageRoutingModule {}
