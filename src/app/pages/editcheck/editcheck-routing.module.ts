import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcheckPage } from './editcheck.page';

const routes: Routes = [
  {
    path: '',
    component: EditcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcheckPageRoutingModule {}
