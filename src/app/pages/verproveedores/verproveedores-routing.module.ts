import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerproveedoresPage } from './verproveedores.page';

const routes: Routes = [
  {
    path: '',
    component: VerproveedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerproveedoresPageRoutingModule {}
