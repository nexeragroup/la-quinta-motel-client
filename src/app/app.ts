import { Component, inject, isDevMode } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly theme = inject(ThemeService);
  protected readonly showThemePreview = isDevMode();

  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.initialize();
  }
}
