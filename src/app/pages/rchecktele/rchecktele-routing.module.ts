import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RchecktelePage } from './rchecktele.page';

const routes: Routes = [
  {
    path: '',
    component: RchecktelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RchecktelePageRoutingModule {}
