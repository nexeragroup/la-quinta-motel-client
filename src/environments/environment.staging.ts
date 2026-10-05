import type { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  name: 'staging',

  production: false,

  siteUrl: 'https://staging.laquintamotel.rw',

  indexable: false,

  apiBaseUrl: 'https://staging-api.laquintamotel.rw/api/v1',
} as const satisfies AppEnvironment;
