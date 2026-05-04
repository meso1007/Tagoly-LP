<div align="center">
  <h1>Tagoly LP</h1>

  <a href="https://www.tagoly-lp.us/">
    <img src="./src/favicon.ico" alt="Tagoly logo" width="80" />
  </a>

<p>
    <strong>The digital home for Tagoly — The smarter Git commit CLI.</strong><br />
    A high-performance landing page designed to showcase features, streamline installation, and onboard developers.
  </p>

<p align="center">
  <a href="https://www.tagoly-lp.us/"><b>Live Site</b></a>
  &nbsp;&nbsp;︱&nbsp;&nbsp;
  <a href="https://github.com/meso1007/tagoly"><b>Tagoly CLI</b></a>
  &nbsp;&nbsp;︱&nbsp;&nbsp;
  <a href="https://github.com/meso1007/tagoly-lp"><b>Togoly LP</b></a>
</p>
</div>

## Overview

`tagoly-lp` is the landing page project for Tagoly.  
It is built with Next.js App Router and optimized for product communication, SEO, and maintainability.

## Preview

[![Tagoly top page preview](./public/top-page-screenshot.png)](https://www.tagoly-lp.us/)

## Key Features

- Conversion-oriented hero and section flow for product onboarding
- Animated intro and transitions powered by Framer Motion
- Reusable UI architecture with modular components in `src/components`
- Built-in SEO support with metadata, sitemap, robots, and Open Graph image routes

## Tech Stack

| Category | Technology | Purpose |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Routing, rendering, and metadata |
| UI | React 19 | Component-based interface |
| Language | TypeScript | Type-safe development |
| Styling | Tailwind CSS 4 | Utility-first styling |
| Animation | Framer Motion | Motion and transition effects |
| Runtime | Bun | Dependency management and scripts |
| Linting | ESLint | Code quality checks |

## SEO Implementation

| Item | File |
| --- | --- |
| Metadata / Canonical / OG / Twitter | `src/app/layout.tsx` |
| Structured Data (`WebSite`, `SoftwareApplication`) | `src/app/layout.tsx` |
| Robots route | `src/app/robots.ts` |
| Sitemap route | `src/app/sitemap.ts` |
| Open Graph image route | `src/app/opengraph-image.tsx` |
| App icon route | `src/app/icon.tsx` |

## Getting Started

### Prerequisites

- Bun installed locally

### Local Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start development server |
| `bun run build` | Build production assets |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |

## Project Structure

| Path | Description |
| --- | --- |
| `src/app` | App Router pages, layout, metadata, and SEO routes |
| `src/components` | Reusable UI and page sections |
| `src/lib` | Shared utility modules |
| `public` | Static assets |

## Deployment

This project can be deployed to Vercel (recommended) or any hosting platform that supports Next.js.
