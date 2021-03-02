import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltottelePage } from './ultottele.page';

const routes: Routes = [
  {
    path: '',
    component: UltottelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltottelePageRoutingModule {}
