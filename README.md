# SecureChoiceGuide.com

Expert VPN reviews, cybersecurity tool comparisons, and online privacy guides.

## Quick Start

```bash
npm install
npm run dev        # → localhost:3000
npm run build      # Production build
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── guides/               # VPN review directory + detail pages
│   ├── compare/              # Tool comparisons
│   ├── blog/                 # Blog listing
│   ├── style-quiz/           # Security tool finder quiz
│   ├── about/privacy/contact # Legal pages
│   └── layout.tsx            # Root layout
├── components/
│   ├── Header.tsx            # Navigation
│   ├── Footer.tsx            # Footer
│   ├── GuideCard.tsx         # Review card
│   ├── ShopTheLook.tsx       # Affiliate product display
│   └── NewsletterCTA.tsx     # Email signup
├── lib/
│   └── guides-data.ts        # Content database
└── styles/
    └── globals.css            # Tailwind + design system
```

## Adding Content

### New VPN Review
Add to `src/lib/guides-data.ts` → page auto-generates at `/guides/[slug]`

## Monetization

- **Affiliate**: Amazon Associates + Skimlinks
- **AdSense**: Display ads

## Tech Stack

Next.js 14 + TypeScript + Tailwind CSS + GitHub Pages
