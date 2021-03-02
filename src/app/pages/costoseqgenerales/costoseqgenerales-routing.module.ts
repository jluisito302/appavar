import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostoseqgeneralesPage } from './costoseqgenerales.page';

const routes: Routes = [
  {
    path: '',
    component: CostoseqgeneralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostoseqgeneralesPageRoutingModule {}
