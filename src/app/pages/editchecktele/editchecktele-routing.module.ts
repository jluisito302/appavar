import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditchecktelePage } from './editchecktele.page';

const routes: Routes = [
  {
    path: '',
    component: EditchecktelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditchecktelePageRoutingModule {}
