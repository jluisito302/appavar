import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InversionobrasPage } from './inversionobras.page';

const routes: Routes = [
  {
    path: '',
    component: InversionobrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InversionobrasPageRoutingModule {}
