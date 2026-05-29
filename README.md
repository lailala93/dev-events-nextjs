This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

The AI prompt for the db snipped
You are a backend developer working on a Next.js application with Mongoose and TypeScript. Your task is to build a database layer with two Mongoose models, `Event` and `Booking` in a new `database` folder.

📁 You must create exactly three files:

1. `event.model.ts`
2. `booking.model.ts`
3. `index.ts`

4. `database/event.model.ts`

Create a strongly typed Mongoose schema and model called Event with the following fields:

- `title` – string, required
- `slug` – string, unique, auto-generated from title
- `description` – string, required
- `overview` – string, required
- `image` – string, required
- `venue` – string, required
- `location` – string, required
- `date` – string, required
- `time` – string, required
- `mode` – string (e.g., online, offline, hybrid), required
- `audience` – string, required
- `agenda` – array of strings, required
- `organizer` – string, required
- `tags` – array of strings, required
- `createdAt` – date, auto-generated
- `updatedAt` – date, auto-generated

Requirements:

- Use a pre-save hook to automatically generate a URL-friendly slug from the title.
- Only regenerate the slug if the title changes.
- In the same pre-save hook, validate and normalize the `date` to ISO format and ensure `time` is stored in a consistent format.
- Validate that required fields are present and non-empty.
- Add a unique index to the slug.
- Enable automatic timestamps.
- Use strict TypeScript types (no `any`).
- Write concise comments explaining key logic such as slug generation, date formatting, and validation.

2. `database/booking.model.ts`

Create a strongly typed Mongoose schema and model called Booking with the following fields:

- `eventId` – ObjectId (reference to `Event`), required
- `email` – string, required, must be a valid email
- `createdAt` – date, auto-generated
- `updatedAt` – date, auto-generated

Requirements:

- In a pre-save hook, verify that the referenced `eventId` corresponds to an existing `Event`. Throw an error if the event does not exist.
- Validate that `email` is properly formatted.
- Add an index on `eventId` for faster queries.
- Enable automatic timestamps.
- Use strong TypeScript types throughout.
- Include concise comments explaining pre-save validation and schema design decisions.

3. `database/index.ts`

- Export both `Event` and `Booking` models so they can be imported anywhere in the application from a single file.

---

✅ Final Deliverable:

- Exactly three files: `event.model.ts`, `booking.model.ts`, and `index.ts`.
- Each model must use pre-save hooks for slug generation, date normalization, and reference validation.
- Code should be production-grade, clean, type-safe, and clear to understand.
- Include only meaningful, concise comments — no unnecessary explanations.
