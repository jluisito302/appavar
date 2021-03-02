import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RordenesvPage } from './rordenesv.page';

const routes: Routes = [
  {
    path: '',
    component: RordenesvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RordenesvPageRoutingModule {}
