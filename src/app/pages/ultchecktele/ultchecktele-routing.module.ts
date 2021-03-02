import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltchecktelePage } from './ultchecktele.page';

const routes: Routes = [
  {
    path: '',
    component: UltchecktelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltchecktelePageRoutingModule {}
