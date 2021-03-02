import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermttosPage } from './vermttos.page';

const routes: Routes = [
  {
    path: '',
    component: VermttosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VermttosPageRoutingModule {}
