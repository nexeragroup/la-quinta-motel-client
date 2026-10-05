import type { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  name: 'prod',

  production: true,

  siteUrl: 'https://laquintamotel.rw',

  indexable: true,

  apiBaseUrl: 'https://api.laquintamotel.rw/api/v1',
} as const satisfies AppEnvironment;
