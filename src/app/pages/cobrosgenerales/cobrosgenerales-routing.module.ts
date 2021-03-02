import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobrosgeneralesPage } from './cobrosgenerales.page';

const routes: Routes = [
  {
    path: '',
    component: CobrosgeneralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobrosgeneralesPageRoutingModule {}
