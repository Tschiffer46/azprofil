# Architecture — AZ Profil AB Homepage

## Overview
Production homepage for AZ Profil AB (org nr 556983-5076), built by ATM AB (org nr 559378-3045).

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| i18n | react-i18next |
| Form backend | Formspree (free tier) |
| Deployment | GitHub Actions → Hetzner (rsync) |

## Color Palette
| Role | Hex |
|------|-----|
| Background | `#000000` |
| Primary accent | `#4BC8D8` |
| Text on dark | `#FFFFFF` |
| Secondary text | `#A0A0A0` |
| Card backgrounds | `#111111` / `#1A1A1A` |

## Repository Structure
```
src/
  components/    # React components (one per section)
  data/          # Static data (partners, testimonials)
  i18n/          # Translation files (sv.json, da.json)
  App.tsx        # Root component
  main.tsx       # Entry point
  index.css      # Global styles (Tailwind directives)
public/
  assets/        # Images, logos, placeholders
.github/
  workflows/     # GitHub Actions deployment
docs/            # Project documentation
```

## Components
- **Navbar**: Sticky, responsive, smooth scroll, language switcher
- **HeroSlider**: Full-screen 3-slide auto-rotating carousel
- **Services**: 5-tile grid with hover overlay
- **Partners**: 6-card grid with partner data
- **Testimonials**: 4-card 2x2 grid
- **Team**: 2-card team section
- **Contact**: 3-column (info + form + map)
- **Footer**: Company info, legal links, GDPR note
- **CookieBanner**: GDPR-compliant, localStorage persistence

## Deployment
Push to `main` branch triggers GitHub Actions build + rsync deploy to Hetzner.

Required GitHub Secrets: HETZNER_HOST, HETZNER_USER, HETZNER_SSH_KEY
