import { ChangeDetectionStrategy, Component } from '@angular/core';

interface DiningHighlight {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

interface DiningMoment {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface DiningImage {
  readonly src: string;
  readonly alt: string;
  readonly featured?: boolean;
  readonly position?: string;
}

@Component({
  selector: 'app-dining-page',
  standalone: false,
  templateUrl: './dining-page.html',
  styleUrl: './dining-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiningPage {
  protected readonly phoneNumber = '+250 788 498 634';
  protected readonly phoneHref = 'tel:+250788498634';

  protected readonly directionsHref =
    'https://www.google.com/maps/search/?api=1&query=La+Quinta+Motel+Nyamata+Rwanda';

  protected readonly highlights: readonly DiningHighlight[] = [
    {
      icon: 'fa-utensils',
      title: 'Freshly prepared',
      description: 'Food prepared for satisfying meals and easy moments around the table.',
    },
    {
      icon: 'fa-people-group',
      title: 'Made for sharing',
      description: 'A welcoming setting for friends, families, colleagues, and groups.',
    },
    {
      icon: 'fa-martini-glass-citrus',
      title: 'Stay a little longer',
      description: 'Enjoy food, drinks, conversation, and a relaxed Nyamata atmosphere.',
    },
  ];

  protected readonly moments: readonly DiningMoment[] = [
    {
      number: '01',
      title: 'Come for a meal',
      description: 'Settle in for freshly prepared food and take your time around the table.',
    },
    {
      number: '02',
      title: 'Meet your people',
      description:
        'Catch up with friends, spend time with family, or meet colleagues in a relaxed setting.',
    },
    {
      number: '03',
      title: 'Make an evening of it',
      description: 'Let dinner become drinks, conversation, and a little more time together.',
    },
  ];

  protected readonly gallery: readonly DiningImage[] = [
    {
      src: '/meals/food.jpg',
      alt: 'Freshly prepared food at La Quinta Motel',
      featured: true,
      position: 'center',
    },
    {
      src: '/meals/meat.jpg',
      alt: 'A grilled meal prepared at La Quinta Motel',
      position: 'center',
    },
    {
      src: '/meals/nyama.png',
      alt: 'A freshly prepared meal at La Quinta Motel',
      position: 'center',
    },
    {
      src: '/meals/sharing.jpg',
      alt: 'Friends sharing food and drinks at La Quinta Motel',
      featured: true,
      position: 'center',
    },
    {
      src: '/meals/brochette.jpg',
      alt: 'Brochettes served at La Quinta Motel',
      position: 'center',
    },
    {
      src: '/space/weekend.jpg',
      alt: 'Guests enjoying an evening at La Quinta Motel',
      position: 'center',
    },
  ];

  protected trackHighlight(_: number, highlight: DiningHighlight): string {
    return highlight.title;
  }

  protected trackMoment(_: number, moment: DiningMoment): string {
    return moment.number;
  }

  protected trackGalleryImage(_: number, image: DiningImage): string {
    return image.src;
  }
}
