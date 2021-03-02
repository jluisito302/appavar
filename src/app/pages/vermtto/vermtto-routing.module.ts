import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermttoPage } from './vermtto.page';

const routes: Routes = [
  {
    path: '',
    component: VermttoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VermttoPageRoutingModule {}
