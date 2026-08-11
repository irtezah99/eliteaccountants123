# Property images — how to swap in real photos

Every property photo on the site is a local file under `images/properties/<project-slug>/`.
The current files are generated placeholder graphics (clearly labeled "placeholder image"
in the corner) — not real Unsplash photos. To replace them with real photography, **just
overwrite the file at the same path with the same filename** (or point the `<img src>` at
a new path if you rename something). No HTML/CSS changes are needed — the layout, cropping
(`object-fit: cover`), and aspect ratios are all handled by CSS already.

## Folder structure

```
images/properties/
  alderwood/       exterior.jpg  lounge.jpg  kitchen.jpg  bedroom.jpg  bathroom.jpg  backyard.jpg
  bayview/         exterior.jpg  lounge.jpg  kitchen.jpg  bedroom.jpg  bathroom.jpg  deck.jpg
  cedar-ridge/     exterior.jpg  lounge.jpg  kitchen.jpg  bedroom.jpg  bathroom.jpg  grounds.jpg
  harbor-point/    exterior.jpg  lounge.jpg  kitchen.jpg  bedroom.jpg  bathroom.jpg  patio.jpg
  maple-grove/     exterior.jpg  lounge.jpg  kitchen.jpg  bedroom.jpg  bathroom.jpg  backyard.jpg
  willow-creek/    exterior.jpg  lounge.jpg  kitchen.jpg  bedroom.jpg  bathroom.jpg  terrace.jpg
```

Each `exterior.jpg` is reused in multiple places automatically (hero rotation, featured
project, sold carousel, gallery cards, and that project's own detail page) — replace it
once and it updates everywhere.

## Recommended specs for replacement photos

- **Aspect ratio**: doesn't need to be exact — CSS crops with `object-fit: cover`. Landscape,
  roughly 4:3 to 16:9, works best across all the places an image gets reused.
- **Minimum size**: ~1600×1200px so it stays sharp on large hero banners.
- **File format**: `.jpg` (or swap to `.webp`/`.png` — just update the `src`/`href`
  extension in the matching HTML file if you change format).

## Suggested Unsplash search terms per slot

| File | Search term |
|---|---|
| `exterior.jpg` | "modern house exterior", "house front elevation", "suburban home exterior" |
| `lounge.jpg` | "modern living room", "living room interior" |
| `kitchen.jpg` | "modern kitchen interior", "kitchen island" |
| `bedroom.jpg` | "modern bedroom interior", "primary bedroom" |
| `bathroom.jpg` | "modern bathroom interior" |
| `backyard.jpg` / `deck.jpg` / `patio.jpg` / `terrace.jpg` / `grounds.jpg` | "backyard patio", "outdoor deck house", "landscaped backyard" |

Unsplash's license allows free commercial use without attribution, but crediting the
photographer is good practice.

## Other images not covered here

Site plan graphics and the video-walkthrough placeholder (on each project detail page)
were intentionally left as illustrated placeholders — they weren't part of this pass.
If you want those swapped for real site plans / an embedded video later, just say so.
