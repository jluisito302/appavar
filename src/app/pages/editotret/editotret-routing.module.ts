import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditotretPage } from './editotret.page';

const routes: Routes = [
  {
    path: '',
    component: EditotretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditotretPageRoutingModule {}
