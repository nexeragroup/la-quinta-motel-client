import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiningPage } from './pages/dining-page/dining-page';

const routes: Routes = [
  {
    path: '',
    component: DiningPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiningRoutingModule {}
