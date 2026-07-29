# SkyHigh Accountants Design System

## Sources
No codebase, Figma file, or existing brand assets were attached for SkyHigh Accountants. This system was built from a written brand brief and a structural/stylistic reference document describing NVIDIA's public marketing site conventions (grid rhythm, card discipline, single-accent CTA philosophy, dark/light chapter alternation). **No NVIDIA visual identity was reused** — the literal brand color (NVIDIA Green), its corner-square motif, and its proprietary type were all replaced with original choices for SkyHigh: a navy/sky-blue palette, an original "horizon tick" card motif, and Inter as the type family. Treat this as a from-scratch system built to a chosen structural discipline, not a recreation of any existing product.

If real SkyHigh brand assets (logo, brand colors, existing site, fonts) become available, attach them and this system should be rebuilt against that ground truth.

## Company
SkyHigh Accountants — an accounting firm (bookkeeping, tax, payroll, advisory) serving small-to-mid-size business clients. No further product/audience detail was provided beyond the name, so the UI kits below (marketing site + client portal) are reasonable defaults for an accounting practice, not confirmed requirements.

## Content Fundamentals
- **Voice:** professional, plain-English, reassuring — explains financial complexity without jargon. Avoid hype; avoid emoji entirely (not part of this brand).
- **Address:** second-person ("you/your business") in marketing copy; first-person plural ("we") for the firm's own actions ("We handle your payroll so you don't have to").
- **Casing:** sentence case for headlines and body; uppercase reserved for small structural labels only (eyebrows, breadcrumbs, badges, footer fine print) — never for full headlines.
- **Numbers as proof:** short stat callouts ("4.2x faster close") back up claims instead of adjectives.
- Example headline: "Accounting that keeps up with you." Example CTA pairing: "Book a Consultation" (primary) + "See Pricing" (outline).

## Visual Foundations
- **Color:** one accent — Sky Blue (`--sky-blue` #2e7de1) — carries every primary CTA, active state, link, and stat highlight. Navy (`--navy-950`) is the "chapter" surface for hero/footer/nav, not a second accent. A muted gold is held in reserve strictly for rare editorial callouts, never CTAs.
- **Type:** Inter, weights 400/700 only. Hierarchy comes from size + weight, never color. See `tokens/typography.css` for the full 18-tier scale.
- **Spacing:** 8px base unit; major sections stack at a fixed 64px rhythm with no decorative dividers.
- **Backgrounds:** flat color only — no gradients, no photographic textures, no patterns. Hero/footer use full-bleed image or solid navy; body sections are plain white or `--surface-soft` gray.
- **Elevation:** no drop shadows on cards or content. Separation comes from 1px hairline borders. The only shadow in the system is a soft ambient (`--shadow-sticky`) for scrolled sticky chrome.
- **Radius:** near-flat geometry — 0/2/4px scale for all interactive elements; full-round reserved for avatars only. No pill buttons, no soft rounded cards.
- **Motif:** the "horizon tick" — a short 28×3px sky-blue bar anchored top-left of resource/feature/product cards. This is an original substitute for the NVIDIA reference doc's corner-square, sized and shaped differently.
- **Animation:** not yet specified — keep transitions minimal (opacity/color only, ~120ms ease) until real motion guidance is provided.
- **Imagery:** no real photography supplied — all image slots are gray placeholders labeled by aspect ratio (16:9 hero/product, 3:2 resource).

## Iconography
No icon set, icon font, or SVG sprite was supplied. Components currently use a plain Unicode glyph (◆) as an icon placeholder and a magnifier emoji in the search input as a stand-in — both should be swapped for a real icon set once the client indicates a preference (a stroke-icon set such as Lucide or Heroicons is a reasonable default match for this level of geometric restraint). No logo file exists; every logo slot renders the wordmark "SkyHigh Accountants" in Inter Bold instead — do not draw or approximate a logo.

## Index
- `styles.css` — root stylesheet, imports everything below
- `tokens/` — colors, typography, spacing, shape, elevation, fonts (Inter, Google Fonts hosted — flag to swap for real webfonts if supplied)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Shape, Brand)
- `components/`
  - `buttons/Button` — primary, outline, outline-on-dark, ghost, disabled
  - `forms/TextInput`, `SearchInput`
  - `tags/Badge`
  - `tabs/PillTabs`
  - `cards/Cards` — ProductCard, FeatureCard, ResourceCard, StatCallout, ImagePlaceholder
  - `hero/Hero` — HeroDark, CtaStrip
  - `navigation/Navigation` — UtilityBar, PrimaryNav, Breadcrumb, SubNavStrip; `navigation/Footer`
- `ui_kits/marketing-site/` — home + services interior page, click-through
- `ui_kits/client-portal/` — dashboard, invoices, documents (login → dashboard flow)
- `SKILL.md` — Claude Code / Agent Skills portable entry point

## Intentional additions
- `ImagePlaceholder`, `SearchInput`, `Breadcrumb`, `SubNavStrip`, `UtilityBar` — no source defined a component inventory (brief was brand-guidelines-only), so a standard accounting-marketing-site set was authored from scratch, sized to the described page types (hero chapters, resource/product grids, dense footer nav).
