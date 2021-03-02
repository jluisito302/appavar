import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllordenesvPage } from './allordenesv.page';

const routes: Routes = [
  {
    path: '',
    component: AllordenesvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllordenesvPageRoutingModule {}
