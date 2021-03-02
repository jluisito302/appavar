import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditotplantaPage } from './editotplanta.page';

const routes: Routes = [
  {
    path: '',
    component: EditotplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditotplantaPageRoutingModule {}
