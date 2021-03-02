import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditotobraPage } from './editotobra.page';

const routes: Routes = [
  {
    path: '',
    component: EditotobraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditotobraPageRoutingModule {}
