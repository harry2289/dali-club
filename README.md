# Dali Bacha Boxing Club

Official website for **Dali Bacha Boxing Club** — Soliman, Tunisie.

> « Plus qu'un club, une famille » — Dépasse tes limites avec nous.

A high-energy, animation-rich marketing site built to showcase the club's programs (Boxe Anglaise, Boxe Junior, Boxe Femmes), coaching staff, gallery, events, and schedule, with direct WhatsApp/contact conversion paths.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4**
- **Framer Motion** for scroll/hover/entry animations
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/
    sections/        # Hero, About, Programs, Coaches, Gallery, Event, Testimonials, ScheduleContact
    ui/               # Reusable UI: Button, SectionHeading, Counter, Emblem, icons
    Navbar.tsx
    Footer.tsx
    Preloader.tsx
    FloatingWhatsApp.tsx
  data/
    content.ts        # All club content (programs, coaches, schedule, testimonials, gallery)
  index.css           # Tailwind theme tokens + custom animations
```

## Content Notes

Placeholder content (gallery imagery, coach photos, exact schedule) is based on the club's public Instagram profile (`@boxing_club_dali_bacha`) and should be swapped for real photos/video and confirmed business details before launch.

## Contact

- Location: Soliman, Tunisie
- WhatsApp/Phone: +216 54 60 31 06
- Instagram: [@boxing_club_dali_bacha](https://www.instagram.com/boxing_club_dali_bacha/)
