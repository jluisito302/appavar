import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerotplantaPage } from './verotplanta.page';

const routes: Routes = [
  {
    path: '',
    component: VerotplantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerotplantaPageRoutingModule {}
