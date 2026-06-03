# DiSanity Frontend

Website React + TypeScript cho phép nguoi dung kham pha, xem chi tiet va dat lich cac workshop ve di san van hoa.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Supabase, planned backend/data layer
- Vercel, planned deployment

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
  components/
    common/        Shared layout components
    domain/        DiSanity-specific UI sections and cards
    ui/            Reusable primitive UI components
  context/         React context state, currently booking/cart
  hooks/           Reusable client hooks
  lib/             External client setup, including Supabase later
  pages/           Route-level pages
  repositories/    Data access wrappers for Supabase tables/views later
  router/          React Router configuration
  services/        Use-case/business service functions later
  types/           Shared TypeScript domain types
  utils/           Formatting helpers and temporary mock data

supabase/
  migrations/      SQL schema migrations
  functions/       Supabase Edge Functions
  seed.sql         Local/dev seed data placeholder
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values when Supabase is connected.

Vite only exposes variables prefixed with `VITE_` to the browser.
