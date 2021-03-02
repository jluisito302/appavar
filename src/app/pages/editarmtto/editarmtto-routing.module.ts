import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarmttoPage } from './editarmtto.page';

const routes: Routes = [
  {
    path: '',
    component: EditarmttoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarmttoPageRoutingModule {}
