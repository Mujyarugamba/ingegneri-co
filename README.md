# Ingegneri & Co

Sito istituzionale di **Ingegneri & Co**, rete tecnica multidisciplinare per edilizia, energia, impianti, automazione, digitalizzazione e intelligenza artificiale applicata alle PMI.

**Sito ufficiale:** https://ingegnerieco.it

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Static export
- Vercel
- Sharp per l'ottimizzazione automatica delle immagini

## Sviluppo

```bash
npm ci
npm run dev
```

## Verifiche

```bash
npm run lint
npm run build
npm run check:seo
```

Il controllo SEO viene eseguito anche in CI e verifica, tra gli altri elementi:

- metadata, canonical e H1;
- Open Graph e Twitter metadata;
- JSON-LD valido;
- link interni;
- sitemap e robots.txt;
- assenza di `noindex` accidentali;
- accessibilità di base delle immagini e dei link esterni;
- budget degli asset ottimizzati;
- presenza di `llms.txt` e feed RSS.

## Indicizzazione e discovery

Il sito pubblica:

- `/sitemap.xml`
- `/robots.txt`
- `/feed.xml`
- `/llms.txt`

Gli URL della sitemap vengono inoltre notificati a IndexNow dopo i push su `main`, senza rendere bloccante il deploy in caso di indisponibilità del servizio esterno.

## Deploy

Il branch `main` è collegato al deployment di produzione. Il workflow GitHub Actions esegue installazione pulita, lint, build, smoke test SEO e audit delle dipendenze di produzione.
