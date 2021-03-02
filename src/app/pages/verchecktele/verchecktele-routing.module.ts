import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerchecktelePage } from './verchecktele.page';

const routes: Routes = [
  {
    path: '',
    component: VerchecktelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerchecktelePageRoutingModule {}
