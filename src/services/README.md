# Services

Service modules should coordinate app use cases that may touch multiple repositories.

Suggested modules later:

- `booking.service.ts` for cart-to-booking workflows
- `workshop.service.ts` for filtering and workshop discovery use cases
- `profile.service.ts` for customer/artisan account flows

Keep UI state in React components/context, but put reusable business workflows here.
