import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DiningPage } from './pages/dining-page/dining-page';
import { DiningRoutingModule } from './dining-routing-module';

@NgModule({
  declarations: [DiningPage],
  imports: [CommonModule, DiningRoutingModule],
})
export class DiningModule {}
