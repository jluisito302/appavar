import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckretroinfoPage } from './checkretroinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CheckretroinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckretroinfoPageRoutingModule {}
