import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerrprestadasPage } from './herrprestadas.page';

const routes: Routes = [
  {
    path: '',
    component: HerrprestadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerrprestadasPageRoutingModule {}
