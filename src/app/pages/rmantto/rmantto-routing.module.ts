import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmanttoPage } from './rmantto.page';

const routes: Routes = [
  {
    path: '',
    component: RmanttoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmanttoPageRoutingModule {}
