# PakBussHub

A business directory website for the Pakistani community in Mississauga, Ontario. Community
members can search for and discover local Pakistani-owned businesses; business owners can create
an account and submit a free listing; and a private admin page is used to approve listings before
they go live.

This README is written for a complete beginner — no prior coding experience assumed.

## What this is built with (and why)

- **Next.js** (a popular React framework) — one project handles both the pages you see and the
  behind-the-scenes server logic (login, saving businesses, etc.), so there's only one thing to
  run and, later, one thing to deploy.
- **SQLite** (via **Prisma**) as the database — SQLite is just a single file on your computer
  (`prisma/dev.db`). There's no separate database software to install, which makes it the easiest
  option for getting started and previewing locally. When you're ready to put PakBussHub online
  permanently, see [Going live](#going-live-deployment) below for how to switch to a proper hosted
  database.
- **Tailwind CSS** for styling — lets the design stay consistent without writing a lot of custom
  styling code.
- A simple, custom login system (email + password, with secure encrypted sessions) — no third-party
  accounts required.

## Running it on your own computer

You'll need [Node.js](https://nodejs.org) installed (version 18 or newer). Then, from this
project's folder:

```bash
# 1. Install all the project's dependencies (only needed once, or after pulling new changes)
npm install

# 2. Create your local settings file
cp .env.example .env
```

Open the new `.env` file in any text editor. The defaults work fine for local previewing, but
note the `ADMIN_EMAIL` and `ADMIN_PASSWORD` — that's the login you'll use for the private admin
page.

```bash
# 3. Create the database file and its tables
npm run db:push

# 4. Fill it with sample businesses, blog-ready content, and an admin account
npm run db:seed

# 5. Start the site
npm run dev
```

Now open **http://localhost:3000** in your browser — that's the website, running on your own
computer. Leave the terminal window open while you're previewing; press `Ctrl+C` in it to stop
the site.

### Logging in to try things out

The seed step above creates a few ready-to-use accounts:

| Role | Email | Password |
|---|---|---|
| Admin (approve/reject listings) | value of `ADMIN_EMAIL` in `.env` (default `admin@pakbusshub.com`) | value of `ADMIN_PASSWORD` in `.env` (default `ChangeMe123!`) |
| Sample business owner | `owner@pakbusshub.com` | `Password123!` |
| Sample business owner #2 | `owner2@pakbusshub.com` | `Password123!` |

- Log in as the **business owner** and visit **My Dashboard** to see how a business edits its own
  listing.
- Log in as the **admin** and visit **http://localhost:3000/admin** — this page is intentionally
  *not* linked anywhere in the website's menus (that's what makes it "private"); you get to it by
  typing the address directly, the same way you'll do it once the site is live. There you can
  approve or reject the two sample "pending" businesses included in the seed data.
- Anyone can create a free account from the **Log In** / **Register Your Business** links to try
  the full sign-up-and-submit-a-listing flow.

If you ever want to wipe the database and start over with fresh sample data, delete
`prisma/dev.db` and re-run `npm run db:push` and `npm run db:seed`.

## Project structure, in plain terms

- `src/app/` — every page on the site. Folders map to web addresses — for example,
  `src/app/about/page.tsx` is the About Us page, and `src/app/listings/[slug]/page.tsx` is the
  template used for every individual business's profile page.
- `src/app/api/` — the "behind the scenes" logic: creating accounts, logging in, saving a business
  listing, approving/rejecting listings, and the contact form.
- `src/components/` — reusable pieces (the navigation bar, business cards, forms, etc.) shared
  across pages.
- `src/lib/` — shared logic and content, including the placeholder blog articles and FAQ text.
- `prisma/schema.prisma` — the database structure (what a "business" or "user" record looks like).
- `prisma/seed.ts` — the script that fills the database with sample businesses and accounts.

## Going live (deployment)

When you're ready to put PakBussHub on the internet permanently:

1. **Database:** SQLite (the single-file database used for local previewing) isn't suitable for a
   live website. Sign up for a free hosted database — [Neon](https://neon.tech) or
   [Vercel Postgres](https://vercel.com/storage/postgres) are both beginner-friendly — and update
   two things: change `provider = "sqlite"` to `provider = "postgresql"` in
   `prisma/schema.prisma`, and set `DATABASE_URL` in your environment settings to the connection
   string they give you.
2. **Hosting:** [Vercel](https://vercel.com) is the easiest place to deploy a Next.js site like
   this one — it's made by the same company and free to start. Create a Vercel account, connect
   this GitHub repository, and add the same environment variables from your `.env` file (using
   your real database URL from step 1, and a freshly generated `SESSION_SECRET`) in Vercel's
   project settings.
3. After the first deploy, run `npm run db:push` and `npm run db:seed` once against your new live
   database (Vercel's docs explain how to run one-off commands, or you can do it from your own
   computer by temporarily pointing `DATABASE_URL` in your local `.env` at the live database).

We're happy to walk through this step by step whenever you're ready — just ask.

## Swapping in real content later

Everything on the site right now is realistic placeholder content so you can see how it will
look and feel:

- **Images** use [Picsum](https://picsum.photos), a free stock-photo placeholder service. Business
  owners can paste their own image URLs any time from their dashboard — there's a "New
  Placeholder" button while registering if you'd rather leave it as a placeholder for now.
- **Address, phone, and email** placeholders (`123 Placeholder Street...`, `(555) 123-4567`,
  `hello@pakbusshub.com`) appear on the Contact page and in the footer — update these directly in
  `src/components/Footer.tsx` and `src/app/contact/page.tsx` once you have real ones.
- **Blog articles** live in `src/lib/blog.ts` as plain text — edit or add to that file to publish
  new posts.

## Note on this repository

This repository previously contained files from a different, unrelated project. Those files were
left untouched (not deleted) in case anything in them was still needed, but they are not part of
PakBussHub and can be safely removed whenever you'd like — just let us know.
