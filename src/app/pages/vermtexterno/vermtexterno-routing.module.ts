import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermtexternoPage } from './vermtexterno.page';

const routes: Routes = [
  {
    path: '',
    component: VermtexternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VermtexternoPageRoutingModule {}
