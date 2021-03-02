import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditottelePage } from './editottele.page';

const routes: Routes = [
  {
    path: '',
    component: EditottelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditottelePageRoutingModule {}
