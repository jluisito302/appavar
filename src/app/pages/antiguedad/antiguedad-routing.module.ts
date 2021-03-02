import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntiguedadPage } from './antiguedad.page';

const routes: Routes = [
  {
    path: '',
    component: AntiguedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntiguedadPageRoutingModule {}
