import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcheckrPage } from './editcheckr.page';

const routes: Routes = [
  {
    path: '',
    component: EditcheckrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcheckrPageRoutingModule {}
