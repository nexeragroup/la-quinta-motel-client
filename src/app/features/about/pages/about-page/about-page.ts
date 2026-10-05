import { ChangeDetectionStrategy, Component } from '@angular/core';

interface AboutValue {
  readonly icon: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface Experience {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-about-page',
  standalone: false,
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  protected readonly phoneNumber = '+250 788 498 634';
  protected readonly phoneHref = 'tel:+250788498634';

  protected readonly directionsHref =
    'https://www.google.com/maps/search/?api=1&query=La+Quinta+Motel+Nyamata+Rwanda';

  protected readonly values: readonly AboutValue[] = [
    {
      icon: 'fa-bed',
      number: '01',
      title: 'Comfort',
      description:
        'Thoughtfully prepared spaces that make it easy to settle in, rest, and feel at ease.',
    },
    {
      icon: 'fa-utensils',
      number: '02',
      title: 'Good food',
      description:
        'Fresh, satisfying food made for proper meals, shared tables, and slower moments.',
    },
    {
      icon: 'fa-heart',
      number: '03',
      title: 'Warm hospitality',
      description:
        'A welcoming atmosphere and attentive service for guests, visitors, friends, and families.',
    },
    {
      icon: 'fa-people-group',
      number: '04',
      title: 'Togetherness',
      description:
        'A place where overnight stays, meals, conversations, and occasions can naturally come together.',
    },
  ];

  protected readonly experiences: readonly Experience[] = [
    {
      icon: 'fa-bed',
      title: 'Stay',
      description: 'Comfortable rooms for restful nights in Nyamata.',
    },
    {
      icon: 'fa-utensils',
      title: 'Dine',
      description: 'Fresh food, drinks, and time around the table.',
    },
    {
      icon: 'fa-people-group',
      title: 'Gather',
      description: 'A relaxed setting for friends, family, and shared occasions.',
    },
  ];

  protected trackValue(_: number, value: AboutValue): string {
    return value.title;
  }

  protected trackExperience(_: number, experience: Experience): string {
    return experience.title;
  }
}
