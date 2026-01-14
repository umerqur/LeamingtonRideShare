# Leamington RideShare

A modern, conversion-focused landing page for Leamington RideShare - safe local rides with approved drivers, transparent pricing, and city-friendly support.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library with TypeScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Netlify** - Hosting and forms

## Features

- Modern, mobile-first responsive design
- Premium dark blue/charcoal color scheme
- Conversion-optimized landing page with:
  - Hero section with gradient background
  - Trust indicators
  - How it works (tabs for riders and drivers)
  - FAQ section with accordion
  - Early access lead capture form (Netlify Forms)
  - Thank you page
- Smooth scroll navigation
- Accessible UI components

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Netlify Deployment

This project is configured for Netlify deployment:

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Forms are automatically handled by Netlify Forms

The `netlify.toml` file is pre-configured with redirects for client-side routing.

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TrustRow.tsx
│   ├── HowItWorks.tsx
│   ├── FAQ.tsx
│   ├── LeadForm.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── LandingPage.tsx
│   └── ThankYouPage.tsx
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Tailwind imports
```

## License

All rights reserved.