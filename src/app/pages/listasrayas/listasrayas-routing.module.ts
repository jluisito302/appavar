import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasrayasPage } from './listasrayas.page';

const routes: Routes = [
  {
    path: '',
    component: ListasrayasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasrayasPageRoutingModule {}
