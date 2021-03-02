import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominaspsemanasPage } from './nominaspsemanas.page';

const routes: Routes = [
  {
    path: '',
    component: NominaspsemanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominaspsemanasPageRoutingModule {}
