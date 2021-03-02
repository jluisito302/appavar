import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentmligeraPage } from './rentmligera.page';

const routes: Routes = [
  {
    path: '',
    component: RentmligeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentmligeraPageRoutingModule {}
