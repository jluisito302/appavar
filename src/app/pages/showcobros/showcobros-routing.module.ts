import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcobrosPage } from './showcobros.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcobrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcobrosPageRoutingModule {}
