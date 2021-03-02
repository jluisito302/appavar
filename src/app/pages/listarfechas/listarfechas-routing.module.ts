import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarfechasPage } from './listarfechas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarfechasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarfechasPageRoutingModule {}
