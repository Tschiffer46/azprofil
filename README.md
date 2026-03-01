# AZ Profil AB — Homepage

Production homepage for **AZ Profil AB** (org nr 556983-5076), built by **ATM AB**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Tech Stack
- React 18 + Vite 5 + TypeScript
- Tailwind CSS 3
- react-i18next (Swedish + Danish)
- Formspree for contact form

## Deployment
Automatic on push to `main` via GitHub Actions → Hetzner (rsync).

Required secrets: `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY`

## Contact
info@azprofil.se | order@azprofil.se | Åkergränden 7, 226 60 Lund