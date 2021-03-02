import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllchecktelePage } from './allchecktele.page';

const routes: Routes = [
  {
    path: '',
    component: AllchecktelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllchecktelePageRoutingModule {}
