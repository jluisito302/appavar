import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerotretroPage } from './verotretro.page';

const routes: Routes = [
  {
    path: '',
    component: VerotretroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerotretroPageRoutingModule {}
