import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecotretroPage } from './recotretro.page';

const routes: Routes = [
  {
    path: '',
    component: RecotretroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecotretroPageRoutingModule {}
