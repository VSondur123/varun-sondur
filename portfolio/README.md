# Varun Sondur — Portfolio Website

A production-ready personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + Vite 8 | Core framework & bundler |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| AOS | Scroll-triggered animations |
| React Icons | Iconography |
| React Router v7 | Routing |
| React Helmet Async | SEO meta tags |
| EmailJS | Contact form (no backend) |
| gh-pages | GitHub Pages deployment |

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Content Management

All personal content lives in one file:

```
src/data/portfolio.json
```

To add content (new job, project, skill, achievement), simply append to the relevant array.
No React component changes needed — the UI dynamically renders from the JSON.

## EmailJS Setup

1. Create a free account at https://www.emailjs.com/
2. Create a service and email template
3. Create `.env.local` in project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build for Production

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

```bash
npm run deploy
```

Then: GitHub repo → Settings → Pages → Source: gh-pages branch.

Live at: https://varunsondur.github.io/portfolio

## Custom Domain Setup (varun.sondur)

Once the domain is purchased:

1. public/CNAME already contains `varun.sondur`
2. GitHub Pages settings → Custom domain → enter `varun.sondur`
3. Add DNS records at your registrar:

```
Type: A      Host: @    Value: 185.199.108.153
Type: A      Host: @    Value: 185.199.109.153
Type: A      Host: @    Value: 185.199.110.153
Type: A      Host: @    Value: 185.199.111.153
Type: CNAME  Host: www  Value: varunsondur.github.io
```

4. Enable "Enforce HTTPS" in GitHub Pages settings
5. DNS propagation takes 24-48 hours

## Project Structure

```
src/
├── components/
│   ├── common/       # ScrollToTop, SectionHeader
│   ├── layout/       # Navbar, Footer
│   ├── hero/         # Hero, HeroAvatar
│   ├── about/        # About
│   ├── experience/   # Experience timeline
│   ├── skills/       # Skills grid
│   ├── projects/     # Projects cards
│   ├── education/    # Education timeline
│   ├── achievements/ # Achievements + Certifications
│   ├── leadership/   # Leadership cards
│   └── contact/      # Contact form + info
├── pages/            # Home.jsx
├── data/
│   └── portfolio.json  (ALL content lives here)
├── hooks/            # useAOS, useScrollSpy
└── utils/            # iconMap.js

## SEO

- Meta title, description, keywords in index.html
- Open Graph + Twitter Card tags configured
- public/robots.txt — allows all crawlers
- public/sitemap.xml — update URLs after domain is live

## License

MIT
