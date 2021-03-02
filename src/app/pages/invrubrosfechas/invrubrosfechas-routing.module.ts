import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvrubrosfechasPage } from './invrubrosfechas.page';

const routes: Routes = [
  {
    path: '',
    component: InvrubrosfechasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvrubrosfechasPageRoutingModule {}
