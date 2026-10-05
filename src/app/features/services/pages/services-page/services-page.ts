import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ServiceCategory {
  readonly number: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

interface Comfort {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

interface GatheringType {
  readonly icon: string;
  readonly label: string;
}

@Component({
  selector: 'app-services-page',
  standalone: false,
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPage {
  protected readonly phoneNumber = '+250 788 498 634';
  protected readonly phoneHref = 'tel:+250788498634';

  protected readonly directionsHref =
    'https://www.google.com/maps/search/?api=1&query=La+Quinta+Motel+Nyamata+Rwanda';

  protected readonly serviceCategories: readonly ServiceCategory[] = [
    {
      number: '01',
      icon: 'fa-bed',
      title: 'Stay',
      description:
        'A comfortable base for work trips, family visits, weekends away, and restful nights in Nyamata.',
    },
    {
      number: '02',
      icon: 'fa-utensils',
      title: 'Dine',
      description:
        'Freshly prepared food, drinks, and an easy atmosphere for meals worth taking your time over.',
    },
    {
      number: '03',
      icon: 'fa-people-group',
      title: 'Gather',
      description:
        'A welcoming setting for birthdays, family time, work meetups, and relaxed moments together.',
    },
  ];

  protected readonly comforts: readonly Comfort[] = [
    {
      icon: 'fa-wifi',
      title: 'Wi-Fi access',
      description: 'Stay connected throughout your visit.',
    },
    {
      icon: 'fa-square-parking',
      title: 'Secure parking',
      description: 'Convenient parking for guests and visitors.',
    },
    {
      icon: 'fa-bell-concierge',
      title: 'Warm service',
      description: 'A helpful team ready to assist during your visit.',
    },
    {
      icon: 'fa-location-dot',
      title: 'Nyamata location',
      description: 'A convenient place to stay, dine, and meet in Bugesera.',
    },
  ];

  protected readonly gatheringTypes: readonly GatheringType[] = [
    {
      icon: 'fa-cake-candles',
      label: 'Birthday dinners',
    },
    {
      icon: 'fa-people-group',
      label: 'Friends & family',
    },
    {
      icon: 'fa-briefcase',
      label: 'Work meetups',
    },
    {
      icon: 'fa-champagne-glasses',
      label: 'Social gatherings',
    },
  ];

  protected trackService(_: number, service: ServiceCategory): string {
    return service.title;
  }

  protected trackComfort(_: number, comfort: Comfort): string {
    return comfort.title;
  }

  protected trackGathering(_: number, gathering: GatheringType): string {
    return gathering.label;
  }
}
