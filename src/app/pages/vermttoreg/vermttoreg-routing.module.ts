import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermttoregPage } from './vermttoreg.page';

const routes: Routes = [
  {
    path: '',
    component: VermttoregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VermttoregPageRoutingModule {}
