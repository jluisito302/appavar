import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviliarioPage } from './moviliario.page';

const routes: Routes = [
  {
    path: '',
    component: MoviliarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviliarioPageRoutingModule {}
