# The Journey — page design spec

Date: 2026-07-09 · Status: approved by Anis (design + approach questions answered in session)

## Goal

A permanent season-record page at **lordofthebricks.co.uk/journey** using the copy supplied by
Anis verbatim ("540 out of 545"). It must read right in a pitch email today and to the kids in
ten years. Each event shows one sample photo/video on the page; a button links to a full
per-event gallery.

## Decisions (user-approved)

1. **Gallery pattern**: one `gallery.html` page with a section per event; every "View all
   photos & videos" button on the journey page deep-links to `gallery.html#<event-id>`.
2. **Theme**: light editorial — the homepage system (bone/navy/red, Space Grotesk/Inter/
   JetBrains Mono). Not the dark deck theme.
3. **Media**: folders not yet supplied. Build now with the site's existing `.ph` placeholder
   frames wired to a manifest; swap to real files when folders arrive.

## Files

| File | Purpose |
|---|---|
| `journey.html` | The Journey page. GitHub Pages serves it at `/journey` (extensionless), so the preferred URL works; no `/story` fallback needed. |
| `gallery.html` | Full media gallery, one section per event, at `/gallery`. |
| `media/journey/manifest.js` | Single data file: `window.JOURNEY_MEDIA` — ordered list of events, each with `id`, `title`, `dir`, `items[]` (`src`, `type: image|video`, `alt`, optional `poster`). Both pages read it. |
| `index.html` | One-line change: footer quick-link "The Journey" now points to `journey.html` (the in-page `#journey` timeline stays reachable from the top nav). |

## Media convention

- Folders: `media/journey/00-hero/`, `01-regionals/`, `02-nationals/`, `03-practice/`,
  `04-jeonju/`, `05-team/`, `06-coaches/`, `07-robot/`, `08-innovation/`, `09-film/`.
- Anis drops photos/videos into the folders; the manifest is regenerated (by hand or a
  one-liner) listing each file. **The first item in an event's `items[]` is the sample** shown
  on journey.html — reorder to choose a different sample.
- Progressive enhancement: journey.html and gallery.html ship with static `.ph` placeholder
  frames (with expected folder path printed inside, matching the homepage convention). A small
  script upgrades each slot to the real sample / full grid when the manifest has items. Empty
  manifest ⇒ placeholders stay; no broken images ever.

## journey.html structure

Section order is the user's copy, verbatim, top to bottom:

1. **Nav** — homepage nav pattern; brand links to `index.html`; links: The Story · The Season ·
   The Team · The Robot · The AI · Watch · Media; CTA "Back the team →" → `partners.html`.
2. **Hero** — PHOTO 1 full-width (hero-photo frame + stamps pattern), `h-display` "540 out of
   545", strap "Eight kids. Six schools. Coached by parents. Silver for Great Britain."
3. **The story in 100 words** — single measure, `body-lg`.
4. **The numbers** — ruled editorial rows (display-weight number left, sentence right, hairline
   rules between). NOT a stat-card grid (banned pattern).
5. **The season** — four chapters (Kent Regionals · UK Nationals Harrogate · The two months
   between · Korea Open Jeonju). Each: mono eyebrow (event + date), heading, sample media slot
   (16/9), body copy, `View all photos & videos →` → `gallery.html#<id>`.
6. **The team** — PHOTO 6 wide + eight names/roles from the copy (Esha, Sakthi, Guhan, Arvin,
   Flossie, Elliot, Anaisa, Aaliya). Three roles are fill-ins.
7. **The coaches** — PHOTO 7 + copy.
8. **The robot** — PHOTO 8 (4/5 close-up) + copy.
9. **The Innovation Project** — PHOTO 9 + copy; "Try it here: [link]" is a fill-in.
10. **The lesson** — text only; the closing line set at pull-quote scale.
11. **Watch** — 90-second film slot (video sample from `09-film/`) + availability note.
12. **In their words** — coach quote (real, needs Loge & Karthicraja's nod — noted as fill-in
    flag, not a blocker); two `[QUOTE]` fill-ins.
13. **What's next** — final FLL season paragraph; partners link → `partners.html`.
14. **Media enquiries** — name/email/phone fill-ins; consent line ships as written (making it
    true pre-launch is on Anis's checklist).
15. **Footer** — homepage footer pattern, adjusted copy.

## Fill-in marks

Every bracketed item renders as a visible mark: JetBrains Mono, muted, red square brackets,
dashed underline — `<mark class="fill" data-fill="<key>">…</mark>`. Pre-launch check:
`grep -c data-fill journey.html` must be 0 (or each consciously resolved).
Known fill-ins: 2 event dates, 3 roles (Elliot/Anaisa/Aaliya), KAS assistant link, 2 quotes,
media contact (name/email/phone), coach-quote sign-off nod.

## gallery.html structure

- Same design tokens/nav/footer as journey.html; heading "The photos and the videos".
- Jump-nav row of mono chips (one per event) under the header.
- One section per manifest event: eyebrow (event date), `h-section` title, count line, media
  grid `repeat(auto-fill, minmax(300px, 1fr))`, tiles 4/3 `object-fit: cover`, images
  `loading="lazy"`, videos inline `controls preload="metadata"`.
- Dependency-free lightbox: click a photo → full-viewport overlay showing the uncropped image,
  ←/→ navigation, Esc/backdrop click closes, focus returned to trigger. Videos play in place
  (no lightbox).
- Each section id matches the manifest `id` so journey.html deep links land correctly;
  `scroll-margin-top` accounts for the fixed nav.
- Events with no items render the placeholder frame + expected folder path.

## Constraints (from PRODUCT.md — enforced)

- Palette, type, spacing tokens exactly as committed. No new colors.
- Bans: gradients (purple/cyan/neon), left-border accent stripes, glassmorphism chrome,
  decorative SVG illustration, hero-metric cards, emoji icons above headings.
- One signature craft moment for this page: the hero — full-bleed Jeonju photo with the
  "540 out of 545" headline. Everything else stays editorial.
- Reveal-on-scroll + reduced-motion guard, as on the homepage.

## Out of scope

- Reconciling the homepage's "nine kids" (incl. Toby) with the Journey copy's eight — flagged
  to Anis, homepage untouched beyond the one footer link.
- Rewriting homepage's pre-Korea framing (T-20 badge, "we're flying") post-result.
- Custom-domain cutover; og: URLs follow the existing github.io convention until the domain is live.

## Pre-launch checklist (Anis)

1. Fill all `data-fill` marks (grep above).
2. Get Loge & Karthicraja's nod on the coach quote wording.
3. Collect the eight written parental consents before the consent line goes live.
4. Drop media folders; I regenerate the manifest.
5. Swap the URL into the pitch email.
