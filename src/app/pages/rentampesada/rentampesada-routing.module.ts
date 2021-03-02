import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentampesadaPage } from './rentampesada.page';

const routes: Routes = [
  {
    path: '',
    component: RentampesadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentampesadaPageRoutingModule {}
