import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllottelePage } from './allottele.page';

const routes: Routes = [
  {
    path: '',
    component: AllottelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllottelePageRoutingModule {}
