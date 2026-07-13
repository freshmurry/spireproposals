# Spire Proposals — Agent Notes

This is a React + TanStack Start application built with Vite, Tailwind CSS v4, and deployed to Cloudflare Workers.

## Tech Stack
- **Framework:** TanStack Start (SSR) + TanStack Router (file-based routing)
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Build:** Vite
- **Deploy:** Cloudflare Workers (`wrangler`)
- **Package manager:** Bun

## Key Directories
- `src/routes/` — File-based routes (TanStack Router)
- `src/components/site/` — Layout components (SiteHeader, SiteFooter, Reveal)
- `src/components/ui/` — shadcn/ui component library
- `src/styles.css` — Global styles and design tokens

## Local Development
```bash
bun install
bun dev
```

## Production Build + Deploy (Cloudflare)
```bash
bun run build
bun run cf:deploy
```
