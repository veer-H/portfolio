# Virbhadra Haibatpure — Portfolio

Personal software engineering portfolio: secure Java and Node.js backends,
HL7 FHIR / Epic integrations, and full-stack healthcare software.

## Technologies used

- Next.js (static export)
- React
- TypeScript
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run test:static
```

The site is exported to `dist/` with the base path `/portfolio` and deployed
to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Live site

[veer-h.github.io/portfolio](https://veer-h.github.io/portfolio/)
