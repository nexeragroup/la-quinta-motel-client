import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesPage } from './pages/services-page/services-page';

@NgModule({
  declarations: [ServicesPage],
  imports: [ServicesRoutingModule],
})
export class ServicesModule {}
