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
- Assets referenced from CSS live in `src/assets/`; `withBase()` assets that
  markup references stay in `public/`.
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
- `PolicyLinks.astro` — the footer's legal links and the `<dialog>`s they open,
  replacing remodal. A native `<dialog>` brings its own top layer, backdrop,
  focus trap and Escape handling.

Two rules for these scripts. Render the initial state server-side and let the
script only handle changes, so nothing moves on load — a height change inside a
scroll-snap container makes the browser re-snap. And a script is per page, not
per instance: it is hoisted out of the component, so it runs once however many
times the component renders, and reaching for `querySelector` is only safe while
a page has one of them.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
