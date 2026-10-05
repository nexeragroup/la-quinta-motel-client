# La Quinta Motel Web deployment

Only the Web client is deployed by these files. Control, Server/API, and Gateway remain separate services and use the ports reserved for them.

| Environment | Public domain | Host port | Deployment folder |
| --- | --- | --- | --- |
| Staging | `staging.laquintamotel.rw` | `10311` | `/home/yves/la-quinta-motel/staging/web` |
| Production | `laquintamotel.rw` | `10301` | `/home/yves/la-quinta-motel/prod/web` |

The SSR container listens on port `4200`, bound only to `127.0.0.1`. Nginx owns public HTTP/HTTPS and proxies to the matching host port. `www.laquintamotel.rw` redirects permanently to `laquintamotel.rw`.

Staging and local builds ship a `noindex` robots file. Production ships the public sitemap and is the only indexable environment. The browser uses `https://staging-api.laquintamotel.rw/api/v1` in staging and `https://api.laquintamotel.rw/api/v1` in production, so the API must permit the matching web origin through CORS.

On each server, install the matching Nginx file in `/etc/nginx/sites-available/`, enable it from `sites-enabled/`, provision the listed Let's Encrypt certificate, then run `nginx -t` and reload Nginx. The production certificate must include both `laquintamotel.rw` and `www.laquintamotel.rw`.

The GitHub environments `staging` and `production` need these environment-scoped secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PORT`, `DEPLOY_SSH_KEY`, and `DEPLOY_KNOWN_HOSTS`. `DEPLOY_KNOWN_HOSTS` must contain the server's verified SSH host key.

Deployment creates the requested `web`, `logs`, and `data` folders under the environment root. The `server` and `gateway` folders are reserved for their separate deployments. Local development remains `pnpm start:dev` on `localhost:4200`.
