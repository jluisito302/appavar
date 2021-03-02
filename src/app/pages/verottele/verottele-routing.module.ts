import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerottelePage } from './verottele.page';

const routes: Routes = [
  {
    path: '',
    component: VerottelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerottelePageRoutingModule {}
