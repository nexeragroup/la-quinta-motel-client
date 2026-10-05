import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly phoneHref = 'tel:+250788498634';

  protected readonly emailHref = 'mailto:laquintamotel@gmail.com';

  protected readonly directionsHref =
    'https://www.google.com/maps/search/?api=1&query=La+Quinta+Motel+Nyamata+Rwanda';
}
