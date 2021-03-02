import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcredespecificosPage } from './acredespecificos.page';

const routes: Routes = [
  {
    path: '',
    component: AcredespecificosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcredespecificosPageRoutingModule {}
