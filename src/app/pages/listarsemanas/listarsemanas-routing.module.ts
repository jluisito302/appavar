import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarsemanasPage } from './listarsemanas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarsemanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarsemanasPageRoutingModule {}
