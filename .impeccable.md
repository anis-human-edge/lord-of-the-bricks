# Lord of the Bricks — Design Context

> Project: public website + sponsor pitch deck for **Lord of the Bricks**, a 9-kid FLL team representing the UK at the FIRST LEGO League International Open Championship in Guadalajara, Mexico, 27–30 May 2026.
>
> Live at https://anis-human-edge.github.io/lord-of-the-bricks/ · partners deck at /partners.html.

---

## Design Context

### Users

**Homepage (`index.html`)**
- Primary: prospective sponsors landing from cold outreach, LinkedIn, or word-of-mouth. They want to assess legitimacy in 30 seconds before deciding to read on or click "Book a 20-min call."
- Secondary: parents at other UK FLL teams, press, schools, friends, casual share-link visitors.
- Context: arrives during a coffee break or end-of-day; mostly laptop, often phone. Must read cleanly cold without prior context.
- Job to be done: be moved by the team's story, decide whether to talk to them.

**Partners deck (`partners.html`)**
- Decision-makers (CSR, ESG, brand, marketing, talent) at companies pitched on Title / Platinum / Gold / Silver tiers.
- Mid-funnel — they've heard of the team, now reading the long-form case.
- Job to be done: build the internal case to commit £1k–£10k. Walk away with the £30k breakdown, the 12-month value arc, and the booking link.

### Brand Personality

Three words: **honest, scrappy, ambitious.**

Voice:
- Homepage = **first-person plural, kid-narrated**, conversational, slightly self-deprecating, named details ("we named it World Dominator. Don't laugh. We were 10.")
- Partners deck = parents writing the case, with the team's voice quoted in red-rule italic blockquotes throughout.

Emotional goals: pride (UK on the world stage), warmth (kids learning together since primary school), urgency (T-20 days), credibility (real AI partnership with KAS, not a school project).

### Aesthetic Direction

**References (positive)**: McLaren Applied technical comms · Raspberry Pi Foundation editorial · British Cycling's Olympic identity · the FT's modular editorial grid.

**Anti-references** — explicit AI-slop bans for this project:
- Purple/cyan/neon gradients of any kind
- Generic Tailwind cards with left-border-accent stripes
- Glassmorphism / blur-everywhere chrome
- Decorative SVG illustrations of kids / robots / trophies
- Stock-photo "diverse team" layouts
- Hero metric template (big number + small label + sparkline)
- Emoji icons above headings

**Theme**:
- Homepage = light (`--bone: #FAF8F4`) with navy and red typography. Reads like a printed editorial.
- Partners deck = full **dark cinematic** (`--navy-deep: #061434`) with red ink + radial glow accents. Reads like a movie title sequence.

**Palette (committed, do not invent new colors):**
- `--navy: #0A1F44` — primary ink / dark surfaces
- `--navy-deep: #061434` — deck background
- `--red: #C8102E` — Pantone 186, UK red, the only chromatic accent
- `--bone: #FAF8F4` — homepage background
- `--accent: #1B4FE5` — team-blue, used sparingly for KAS / partner-product callouts
- Greys are tinted toward navy (`--ink-muted: #6b7280`)

**Type system (committed):**
- Display: **Space Grotesk** 500/600/700 (Google Fonts)
- Body: **Inter** 400/500/600/700
- Mono: **JetBrains Mono** 500/600/700 — used for eyebrows, slide tags, T-minus badge, kit-slider labels

These are *not* on the impeccable reflex-fonts-to-reject list (Inter is, but it's the body face only and was committed when this site was built — I'll change it only if asked specifically). Display face Space Grotesk is project-defining and stays.

### Design Principles

1. **Honest over polished.** The site is a memoir, not marketing copy. The "we have not signed a sponsor yet" line is the brand voice. Anything that reads as marketing-speak gets cut.
2. **Hierarchy through size + space, not decoration.** No left-border accent stripes anywhere (ban already enforced). No decorative icons above headings. No gradient text. Headlines do the work.
3. **One signature moment per chapter.** Kit slider on the hero, the 540+ hero stat on deck slide 5, the world-map line-draw on deck slide 8. Each chapter earns *one* craft moment. No more.
4. **First-person voice everywhere it can be.** From "Hi. We're nine kids" through to the sign-off. The parents' voice on the deck is clearly framed as "parents writing, team quoted."
5. **20-day urgency without gimmicks.** The T-20 badge (red pill, white pulsing dot) is the only countdown device. No JavaScript countdown timers, no modal popups, no fake scarcity copy. Real urgency, real number, no theatre.

---

## Locked stack

- Plain HTML/CSS/JS, no framework. Two files: `index.html` (memoir) and `partners.html` (pitch deck).
- Hosted on GitHub Pages from `main` branch root.
- Booking link: `https://links.vibe-site.com/widget/booking/ccqEDkAYzZT5WnDZMoAg`.
- Deployed via push to `main`. ~30–60s rebuild.
