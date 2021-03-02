import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostosmttorfechasPage } from './costosmttorfechas.page';

const routes: Routes = [
  {
    path: '',
    component: CostosmttorfechasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostosmttorfechasPageRoutingModule {}
