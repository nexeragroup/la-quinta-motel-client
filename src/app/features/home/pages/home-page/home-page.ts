import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

interface Highlight {
  readonly icon: string;
  readonly title: string;
  readonly detail: string;
}

interface Amenity {
  readonly icon: string;
  readonly title: string;
  readonly detail: string;
}

interface Room {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly priceLabel?: string;
  readonly guests: string;
  readonly bed: string;
}

interface GuestReview {
  readonly guestName: string;
  readonly guestType: string;
  readonly comment: string;
  readonly rating: number;
}

interface GalleryImage {
  readonly src: string;
  readonly alt: string;
  readonly featured?: boolean;
  readonly position?: string;
}

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly phoneNumber = '+250 788 498 634';
  protected readonly phoneHref = 'tel:+250788498634';

  protected readonly directionsHref =
    'https://www.google.com/maps/search/?api=1&query=La+Quinta+Motel+Nyamata+Rwanda';

  protected readonly highlights: readonly Highlight[] = [
    {
      icon: 'fa-bed',
      title: 'Stay',
      detail: 'Comfortable rooms for restful nights.',
    },
    {
      icon: 'fa-utensils',
      title: 'Dine',
      detail: 'Fresh food and relaxed moments.',
    },
    {
      icon: 'fa-location-dot',
      title: 'Visit',
      detail: 'Nyamata, Bugesera District.',
    },
  ];

  protected readonly featuredRooms: readonly Room[] = [
    {
      slug: 'comfortable-room',
      name: 'Comfortable Room',
      description: 'A welcoming space prepared for a peaceful night and an easy stay in Nyamata.',
      imageUrl: '/rooms/room.jpg',
      guests: 'Up to 2 guests',
      bed: 'Comfortable bed',
    },
  ];

  protected readonly amenities: readonly Amenity[] = [
    {
      icon: 'fa-wifi',
      title: 'Wi-Fi access',
      detail: 'Stay connected throughout your visit.',
    },
    {
      icon: 'fa-square-parking',
      title: 'Secure parking',
      detail: 'Convenient parking for guests and visitors.',
    },
    {
      icon: 'fa-bell-concierge',
      title: 'Warm service',
      detail: 'A helpful team ready to welcome and assist you.',
    },
    {
      icon: 'fa-bed',
      title: 'Comfortable stays',
      detail: 'Thoughtfully prepared rooms for restful nights.',
    },
  ];

  /**
   * Replace these with verified guest reviews before publishing.
   * Keeping the array empty automatically hides the reviews section.
   */
  protected readonly guestReviews: readonly GuestReview[] = [];

  protected readonly ratingStars: readonly number[] = [1, 2, 3, 4, 5];

  protected readonly gallery: readonly GalleryImage[] = [
    {
      src: '/rooms/room.jpg',
      alt: 'A comfortable room prepared for guests at La Quinta Motel',
      featured: true,
      position: 'center',
    },
    {
      src: '/meals/food.jpg',
      alt: 'Freshly prepared food at La Quinta Motel',
      position: 'center',
    },
    {
      src: '/meals/meat.jpg',
      alt: 'A grilled meal prepared at La Quinta Motel',
      position: 'center',
    },
    {
      src: '/space/weekend.jpg',
      alt: 'Guests enjoying an evening at La Quinta Motel',
      featured: true,
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
      position: 'center',
    },
  ];

  constructor(private readonly router: Router) {}

  protected roomDetailsUrl(slug: string): void {
    void this.router.navigate(['/rooms', slug]);
  }

  protected trackRoom(_: number, room: Room): string {
    return room.slug;
  }

  protected trackAmenity(_: number, amenity: Amenity): string {
    return amenity.title;
  }

  protected trackReview(_: number, review: GuestReview): string {
    return `${review.guestName}-${review.comment}`;
  }

  protected trackGallery(_: number, image: GalleryImage): string {
    return image.src;
  }
}
