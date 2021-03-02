import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobrosfechafechaPage } from './cobrosfechafecha.page';

const routes: Routes = [
  {
    path: '',
    component: CobrosfechafechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobrosfechafechaPageRoutingModule {}
