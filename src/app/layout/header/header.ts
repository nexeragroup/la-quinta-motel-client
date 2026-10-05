import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { ThemeService } from '../../core/services/theme.service';

interface NavigationItem {
  readonly label: string;
  readonly route: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly theme = inject(ThemeService);

  protected readonly bookingPhoneHref = 'tel:+250788498634';

  protected readonly menuOpen = signal(false);

  protected readonly navigationItems: readonly NavigationItem[] = [
    {
      label: 'Home',
      route: '/',
      exact: true,
    },
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Services',
      route: '/services',
    },
    {
      label: 'Rooms',
      route: '/rooms',
    },
    {
      label: 'Dining',
      route: '/dining',
    },
    {
      label: 'Contact',
      route: '/contact',
    },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
