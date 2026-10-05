import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../../environments/environment';

const siteUrl = environment.siteUrl;
const siteName = 'La Quinta Motel';

const defaultDescription =
  'Stay, dine, and gather at La Quinta Motel in Nyamata, Bugesera, Rwanda. Comfortable rooms, welcoming meals, Wi-Fi, secure parking, and warm hospitality.';

interface PageSeo {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
}

const pageSeo: Readonly<Record<string, PageSeo>> = {
  '/': {
    title: 'La Quinta Motel | Stay, Dine & Gather in Nyamata',
    description: defaultDescription,
  },

  '/about': {
    title: 'About La Quinta Motel | Warm Hospitality in Nyamata',
    description:
      'Learn about La Quinta Motel in Nyamata, Bugesera—a welcoming place for comfortable stays, relaxed dining, and time together.',
  },

  '/services': {
    title: 'Motel Services in Nyamata | La Quinta Motel',
    description:
      'Explore La Quinta Motel services in Nyamata, including comfortable accommodation, dining, Wi-Fi, secure parking, and warm service.',
  },

  '/rooms': {
    title: 'Rooms in Nyamata | La Quinta Motel',
    description:
      'Find a comfortable room for your stay in Nyamata at La Quinta Motel, with Wi-Fi, secure parking, dining, and attentive service.',
  },

  '/rooms/comfortable-room': {
    title: 'Comfortable Room in Nyamata | La Quinta Motel',
    description:
      'Enjoy a calm, comfortable room at La Quinta Motel in Nyamata—an easy place to rest, stay connected, and dine nearby.',
  },

  '/dining': {
    title: 'Dining in Nyamata | La Quinta Motel',
    description:
      'Enjoy freshly prepared meals and a relaxed dining experience at La Quinta Motel in Nyamata, Bugesera.',
  },

  '/contact': {
    title: 'Contact La Quinta Motel | Nyamata, Rwanda',
    description:
      'Contact La Quinta Motel in Nyamata to ask about rooms, dining, group occasions, or directions. Call +250 788 498 634.',
  },
};

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly rendererFactory = inject(RendererFactory2);

  private readonly renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  private initialized = false;

  initialize(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.update(event.urlAfterRedirects);
      });

    this.update(this.router.url);
  }

  private update(url: string): void {
    const path = url.split(/[?#]/, 1)[0] || '/';

    const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');

    const canonicalUrl = `${siteUrl}${normalizedPath}`;

    const page = pageSeo[normalizedPath] ?? {
      title: siteName,
      description: defaultDescription,
    };

    const image = `${siteUrl}${page.image ?? '/rooms/room.jpg'}`;

    this.updateTitle(page.title);

    this.updateMetaTags(page, canonicalUrl, image);

    this.updateCanonical(canonicalUrl);

    if (normalizedPath === '/') {
      this.addStructuredData();
    } else {
      this.removeStructuredData();
    }
  }

  private updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  private updateMetaTags(page: PageSeo, canonicalUrl: string, image: string): void {
    this.meta.updateTag({
      name: 'description',
      content: page.description,
    });

    this.meta.updateTag({
      name: 'robots',
      content: environment.indexable ? 'index, follow' : 'noindex, nofollow',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: siteName,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: page.title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: page.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: canonicalUrl,
    });

    this.meta.updateTag({
      property: 'og:image',
      content: image,
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'La Quinta Motel in Nyamata, Bugesera, Rwanda',
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: page.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: page.description,
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: image,
    });
  }

  private updateCanonical(canonicalUrl: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.renderer.createElement('link');

      this.renderer.setAttribute(canonical, 'rel', 'canonical');

      this.renderer.appendChild(this.document.head, canonical);
    }

    this.renderer.setAttribute(canonical, 'href', canonicalUrl);
  }

  private addStructuredData(): void {
    const existingSchema = this.document.getElementById('local-business-schema');

    if (existingSchema) {
      return;
    }

    const schema = this.renderer.createElement('script');

    this.renderer.setAttribute(schema, 'id', 'local-business-schema');

    this.renderer.setAttribute(schema, 'type', 'application/ld+json');

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Hotel',

      name: siteName,

      url: siteUrl,

      image: `${siteUrl}/rooms/room.jpg`,

      telephone: '+250788498634',

      email: 'laquintamotel@gmail.com',

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nyamata',
        addressRegion: 'Bugesera District',
        addressCountry: 'RW',
      },
    };

    const content = this.renderer.createText(JSON.stringify(structuredData));

    this.renderer.appendChild(schema, content);

    this.renderer.appendChild(this.document.head, schema);
  }

  private removeStructuredData(): void {
    const schema = this.document.getElementById('local-business-schema');

    if (!schema) {
      return;
    }

    this.renderer.removeChild(this.document.head, schema);
  }
}
