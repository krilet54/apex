# Apex — Frontend (React + Vite + Tailwind)

This repository contains a frontend-only React application for the Apex examination & training centre site. It includes pages: Home, About, Our Centre, Services, Service Detail, and Contact.

Tech stack
- React 18 (Vite)
- Tailwind CSS
- Framer Motion (subtle animations)
- react-router-dom (client routing) with code-splitting
- lucide-react for icons

Quick start
1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Preview production build

```powershell
npm run preview
```

Project structure (important files)

- `/src/data/services.js` — editable list of services used by Services and ServiceDetail pages.
- `/src/components` — UI components (Header, Footer, Hero, ServiceCard, ServiceList, CentreFeatures, ContactForm, LocationMap, CTASection, PageContainer).
- `/src/pages` — route pages.
- `tailwind.config.cjs`, `postcss.config.cjs`, `vite.config.js` — build tooling.

Accessibility and SEO
- Semantic HTML5 elements used (header, main, footer, nav, section, article).
- All images include `alt` text (placeholder images included).
- Keyboard accessible interactions and visible focus styles are present.

Content notes
- Primary content (facility details, counts, and client names) are included in `/src/data/services.js` and page copy. Replace placeholder images in `/src/assets/images` with real photography.

Contact form
- The contact form validates client-side. On submit it opens the user's mail client using `mailto:` and shows a success message. This is a front-end placeholder for integration with a backend or form provider.

Development checklist (acceptance)
- [ ] App runs with `npm run dev`.
- [ ] Routes: `/`, `/about`, `/our-centre`, `/services`, `/services/:slug`, `/contact` are present.
- [ ] Header and mobile nav work; header is sticky.
- [ ] Hero has animation and two CTAs that navigate.
- [ ] Services list and 5 services exist; detail page renders from data.
- [ ] Contact form validates and opens mailto fallback.
- [ ] Google Maps iframe included on Our Centre and Contact pages.

Image prompts (suggested for hero & centre photography)
- Hero: "High-resolution modern corporate training lab interior, rows of computer workstations, air-conditioned, professional lighting, neutral color palette — photorealistic — suitable for government training center website."
- Centre photos: "Reception and waiting area of a government training centre with neutral tones, accessible design, clear signage, photorealistic."

Notes & Next steps (optional improvements)
- Add unit tests (Jest + React Testing Library) for Header and ContactForm.
- Add Lighthouse audit and optimizations (prefer preloading fonts and optimizing images to WebP).
- Replace placeholder images and add real client logos.
- Integrate form backend or 3rd-party service for submissions.

If you want TypeScript instead of JavaScript, I can convert the project and add types + PropTypes.
