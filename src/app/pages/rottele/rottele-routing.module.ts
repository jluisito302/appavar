import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RottelePage } from './rottele.page';

const routes: Routes = [
  {
    path: '',
    component: RottelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RottelePageRoutingModule {}
