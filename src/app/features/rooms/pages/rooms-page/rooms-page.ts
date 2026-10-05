import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

interface Room {
  readonly slug: string;
  readonly name: string;
  readonly eyebrow: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly guests?: string;
  readonly bed?: string;
  readonly priceLabel?: string;
}

interface StayComfort {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

interface BookingStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-rooms-page',
  standalone: false,
  templateUrl: './rooms-page.html',
  styleUrl: './rooms-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsPage {
  protected readonly phoneNumber = '+250 788 498 634';
  protected readonly phoneHref = 'tel:+250788498634';

  protected readonly rooms: readonly Room[] = [
    {
      slug: 'comfortable-room',
      eyebrow: 'La Quinta accommodation',
      name: 'Comfortable Room',
      description:
        'A welcoming room prepared to give you a comfortable place to settle in, slow down, and rest during your time in Nyamata.',
      imageUrl: '/rooms/room.jpg',
    },
  ];

  protected readonly comforts: readonly StayComfort[] = [
    {
      icon: 'fa-bed',
      title: 'Comfortable rooms',
      description: 'Thoughtfully prepared spaces for a restful night and an easier stay.',
    },
    {
      icon: 'fa-wifi',
      title: 'Wi-Fi access',
      description: 'Stay connected during your visit, whether you are here for work or time away.',
    },
    {
      icon: 'fa-square-parking',
      title: 'Secure parking',
      description: 'Convenient parking available for guests and visitors.',
    },
    {
      icon: 'fa-bell-concierge',
      title: 'Warm service',
      description: 'A welcoming team ready to help make your visit more comfortable.',
    },
  ];

  protected readonly bookingSteps: readonly BookingStep[] = [
    {
      number: '01',
      title: 'Choose your stay',
      description: 'Explore the accommodation and decide what works best for your visit.',
    },
    {
      number: '02',
      title: 'Send your request',
      description: 'Share your preferred dates and the details of your stay with our team.',
    },
    {
      number: '03',
      title: 'Confirm with us',
      description: 'Our team can help confirm availability and the details of your visit.',
    },
  ];

  constructor(private readonly router: Router) {}

  protected openRoom(room: Room): void {
    void this.router.navigate(['/rooms', room.slug]);
  }

  protected trackRoom(_: number, room: Room): string {
    return room.slug;
  }

  protected trackComfort(_: number, comfort: StayComfort): string {
    return comfort.title;
  }

  protected trackBookingStep(_: number, step: BookingStep): string {
    return step.number;
  }
}
