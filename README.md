# Developer Portfolio

An animated, single-page portfolio for a Front-End Developer and Software Engineer, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` builds for production
- `npm run start` serves the production build
- `npm run lint` runs ESLint

## Make it yours

### 1. Content

All text lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): your name, role, bio, email, social links, hero tags, services, projects, experience, stats, and testimonials. Edit that file and the whole site updates. You don't need to touch any components.

### 2. Portrait

The hero and About sections use `profile.portrait` (currently the placeholder illustration `public/profile.svg`).

1. Use a photo of yourself with a **transparent background** (a PNG cut-out) so it sits on the sea blue shape the way the design intends. Free tools like remove.bg can do this.
2. Save it as, for example, `public/profile.png`. A portrait ratio of roughly 7:8 (e.g. 840 x 960 px) fits best.
3. Set `portrait: "/profile.png"` in `src/data/portfolio.ts`.

### 3. Project and service images

Replace the placeholder mockups in `public/projects/` and `public/services/` with real screenshots (16:10 works best), then update the `image` paths in `portfolio.ts`.

### 4. Resume

Replace `public/resume.pdf` with your own resume. Every "Download Resume" button points to `profile.resumeUrl`.

### 5. Accent color

The sea blue accent is defined once at the top of [`src/app/globals.css`](src/app/globals.css):

```css
@theme {
  --color-accent: #0891b2;
  --color-accent-light: #22b8cf;
  --color-accent-dark: #0b6e8a;
  --color-accent-soft: #e0f6fa;
}
```

Change these four values to re-theme the whole site.

### 6. Light and dark mode

The sun/moon button in the navbar switches themes. The first visit follows the visitor's system setting, and their choice is remembered in `localStorage`. Dark-mode colors are overrides of the same variables in the `[data-theme="dark"]` block of `globals.css`; for one-off tweaks use Tailwind's `dark:` variant (e.g. `dark:ring-1`).

### 7. SEO

Page title, description, and Open Graph tags are built from `profile` in [`src/app/layout.tsx`](src/app/layout.tsx). Set `profile.siteUrl` to your real domain.

## Project structure

```
src/
  app/            layout, page, global styles
  components/     page sections (Navbar, Hero, Marquee, Services, About, Projects, Experience, Testimonials, Contact, Footer)
  components/ui/  shared pieces (buttons, headings, blob, badge, icons, reveal-on-scroll)
  data/           portfolio.ts (all content)
  hooks/          useActiveSection (navbar highlighting)
public/           portrait, project and service images, resume
```

Animations respect the operating system's "reduce motion" setting.

## Deploy

The easiest option is [Vercel](https://vercel.com/new): push this repo to GitHub, import it in Vercel, and deploy with the default settings. No environment variables are needed.
