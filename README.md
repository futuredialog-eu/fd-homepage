# fd-homepage

Marketing site at https://www.futuredialog.eu. It is a static Astro site in
en, et, and fi, with a blog in `src/content/blog/`.

It also serves `/eula/` and `/application-privacy-policy/` (from
`src/legal/`). The mobile apps and the back office link to those two URLs,
so keep them stable.

The privacy policy's "Usage statistics in the mobile apps" and "Usage
statistics in the back office" sections describe the opt-in analytics in
fd-android, fd-ios and fd-backoffice. When an event there starts
collecting a new kind of data, update these sections too. The "Usage
analytics" section of each repo's README has the event list.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build
```

Pushes to `main` deploy to GitHub Pages (`.github/workflows/deploy.yaml`).
Google Analytics is enabled only when the `PUBLIC_GA_MEASUREMENT_ID` repo
variable is set (see `.env.example`).

Conventions for styling and scripts are in `AGENTS.md`.
