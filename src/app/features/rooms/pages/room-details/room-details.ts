import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface RoomAmenity {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

interface GalleryImage {
  readonly src: string;
  readonly alt: string;
  readonly featured?: boolean;
}

interface RoomDetails {
  readonly slug: string;
  readonly name: string;
  readonly eyebrow: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly heroImage: string;
  readonly amenities: readonly RoomAmenity[];
  readonly gallery: readonly GalleryImage[];
}

@Component({
  selector: 'app-room-details',
  standalone: false,
  templateUrl: './room-details.html',
  styleUrl: './room-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomDetailsPage implements OnInit {
  protected readonly phoneNumber = '+250 788 498 634';
  protected readonly phoneHref = 'tel:+250788498634';

  protected readonly rooms: readonly RoomDetails[] = [
    {
      slug: 'comfortable-room',

      name: 'Comfortable Room',

      eyebrow: 'La Quinta accommodation',

      shortDescription:
        'A welcoming place to settle in, slow down, and enjoy a restful stay in Nyamata.',

      description:
        'Whether you are visiting Nyamata for work, family, a weekend away, or simply need somewhere comfortable to stay, La Quinta gives you a calm place to make your base.',

      heroImage: '/rooms/room.jpg',

      amenities: [
        {
          icon: 'fa-wifi',
          title: 'Wi-Fi access',
          description: 'Stay connected throughout your time at La Quinta.',
        },
        {
          icon: 'fa-square-parking',
          title: 'Secure parking',
          description: 'Convenient parking for guests and visitors.',
        },
        {
          icon: 'fa-bell-concierge',
          title: 'Warm service',
          description: 'A welcoming team ready to assist during your visit.',
        },
        {
          icon: 'fa-utensils',
          title: 'Dining close at hand',
          description: 'Enjoy the La Quinta dining experience during your stay.',
        },
      ],

      gallery: [
        {
          src: '/rooms/room.jpg',
          alt: 'Comfortable accommodation at La Quinta Motel',
          featured: true,
        },
      ],
    },
  ];

  protected room!: RoomDetails;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    const room = this.rooms.find((item) => item.slug === slug);

    if (!room) {
      void this.router.navigate(['/rooms']);
      return;
    }

    this.room = room;
  }

  protected trackAmenity(_: number, amenity: RoomAmenity): string {
    return amenity.title;
  }

  protected trackGalleryImage(_: number, image: GalleryImage): string {
    return image.src;
  }
}
