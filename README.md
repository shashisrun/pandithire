# Pandit Hire Website

A modern, mobile-friendly website for a Pandit hire business. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Home, Services, Service Detail, About, and Contact pages
- Click-to-call and WhatsApp inquiry buttons
- Sticky mobile contact bar
- FAQ accordion
- SEO-friendly with sitemap, robots.txt, and schema markup
- Google Analytics support
- Fully responsive (mobile-first)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Customization

Edit the following files to customize business details:

- `data/businessInfo.ts` — Phone numbers, email, service areas, working hours
- `data/services.ts` — Add, remove, or modify puja services
- `data/faqs.ts` — Update FAQ content

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_PHONE_NUMBER=+919999999999
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_SITE_URL=https://pandithire.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Build

```bash
npm run build
npm start
```

## Deployment

Recommended: Deploy to Vercel with one click.
