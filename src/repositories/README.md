# Repositories

Repository modules should wrap Supabase table/view access and return typed domain data.

Suggested modules later:

- `workshops.repository.ts`
- `artisans.repository.ts`
- `bookings.repository.ts`
- `reviews.repository.ts`

This keeps pages and components from depending directly on Supabase query details.
