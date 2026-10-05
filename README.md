# La Quinta Motel Web

Public Angular web application for La Quinta Motel in Nyamata, Rwanda. It provides the hotel’s home, about, services, rooms, dining, and contact pages, with server-side rendering (SSR) and production SEO metadata.

## Stack

- Angular 22 with SSR
- Express SSR runtime
- pnpm
- Docker and Docker Compose for staging and production
- Nginx as the public HTTPS reverse proxy

## Public routes

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/about` | About La Quinta Motel |
| `/services` | Rooms and services |
| `/rooms` | Rooms overview |
| `/rooms/comfortable-room` | Room details |
| `/dining` | Dining |
| `/contact` | Contact details |

## Local development

Use Node.js `22.22.3` or later, then install dependencies with pnpm.

```bash
pnpm install --frozen-lockfile
pnpm start:dev
```

The web app runs at `http://localhost:4200`. The local API proxy forwards `/api` requests to `http://localhost:3300`; configure it in `.env.dev` when needed.

| Command | Purpose |
| --- | --- |
| `pnpm start:dev` | Run the development server |
| `pnpm build:dev` | Build the development SSR bundle |
| `pnpm build:staging` | Build the staging SSR bundle |
| `pnpm build:prod` | Build the production SSR bundle |
| `pnpm test:proxy` | Test API-proxy route matching and validation |
| `pnpm test:proxy:integration` | Run proxy integration tests |

The development server is bound to `0.0.0.0` and the current script allows all hosts. Use it only on a trusted local network.

## Environments

| Environment | Web URL | API URL | Indexing |
| --- | --- | --- |
| Development | `http://localhost:4200` | `http://localhost:3300/api/v1` via proxy | Blocked |
| Staging | `https://staging.laquintamotel.rw` | `https://staging-api.laquintamotel.rw/api/v1` | Blocked |
| Production | `https://laquintamotel.rw` | `https://api.laquintamotel.rw/api/v1` | Allowed |

The production `www.laquintamotel.rw` host redirects permanently to `laquintamotel.rw`.

## SEO

Production includes:

- Canonical URLs and per-page titles/descriptions
- Open Graph and Twitter metadata
- Hotel structured data
- [`public/robots.txt`](public/robots.txt) and [`public/sitemap.xml`](public/sitemap.xml)

Development and staging replace the public robots file with `Disallow: /` so preview environments are not indexed.

## Deployment

Staging and production use an SSR Docker image on container port `4200`, exposed only on localhost. Nginx handles TLS and proxies requests to the container.

| Environment | Host port | Container | Server folder |
| --- | --- | --- | --- |
| Staging | `10311` | `la-quinta-motel-web-staging` | `/home/yves/la-quinta-motel/staging/web` |
| Production | `10301` | `la-quinta-motel-web-prod` | `/home/yves/la-quinta-motel/prod/web` |

Deployment files are in [`deploy/`](deploy/), including Docker Compose, Nginx virtual hosts, and the server setup guide. GitHub Actions deploy the `staging` and `production` branches.

Each GitHub environment needs `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PORT`, `DEPLOY_SSH_KEY`, and `DEPLOY_KNOWN_HOSTS` secrets.

## Current review notes

- The production build has not been run on this workstation because its Node.js version is `22.19.0`, below Angular CLI’s required `22.22.3` minimum. Run `pnpm build:prod` in CI or on the deployment host before release.
- The SSR configuration prerenders every route, but `/rooms/:slug` is parameterized. The known room URL must be confirmed in the production build output; additional room slugs will need explicit prerender parameters or an SSR fallback.
- There is no explicit wildcard/404 route. Add one before launch so invalid URLs return a clear not-found page and an appropriate HTTP status.
- Staging and production call the API subdomains directly. The API must allow the exact web origins through CORS and support credentialed requests if authentication cookies are used.
- The app contains control/API-oriented services alongside this public website. Keep unused dependencies and features out of the production bundle as the public site evolves.
