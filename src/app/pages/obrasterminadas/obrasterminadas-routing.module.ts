import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObrasterminadasPage } from './obrasterminadas.page';

const routes: Routes = [
  {
    path: '',
    component: ObrasterminadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObrasterminadasPageRoutingModule {}
