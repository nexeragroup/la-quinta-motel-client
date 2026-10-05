import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: false,
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  protected readonly phoneHref = 'tel:+250788498634';
  protected readonly emailHref = 'mailto:laquintamotel@gmail.com';
  protected readonly directionsHref =
    'https://www.google.com/maps/search/?api=1&query=La+Quinta+Motel+Nyamata+Rwanda';
}
