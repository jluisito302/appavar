import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerhprestadaPage } from './verhprestada.page';

const routes: Routes = [
  {
    path: '',
    component: VerhprestadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerhprestadaPageRoutingModule {}
