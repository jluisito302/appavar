import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DieselconsgeneralPage } from './dieselconsgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: DieselconsgeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DieselconsgeneralPageRoutingModule {}
