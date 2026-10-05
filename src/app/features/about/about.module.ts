import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './pages/about-page/about-page';

@NgModule({
  declarations: [AboutPage],
  imports: [AboutRoutingModule],
})
export class AboutModule {}
