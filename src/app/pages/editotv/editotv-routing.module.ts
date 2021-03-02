import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditotvPage } from './editotv.page';

const routes: Routes = [
  {
    path: '',
    component: EditotvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditotvPageRoutingModule {}
