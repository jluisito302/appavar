import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotobraPage } from './rotobra.page';

const routes: Routes = [
  {
    path: '',
    component: RotobraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotobraPageRoutingModule {}
