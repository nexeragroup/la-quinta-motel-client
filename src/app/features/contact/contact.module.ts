import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './pages/contact-page/contact-page';

@NgModule({
  declarations: [ContactPage],
  imports: [ContactRoutingModule],
})
export class ContactModule {}
