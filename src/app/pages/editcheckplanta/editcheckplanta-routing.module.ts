import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcheckplantaPage } from './editcheckplanta.page';

const routes: Routes = [
  {
    path: '',
    component: EditcheckplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcheckplantaPageRoutingModule {}
