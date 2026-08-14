# Presto Homes — Design System

Single source of truth for the typography, color, and capitalization rules already
in use across the site. All values below are extracted directly from
`css/style.css` (no new fonts or colors were introduced) and are enforced through
that one shared stylesheet, so every page that links it (`index.html`,
`about.html`, `gallery.html`, `services.html`, `contact.html`, and the project
detail pages) automatically stays in sync.

## Typography

Fonts loaded (unchanged): `Cormorant Garamond` (serif, headings) and
`Montserrat` (sans-serif, everything else), via Google Fonts `@import` at the
top of `style.css`.

| Role | Font family | Size | Weight | CSS source |
|---|---|---|---|---|
| **Main Page Heading** (h1 — e.g. "Ready to See Your Dream Home Become a Reality?") | Cormorant Garamond (`--font-serif`) | `clamp(2rem, 3.2vw, 2.6rem)` | 500 | `h1` rule + `.hero-title` (Home page hero, now matched to the same value) |
| **Sub Heading** (h2 — e.g. "Why Presto Homes?", "Tell Us What You Need") | Cormorant Garamond (`--font-serif`) | `clamp(1.3rem, 2.4vw, 1.9rem)` | 500 | `h1, h2, h3, h4` shared rule |
| **Card/Item Heading** (h3/h4 — e.g. "Licensed Home Builder", footer column titles) | Cormorant Garamond (`--font-serif`) | h3: `1.15rem` / h4: `1rem` | 600 | `h3`, `h4` |
| **Body Text** (paragraphs, descriptions, form labels) | Montserrat (`--font`) | 1rem baseline (context-specific sizes range ~0.82–1.1rem for things like form notes vs. lead paragraphs) | 400 | `body`, `p` — color `--ink` |
| **Buttons** | Montserrat (`--font`, inherited) | 0.95rem | 600 | `.btn` |
| **Navigation links** | Montserrat (`--font`, inherited) | 0.95rem | 500 | `.nav-links a` |

**Change made this pass:** the Main Page Heading was reduced from
`clamp(2.3rem, 4vw, 3.4rem)` to `clamp(2rem, 3.2vw, 2.6rem)` — moderately
smaller, while remaining the largest text on every page (next largest is the
Sub Heading role, capped at `1.9rem`). The Home page hero title, which is that
page's equivalent of the Main Page Heading, was updated to the identical value
so the role renders consistently across all 5 pages.

## Color System

All hex values below are the exact ones already defined as CSS custom
properties in `css/style.css` (`:root` block) — nothing substituted or
invented.

| Role | Token | Hex |
|---|---|---|
| **Deep Crimson** (primary accent / headings / CTAs) | `--burgundy` / `--burgundy-light` | `#dc143c` |
| **Warm Gold** (icons / secondary accents) | `--gold` | `#c8a24d` |
| Gold — lighter variant (icon strokes/text on dark backgrounds) | `--gold-light` | `#e0c47f` |
| **Cream / Ivory** (background) | `--cream` | `#f7f4ee` |
| **Dark Neutral** (text role) | `--ink` | `#1c1f26` |

**Usage rule (site convention):**
- Gold = icons and small accent details only
- Crimson = headings, CTAs, key numbers/labels only
- Cream = base background throughout
- Dark neutral (`--ink`) = all body text and non-accent headings

**Note on body paragraph copy:** plain `p` elements were switched from the
muted secondary gray (`--gray-600` / `#5b6472`) to `--ink` (`#1c1f26`) sitewide
via the single shared `p` rule, so every page picks it up automatically.
Component-specific text that's intentionally a secondary/muted tone (form
notes, footer captions, timestamps, badges, etc.) keeps its own explicit
`--gray-600` color where that was already set on a more specific selector —
those are deliberate secondary-UI-text uses, not the general body-copy role.

## Capitalization

All major headings (h1–h4) and navigation items use Title Case, with minor
words (a, an, and, as, at, but, by, for, in, of, on, or, the, to) lowercased
unless they're the first word of the heading. This pass fixed 9 headings that
had inconsistently capitalized minor words:

- About Us: "Let's Create A Home You'll Love" → "...a Home..."
- Home: "Luxury New-Build Homes In Sydney" → "...in Sydney"
- Home: "A Haven Of Luxury... And Sophistication" → "...of Luxury... and Sophistication"
- Home: "Ready To Find Your Dream Home Address" → "Ready to Find..."
- Services: "Finishing Touches For Every Presto Home" → "...for Every..."
- Services: "Complete Solutions For Your Home" → "...for Your Home"
- Services: "Secure. Stylish. Built To Last." → "...Built to Last."
- Services: "From Groundbreaking To Move-In" → "...to Move-In"
- Project Gallery: "Modern Homes Built For Your Life" → "...for Your Life"
