import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'services', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'rooms', renderMode: RenderMode.Prerender },
  {
    path: 'rooms/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ slug: 'comfortable-room' }],
  },
  { path: 'dining', renderMode: RenderMode.Prerender },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
