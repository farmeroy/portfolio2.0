This is the second iteration of my portfolio site, now built with [Astro](https://astro.build/).

My theme is based on [cocopan's](https://github.com/cocopon) theme for Vim, [Iceberg](https://cocopon.github.io/iceberg.vim/).

Case studies are written in Markdown and loaded as an Astro content collection (`src/content/case-studies`), with a page generated for each one via `getStaticPaths()`. Images live in `src/assets` and are optimized at build time with `astro:assets`.

## Getting Started

Requires Node.js 22.12+ and [pnpm](https://pnpm.io/).

```bash
git clone https://github.com/farmeroy/portfolio2.0.git
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

## Build

```bash
pnpm build    # outputs to dist/
pnpm preview  # serve the production build locally
```

The site is deployed on Netlify (see `netlify.toml`), and the contact form uses Netlify Forms.
