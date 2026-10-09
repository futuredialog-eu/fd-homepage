## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Styling

Plain CSS only, no Tailwind and no preprocessor.

- Global CSS lives in `src/styles/` and is imported in `Layout.astro`, in cascade
  order. It is never linked from `public/`, so Astro bundles, minifies and
  fingerprints it. `vendor/` holds the unmodified third-party sheets.
- `blog.css` is the exception: it is imported by the two blog listing pages that
  share it rather than by the layout, so it stays off every other page.
- Anything specific to one component belongs in a scoped `<style>` in the
  component that renders the markup. Reach into markup rendered by a child
  component, or by `<Content />`, with `:global()`.
- `:global()` also suppresses the scope attribute on that compound, which lowers
  its specificity. When a rule has to beat a sibling, add an ancestor you do own
  — see the `.nav-open` drawer rule in `Header.astro`.
- A rule stays global when its markup spans components or pages. A class that a
  `<script>` toggles at runtime does not need to be global — the element still
  carries the scope attribute — but a class set on an element another component
  rendered does, which is why the drawer rule in `Header.astro` reaches `<body>`
  through `:global(.nav-open)`.
- Assets referenced from CSS live in `src/assets/`. So do content images, which
  go through `astro:assets` — see Images below. Everything else that markup
  references through `withBase()` stays in `public/`.
- Colours are custom properties in `src/styles/tokens.css`, including the brand
  alpha variants — no `rgb(from ...)`, so no dependency on relative colour
  syntax.
- Media queries use range syntax against one scale: 768, 992, 1024, 1280 and
  1440px. Breakpoints cannot be custom properties in plain CSS, so the numbers
  are spelled out; keep to that scale rather than adding off-by-one neighbours.
- Astro inlines small page stylesheets into the HTML rather than emitting a
  chunk, so a missing `<link>` is not proof that a page lost its CSS.

## Interactivity

No framework and no bundled theme JavaScript. What the theme's jQuery bundle
carried is now plain TypeScript in an Astro `<script>` in the component that
owns the markup, which Astro bundles and ships only on the pages that render
that component:

- `Header.astro` — the collapse on scroll, and the mobile drawer. The drawer
  slides in by shifting the whole page, so the class that opens it goes on
  `<body>` rather than on anything in the header.
- `sections/ReviewsSection.astro` — the review dots, replacing slick. The first
  review is marked current server-side, so there is nothing to initialise.

The footer's legal links (`PolicyLinks.astro`) are plain anchors to the
`/application-privacy-policy/` and `/eula/` pages, which render the copy in
`src/legal/*.html` through `LegalDocument.astro`. Those two URLs are also what
the mobile app and back office link to, so the routes must keep their paths.

`Analytics.astro` is the one third-party script: Google Analytics, rendered in
`<head>` by `Layout.astro` and only when the build sees a
`PUBLIC_GA_MEASUREMENT_ID` (an Actions repository variable in the deploy
workflow; an unset value ships nothing). `.env.example` documents it. It is
consent-gated — the component server-renders only the cookie bar and an inline
script; `gtag.js` is injected client-side after Accept, and the choice is kept
in `localStorage` under `fd:analytics-consent`. The footer's "Cookie settings"
control (`PolicyLinks.astro`, `[data-consent-settings]`) reopens the bar.

Two rules for these scripts. Render the initial state server-side and let the
script only handle changes, so nothing moves on load — a script that paints the
first state itself leaves the page laid out wrong until it runs, and the
correction reads as a flash of the wrong content. And a script is per page, not
per instance: it is hoisted out of the component, so it runs once however many
times the component renders, and reaching for `querySelector` is only safe while
a page has one of them.

## Images

Blog and features images live in `src/assets/` and render with `<Image>` from
`astro:assets`, which emits WebP at several widths with `width`/`height` set
and lazy loading. A wrong path fails the build rather than shipping a broken
image.

- Blog post `image` and `thumbnail` are validated by `image()` in
  `content.config.ts` and are relative to the Markdown file:
  `../../../assets/blog/<file>`.
- The home page teasers (`blogSection.posts` in `src/i18n/*.ts`) import their
  image at the top of each locale file; `image` is `ImageMetadata`, not a path.
- The features page imports its five images directly, so they are not in the
  i18n files.
- Give every `<Image>` `widths` and a `sizes` that matches its column. The post
  hero is the LCP element, so it is `loading="eager"` with
  `fetchpriority="high"`; everything else stays lazy.

Logos, favicons, flags, customer and team photos, and the default social image
are still plain files in `public/`.

## SEO and metadata

`Layout.astro` renders the whole `<head>`: title, description, canonical,
hreflang, Open Graph/Twitter tags and JSON-LD. Pages pass what differs:

- `title` and `description` come from `meta` in `src/i18n/*.ts`. Keep titles
  within ~60 characters and descriptions within ~160, aimed at the terms a
  municipality would search for in that language.
- `image` is the social preview, root-relative or imported; it defaults to
  `site.ogImage` (`public/images/og-default.jpg`, 1200×630).
- `translated` lists the locales that have an equivalent page. Only those get
  an `hreflang` alternate, and `x-default` points at English when it exists.
  `postLocalePaths` and `categoryLocalePaths` in `src/utils/blog.ts` return it
  alongside `paths`, whose blog-index fallback is for the language switcher
  only — never an `hreflang` target.
- `publishedTime` marks a page as an article (`og:type`,
  `article:published_time`), and `schema` adds page-specific JSON-LD. Blog posts
  pass a `BlogPosting`. The `WebSite` and `Organization` schemas are site-wide,
  and `Organization.sameAs` comes from `social` in `src/data/site.ts`.
- One `<h1>` per page; section titles are `<h2>`. Article lead paragraphs are
  bold text, not headings.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
