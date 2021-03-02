import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaqligeraPage } from './maqligera.page';

const routes: Routes = [
  {
    path: '',
    component: MaqligeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaqligeraPageRoutingModule {}
