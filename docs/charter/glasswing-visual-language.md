# The Glasswing visual language

**Status: in force, 20 August 2026.** The visual system for this site, formalised from Anthropic's
Project Glasswing page so that Enkefalos can be built to match rather than to approximate. Companion
to [`public-copy-style.md`](public-copy-style.md), which governs the words.

**Source.** `https://www.anthropic.com/glasswing`, fetched 20 August 2026. Figures below were read
from the page's served HTML and from its five stylesheet chunks under
`/_next/static/chunks/`, not sampled by eye from a screenshot.

**Method, and its limit, stated once and not repeated.** Everything here is measured from source
rather than from rendered pixels, which makes the values exact and makes coverage claims weaker than
the parent study's: where that document could say a colour filled 2.29% of a viewport, this one
can say only that a colour is declared and never referenced. Where a claim rests on absence, the
claim says so. Nothing below is inferred from a screenshot.

**Three caveats.**

The page sets its type in **anthropicSerif** and **anthropicSans**, which are proprietary and cannot
be licensed. §4.5 names the substitutes this site uses. Judge size, weight, case and rhythm from this
document; never letterform.

The page is built on a component framework and a headless CMS, so a handful of its measurements are a
tool's habit rather than a considered decision. §11 says which.

Three components are present in the page's stylesheet and **not rendered in the HTML as served**: a
scroll-driven quote, a bordered card, and the table of contents, which is built by script into an
empty container. They are documented in §6 because they are part of the system, and each is marked.

---

## 1. The six rules that carry the look

**If only six things survive from this document, these are they.**

1. **One column, interrupted.** The page is a single 633px reading column, and every other element is
   an interruption that escapes it. There is no second column of content anywhere.
2. **Monochrome, and it is a choice.** The stylesheet declares nine accent colours. The page paints
   none of them. Everything on screen is ivory, slate, or a border between them.
3. **Nothing is a box unless it is a control or a picture.** No cards behind text, no filled panels,
   no shadows anywhere. Separation is a 1px rule, or it is space.
4. **The heading is brighter than the body.** Headings sit at `#faf9f5`, body copy one step down at
   `#e8e6dc`. That single step is what makes a dark page readable rather than glaring.
5. **Serif reads, sans structures.** Prose, quotes and the hero are serif. Section titles, labels,
   figures, buttons and footnotes are sans. The two never swap roles.
6. **One easing curve, everywhere.** `cubic-bezier(.22, 1, .36, 1)`, on every transition that
   matters. A single curve is why motion on the page reads as one hand.

---

## 2. Colour

### 2.1 The two themes

The page runs on a theme attribute, `data-theme`, with two values that are exact inverses of each
other. Glasswing uses `slate`. Both are given because the mechanism is the useful part: **every
component references a role, never a value**, so a subtree flips theme by changing one attribute.

| Role                          | `slate` (dark, used by Glasswing) | `ivory` (light) |
| ----------------------------- | --------------------------------- | --------------- |
| `--foreground-primary`        | `#faf9f5`                         | `#141413`       |
| `--foreground-secondary`      | `#b0aea5`                         | `#30302e`       |
| `--foreground-tertiary`       | `#87867f`                         | `#5e5d59`       |
| `--background-primary`        | `#141413`                         | `#faf9f5`       |
| `--background-secondary`      | `#1f1e1d`                         | `#f0eee6`       |
| `--background-tertiary`       | `#30302e`                         | `#e8e6dc`       |
| `--border-strong`             | `#faf9f5`                         | `#141413`       |
| `--border-subtle`             | `#5e5d59`                         | `#d1cfc5`       |
| `--border-faint`              | `#1f1e1d`                         | `#f0eee6`       |
| `--button-primary-background` | `#faf9f5`                         | `#141413`       |
| `--button-primary-foreground` | `#141413`                         | `#faf9f5`       |
| `--button-primary-background-hover` | `#f0eee6`                   | `#3d3d3a`       |
| `--button-secondary-stroke`   | `#faf9f5`                         | `#141413`       |
| `--button-secondary-background-hover` | `#faf9f5`                 | `#141413`       |
| `--button-secondary-foreground-hover` | `#141413`                 | `#faf9f5`       |

**Note what is not inverted.** `--background-clay` is `#d97757` and `--background-oat` is `#e3dacc`
in both themes. An accent that flips is an accent that has to be redesigned twice; these are fixed
points the themes are built around.

### 2.2 The one scale

Everything above is drawn from a single twenty-one step neutral ramp, warm at both ends, and the
whole page is made of it.

| Step | Value     | Step | Value     | Step | Value     |
| ---- | --------- | ---- | --------- | ---- | --------- |
| 000  | `#ffffff` | 350  | `#c2c0b6` | 700  | `#3d3d3a` |
| 050  | `#faf9f5` | 400  | `#b0aea5` | 750  | `#30302e` |
| 100  | `#f5f4ed` | 450  | `#9c9a92` | 800  | `#262624` |
| 150  | `#f0eee6` | 500  | `#87867f` | 850  | `#1f1e1d` |
| 200  | `#e8e6dc` | 550  | `#73726c` | 900  | `#1a1918` |
| 250  | `#dedcd1` | 600  | `#5e5d59` | 950  | `#141413` |
| 300  | `#d1cfc5` | 650  | `#4d4c48` | 1000 | `#0f0f0e` |

**Neither end is neutral grey.** `#faf9f5` is a warm off-white and `#141413` a warm near-black. Pure
white and pure black exist on the scale, at 000 and beyond 1000, and the page uses neither for a
surface. This is the cheapest single thing to copy and the easiest to lose: a page built on `#ffffff`
and `#000000` reads as a wireframe of this one.

### 2.3 The most important finding in this document

**The stylesheet declares nine accent colours and the page paints none of them.**

`--color-clay #d97757`, `--color-oat #e3dacc`, `--color-cactus #bcd1ca`, `--color-sky #6a9bcc`,
`--color-olive #788c5d`, `--color-fig #c46686`, `--color-coral #ebcece`, `--color-heather #cbcadb`,
`--color-error #bf4d43`. A search of the served HTML for each of these values returns zero
occurrences. The only non-neutral hex values anywhere in the document are inside the CMS's image
palette metadata, which is data about photographs and is painted nowhere.

**What follows for anyone building from the token file rather than the page.** Reading the
declarations produces a warm, multi-accent palette. The page is not that. It is ivory on slate and
nothing else, and its restraint is the design. An accent introduced here should be introduced as a
decision with a reason, not as the natural consequence of a variable existing.

### 2.4 The two-step text rule

**Headings are `#faf9f5`. Body copy is `#e8e6dc`.** Not a token, not `--foreground-secondary`, but a
literal one step down the scale, applied to paragraphs, list items, bar labels, footnotes, card
descriptions and appendix text alike.

**And links invert it.** A link inside body copy is set to `--foreground-primary` and underlined, so
it is the brightest thing in the paragraph.

_Why this matters more on dark than on light._ On a light page, body text at full contrast is
comfortable. On a dark page it glares, and the usual fix is to dim everything, which flattens the
hierarchy. Glasswing dims the body by one step and holds the headings and links at full, so the
hierarchy runs the other way from a light page and stays legible either way.

### 2.5 Contrast, computed, and the two real defects

**Every ratio below was calculated from the hex values, not judged by eye.**

| Pairing                                        | Ratio    | Verdict                                     |
| ---------------------------------------------- | -------- | ------------------------------------------- |
| Heading `#faf9f5` on `#141413`                  | 17.50:1  | AAA                                         |
| Body `#e8e6dc` on `#141413`                     | 14.73:1  | AAA                                         |
| Secondary `#b0aea5` on `#141413`                | 8.29:1   | AAA                                         |
| Tertiary `#87867f` on `#141413`                 | 5.04:1   | AA for body, short of AAA                   |
| **Border `#5e5d59` on `#141413`**               | **2.80:1** | **Fails AA for a control boundary (3:1)** |
| Ivory tertiary `#87867f` on `#faf9f5`           | 3.47:1   | **Fails AA for body text (4.5:1)**          |
| Ivory border `#d1cfc5` on `#faf9f5`             | 1.48:1   | **Fails AA for a control boundary (3:1)**   |

**The two-step text rule is comfortably safe.** Headings, body and secondary text all clear AAA on
the dark theme. The tertiary is where the margin runs out, which is why the page uses it only for
inactive table-of-contents entries and slide counters and never for prose. **Copy the restriction
along with the colour.**

**Defect one: `--border-subtle` is the only visible boundary on several controls, and it is 2.80:1.**
The arrow buttons and the inactive tabs are filled with `--background-secondary #1f1e1d`, which is
1.11:1 against the page and therefore invisible, so the 1px border is doing all the work of saying
where the control is. WCAG 2.2 requires 3:1 for the visual boundary of a user interface component.
It misses. On the ivory theme the equivalent pairing is 1.48:1 and misses by much more.

**Defect two: on the ivory theme, `--foreground-tertiary` is 3.47:1 and fails AA for body text.** It
is safe on the slate theme at 5.04:1, so a component that is compliant in dark mode stops being
compliant when the theme attribute flips. **This is the specific hazard of a symmetric theme
mechanism: symmetry in the token names is not symmetry in the contrast.**

**What this site does about both.** [`engineering-practices.md`](engineering-practices.md) §8.1 AC3
makes AA a floor, so neither defect is inherited. The control border is darkened until it reaches
3:1 against the surface behind it, and the ivory tertiary is stepped to `--slate-600` (6.26:1). §10's
token file makes both changes and marks them.

---

### 2.6 The Enkefalos accent — a deliberate divergence

**§2.3 is the source's finding, not this site's rule.** Glasswing declares nine accents and paints
none. Enkefalos paints exactly one, and painting it is the point: the principal has set ivory and
Enkefalos green as the two colours of the site.

**Enkefalos green is `#004235`.** Read from `../../brand/logo-lockup.png`, where it is the only
colour present, and confirmed against `../../signature/strip-green.png`, where it is 92% of the
pixels. Not sampled by eye.

**The measured finding that decides how it may be used.**

| Pairing                              | Ratio    |
| ------------------------------------ | -------- |
| Green on ivory `#faf9f5`             | 10.89:1  |
| Green on ivory-150 `#f0eee6`         | 9.87:1   |
| Ivory `#faf9f5` on green             | 10.89:1  |
| Ivory-200 `#e8e6dc` on green         | 9.17:1   |
| `#d1cfc5` on green                   | 7.34:1   |
| **Green against body neutral `#3d3d3a`** | **1.05:1** |

**The first five say green is an excellent ink** and that an inverted green band needs no adjustment
at all, because the relationship is symmetric at 10.89:1 in both directions. The two-step text rule
survives inversion: ivory heading, ivory-200 body, `#d1cfc5` for quiet type.

**The last one is the rule.** `#004235` and `#3d3d3a` differ by 5% in luminance. At body size they
are indistinguishable, so green body copy does not read as green, it reads as black that has gone
wrong in printing. **Green reads as green only at scale.**

| Green is                                                     | Green is not                       |
| ------------------------------------------------------------ | ---------------------------------- |
| Display and heading type, roughly 20px and above              | Body copy, at any size             |
| The logo and the mark                                         | Small print, captions, legal lines |
| The `3px` accent rule                                         | Link colour inside a paragraph     |
| The ground of one full-bleed band, with ivory type on it      | A background for large areas       |

**Green is ink, not area, with two deliberate exceptions.** The parent project's visual language
established that on the firm it studied, the dominant colour filled under 2.3% of any screen and was
almost entirely letterforms and small solid rectangles. That discipline still governs the ink.

**The count went from one band to two on 21 August 2026**, after a site the principal pointed at
demonstrated the opposite approach working: a dark ground used as a primary surface, alternating
with a pale one, rather than saved for a single moment. Two bands of green in a nine-band page is
still restraint; it is the difference between a page with an accent and a page with a rhythm. **The
rule that survives is that green as area is counted and argued for, not reached for** — a third band
needs its own reason, and "it looked good on the second one" is not one.

### 2.7 The optical-size axis is 60% of the file

**Measured on 21 August 2026, and worth carrying to any project that reaches for a variable serif.**
Source Serif 4's latin subset at `wght 200..400` with the `opsz` axis intact is 77 KB. The same
subset with `opsz` pinned is 31 KB. **The axis alone costs 46 KB**, which is more than the rest of
the font.

**That is a bad trade for a page with two type sizes, and a good one for a page with twenty.** The
resolution here was to pin the axis twice and ship two cuts, 33 KB and 18 KB, which keeps the effect
where it is visible — a display face with finer joins at 84px, a text face with sturdier ones at
17px — and costs 51 KB rather than 77 KB. Discrete optical cuts are also how the property worked for
four centuries before an axis existed.

**The general rule: price a variable axis before shipping it.** An axis is not free, its cost is not
proportional to how much of it you use, and the default assumption that a variable font is smaller
than the static instances it replaces is only true past some number of instances.

**One derived step, reasoned rather than measured.** `--green-600 #0a5646`, 8.19:1 on ivory, for hover
and pressed states, since `#004235` is too dark to darken usefully. It is a starting position to be
checked in use.

---

## 3. Shape and surface

**Zero shadows. The Glasswing stylesheet contains no `box-shadow` declaration of any kind.** Depth is
not a device this system uses.

**Radii are small and specific, and they are not on a scale anyone would guess.**

| Element                          | Radius     |
| -------------------------------- | ---------- |
| Small button: quote CTA, card CTA | `6px`      |
| Primary button, arrow button      | `8px`      |
| Bar, narrow viewport              | `8px`      |
| Bar, wide viewport                | `9px`      |
| Card                              | `12px`     |
| Video frame, play button          | `16px`     |
| Tab                               | `200px` (pill) |
| Table-of-contents dot             | none: an 8px square |

**The 8px-to-9px bar is the tell.** The bar grows from 36px tall to 51px at 992px and its radius
grows with it, so the corner keeps the same visual proportion at both sizes. Nothing else on the page
changes radius responsively.

**The dot is square.** An 8px block with no radius, used as the active marker in the table of
contents. In a system this rounded it reads as deliberate, and it is the only geometric mark on the
page.

**Borders are always 1px, and always `--border-subtle`** (`#5e5d59` on slate), with one exception:
the appendix is bounded top and bottom by `--border-faint` (`#1f1e1d`), which is nearly the
background. A separator that is barely visible is doing structural work, not decorative work.

---

## 4. Typography

### 4.1 Two families, two jobs

**Serif reads. Sans structures.** The division is absolute on this page and there is no third
family: `anthropicMono` is declared in the font stack and appears nowhere in the document.

| Serif                                       | Sans                                                       |
| ------------------------------------------- | ---------------------------------------------------------- |
| Hero title and subtitle                     | Section titles                                             |
| Body paragraphs and lists                   | Buttons, tabs, counters, arrows                            |
| The standfirst                              | Bar labels, bar values, chart labels, footnotes            |
| Pull quotes and the quote carousel          | Speaker names and titles                                   |
| Card descriptions                           | Card titles and captions, appendix title and appendix body |

**Read the split as prose against apparatus.** Anything a person reads in sentences is serif. Anything
that labels, measures, navigates or is clicked is sans. The card is the clearest case: its title is
sans and its description, one line below, is serif.

### 4.2 The scale, as measured

Every size below is the literal declared value at each breakpoint, mobile first.

| Role                    | Family | Weight | Base           | ≥992px         | ≥1024px        | Notes                        |
| ----------------------- | ------ | ------ | -------------- | -------------- | -------------- | ---------------------------- |
| Hero title              | serif  | 400    | 48px / 1.0     | 64px           | 80px           | centred, line-height 1       |
| Hero subtitle           | serif  | 400    | 17px / 26px    | 20px / 30px    |                | `#e8e6dc`, max-width 252px   |
| Section title           | sans   | 600    | 30px / 38px    |                | 36px / 44px    | uppercase, tracking `.03em`  |
| Standfirst              | serif  | 400    | 19px / 28px    | 22px / 32px    |                | `--foreground-primary`       |
| Body paragraph          | serif  | 400    | 17px / 26px    |                |                | `#e8e6dc`, margin `.85em 0`  |
| Pull quote (carousel)   | serif  | 400    | 17px / 26px    | 20px / 30px    | 22px / 32px    | `#faf9f5`                    |
| Scroll quote            | serif  | 400    | 24px / 32px    | 30px / 38px    | 36px / 44px    | 40px at 1100, 48px at 1200   |
| Speaker name            | sans   | 600    | 20px / 30px    |                |                |                              |
| Speaker title           | sans   | 400    | 13px / 20px    |                |                | tracking `.13px`, secondary  |
| Bar value               | sans   | 600    | 18px           | 28px           |                |                              |
| Chart title             | sans   | 600    | 20px / 30px    |                |                |                              |
| Footnote, appendix body | sans   | 400    | 13px / 20px    |                |                | tracking `.13px`, `#e8e6dc`  |
| Appendix title          | sans   | 600    | 24px / 32px    |                | 36px / 44px    | left-aligned at ≥992px       |
| Tab, counter, TOC label | sans   | 400    | 11px / 16.5px  |                |                | tracking `.2px`              |
| TOC entry               | sans   | 400    | 13px / 20px    |                |                | tracking `.13px`             |

**Three things this table says that a screenshot would not.**

**Weight is binary.** 400 for everything that is read, 600 for everything that labels. There is no
500 and no 700 anywhere on the page.

**Tracking is only ever added, only ever at small sizes, and always in absolute pixels.** `.13px` at
13px, `.2px` at 11px, and explicit `letter-spacing: 0` on the hero. The one exception is the section
title at `.03em`, which is there because it is uppercase and uppercase needs it. Large type is never
tracked in.

**Line height falls as size rises.** 26px on 17px body copy is 1.53; 44px on 36px section titles is
1.22; the 80px hero title is exactly 1.0. The ratio is a function of size, not a constant.

### 4.3 Numerals

Every text rule on the page carries `font-feature-settings: "pnum" on, "lnum" on, "liga" on`:
proportional lining figures, with ligatures. Not tabular. **This is right for a page whose figures
sit in prose and in single-value labels, and it would be wrong for a page with a column of figures to
align.** If this site ever sets a numeric table, that table opts into `tnum` locally.

### 4.4 The uppercase label, done correctly

**Where the capitals live changed on 21 August 2026.** They were on the section heading; they are now
on a monospaced eyebrow above it, and the heading beneath is a sentence set in a light serif. The
rule that capitals are applied by the stylesheet rather than typed is unchanged and still binds. What
changed is which element carries them, and the reason is that a heading in capitals is announced
where a heading in a sentence is read.

**The eyebrow is also where the third type role went.** A monospaced face carrying every label,
figure, counter and legal line is most of why a page reads as built by people who write software.
It is the cheapest signal of that kind available and it costs 24 KB.

#### The original treatment, which the eyebrow inherits

The section title is stored in sentence case and set in capitals by the stylesheet:
`text-transform: uppercase`, `letter-spacing: .03em`, `text-wrap: balance`, `text-align: center`,
`max-width: 615px`, centred in the reading column.

_Why this is the correct way round._ The text remains searchable, remains correct when a reader
copies it, and is read as words rather than as letters by a screen reader.
[`public-copy-style.md`](public-copy-style.md) §3 states the same rule from the copy side, and the
two documents agree without either having to yield.

**And the first one is hidden.** `sectionTitle:first-child` is set to `height: 0; font-size: 0;
line-height: 0; overflow: hidden`. The opening section carries a real `<h2>` that never renders,
because the hero has already titled the page. It exists for the document outline and for the table of
contents to point at.

### 4.5 Substitutes for this site

`anthropicSerif` and `anthropicSans` cannot be licensed. **This site uses the closest freely
licensed pairing that holds the same proportions, self-hosted under
[`engineering-practices.md`](engineering-practices.md) §5 D3 so that no request leaves the page to a
third party.**

- **Serif, for reading:** Source Serif 4, with Charter and Georgia behind it. A transitional serif
  with a large x-height and low stroke contrast, which is what keeps 17px body copy readable on a
  dark background where a Didone would sparkle and tire.
- **Sans, for structure:** Inter, with system-ui behind it. A neutral grotesque that holds up at
  11px with tracking added, which is the size the labels in §4.2 actually need to survive.

**This pairing is a starting position, not a measurement.** It has not been set beside the original
and compared. If the principal wants the match closer, that is a fresh piece of work, and this
section is amended with what it finds rather than being quietly departed from.

---

## 5. Space, measure and the grid

### 5.1 The spacing scale

`4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128` px. Everything on the page is one of
these. There is no 20, no 36 and no 60.

### 5.2 The page frame

- **Outer container:** `max-width: 1400px`, centred.
- **Gutters:** `32px` base, `48px` from 992px, `80px` from 1024px.
- **Hero inner:** `max-width: 1300px`, so the hero sits 100px narrower than everything else.

### 5.3 The reading column, and the asymmetry nobody expects

**The reading column is 633px wide.** At 17px serif that is roughly 72 characters, which is the
measure the whole page is built to hold.

**On a wide viewport it is not centred.** From 1024px the content wrapper takes
`padding: 0 80px 0 480px`, so the column sits hard against a 480px left margin. The table of contents
floats absolutely inside that margin at `left: 68px`, `width: 280px`, and the remaining space is air.

**This is the single most distinctive structural decision on the page**, and it is worth
understanding before copying. A centred column with a floating sidebar makes the sidebar look
detached. An off-centre column with the sidebar inside its own margin makes the two read as one
object with a wide left rail. The cost is that on a very wide screen the composition sits left of
centre, deliberately.

**Below 1024px the asymmetry disappears entirely:** the column returns to `margin: 0 auto` inside
symmetric gutters, and the table of contents is `display: none`.

### 5.4 Vertical rhythm

| What                                       | Base   | ≥992px | ≥1024px |
| ------------------------------------------ | ------ | ------ | ------- |
| Content column padding, top and bottom     | 64px   | 96px   | 128px   |
| Section title padding-top                  | 48px   |        | 128px   |
| Section title padding-top, after an illustration | 24px |    |         |
| Standfirst margin-bottom                   | 32px   |        |         |
| Hero inner padding, top and bottom         | 0      | 96px   | 128px   |
| Interruption block padding, top and bottom | 64px   |        |         |
| Appendix inner padding                     | 64px top, 128px bottom | 95px top, 128px bottom | |

**Paragraph spacing is the one relative value on the page:** `margin: .85em 0`, so it scales with the
type rather than with the grid. At 17px that is 14.45px, which is not on the spacing scale, and that
is the point — prose spacing belongs to the prose.

---

## 6. Element organisation

**The page is a spine with interruptions.** This is the part worth taking wholesale, independently of
any of the colours or the type.

### 6.1 The sequence

1. **Site header.** Fixed navigation, themed dark to match the page.
2. **Hero.** Full-bleed. Title, one-line subtitle, one button, and a video beside it.
3. **Logo wall.** Immediately after the hero, before any prose.
4. **The spine.** One reading column, with a sticky table of contents in the left margin.
5. **Interruptions.** Between blocks of prose, elements that escape the column: a wide video, a chart
   carousel, a quote carousel.
6. **Appendix.** Rule-bounded, two columns, small sans type, numbered.
7. **Site footer.** Multi-column link lists.

**What the sequence does.** It states the thing, shows who is behind it, argues it at length in one
narrow column, interrupts that argument three times with evidence, and puts every citation at the
bottom in a smaller voice. The reader can stop after the hero, after the logo wall, or anywhere in the
spine, and what they have read is complete at that point.

### 6.2 The rules that hold it together

**One column, and everything else escapes it.** Prose is 633px. Charts, quotes, videos and logo walls
break out to the full 1400px container. There is never a second column of prose, and prose never
wraps around an element.

**Section titles are centred; everything else in the column is not.** The uppercase title is centred
at `max-width: 615px`, then the standfirst and the body run left-aligned at the full 633px. The
centred title is what marks a new section; the left edge is what makes the prose readable.

**A section may be introduced by a small illustration.** A 90px square, 125px from 1024px, centred
above the title with `padding-top: 48px`, and it reduces the title's own `padding-top` from 128px to
24px so the pair reads as one unit rather than two.

**Evidence goes in an interruption, never in the prose.** No inline chart, no inline table, no image
floated beside a paragraph. The argument runs uninterrupted at 633px, and the evidence arrives as a
full-width object between paragraphs.

**Citations are deferred, not inlined.** Superscript markers in the body at `font-size: .6em;
line-height: 0`, and the substance in the appendix.

### 6.3 The components

**Hero.** Column on narrow, row from 992px with a 64px gap. Text block centred within itself; asset
beside it at `height: 550px`, `max-width: 464px`, `object-fit: contain`. The subtitle is capped at
`max-width: 252px`, which forces it to break across two or three short lines under a very large
title. **The button is `display: none` below 992px** and appears only on desktop.

**Logo wall.** A grid, `2` columns base, `3` from 1100px, `4` from 1300px. Gaps `32px 18px`, then
`32px`, then `64px`. Logos `object-fit: contain`, height `34 → 48 → 48 → 52px`, `max-width
120 → 160 → 200px`. Each cell reveals independently: `opacity 0 → 1` and `translateY(12px) → 0` over
`.5s ease-out`.

**Table of contents.** `position: sticky; top: 10rem`, `display: none` below 1024px. A label at 11px,
then entries at 13px in `--foreground-tertiary`, each with an 8px square dot at `opacity: 0;
transform: scale(.5)` that becomes `opacity: 1; scale(1)` when active while the entry's text goes to
`--foreground-primary`. The whole sidebar fades out via `[data-hidden="true"]`.
**Built by script:** the served HTML contains an empty container.

**Wide video.** `aspect-ratio: 16/9`, frame radius `16px`, inside the 1400px container at the normal
gutters. A centred play button, `56px` square growing to `84px`, radius `16px`, background `#262624`,
border `1px solid #3d3d3a`. Caption below in sans 13px, centred, `--foreground-secondary`.

**Bar graph carousel.** The most carefully built object on the page.

- Header row: a sans 600 20px title, and a set of pill tabs on the right. Tabs are 11px, `4px 12px`
  padding, `border-radius: 200px`, `1px` border in `--border-subtle`, text in
  `--foreground-secondary`; the active tab moves both border and text to `--foreground-primary`.
  **Nothing fills.**
- Slides occupy one grid cell each and cross-fade over `.3s`; the stage animates its own height over
  `.4s` so the page does not jump between tabs of different lengths.
- A slide is `width: 85%` of the column, so the bars never reach the right edge.
- Each bar row: a label at a fixed left width, then the bar, then the value. Row gap `16px`, `32px`
  from 992px.
- **The subject bar is solid `#faf9f5` with its value set inside it in `#141413`. The comparison bar
  is a crosshatch** — `repeating-linear-gradient(-45deg, transparent, transparent 4px,
  currentColor 4px, currentColor 5px)` with a 1px border — **and its value sits outside, in
  `--foreground-primary`.**
- Bars animate width over `.6s cubic-bezier(.22, 1, .36, 1)`.
- Footnotes hang below a `1px` top rule with `24px` above and below.

**The crosshatch is the single best idea on the page.** It distinguishes two series without a second
colour, it survives greyscale printing, it does not rely on colour vision, and it makes which series
is the subject unambiguous rather than conventional. It is the mechanism by which rule 2 of §1 stays
affordable.

**Quote carousel.** Logo top-left at 48px tall, pagination top-right: a counter in 11px sans with the
current index in `--foreground-primary` and the rest in `--foreground-tertiary`, and two 28px arrow
buttons with `border-radius: 8px`, a subtle border, and `opacity: .4` when disabled. Below, the quote
in 22px serif with **hanging punctuation** (`text-indent: -.45em`, so the opening quote mark sits
outside the measure and the first character aligns with the paragraph edge). Then a bottom row:
speaker name in sans 600 20px, title in sans 13px secondary, and an outline "Read announcement"
button on the right. Slides enter from `±24px` over `.8s`.

**Card.** A two-part object: a header with a 1px border and `border-radius: 12px 12px 0 0`, and a body
with a 1px border and `0 0 12px 12px`, joined by `margin-bottom: -1px` so the two borders collapse
into one shared line. Sans 600 title and a sans 13px caption in the header; serif description and a
small filled button in the body. **Present in the stylesheet, not rendered on the page as served.**

**Scroll quote.** A `300vh` container with a `100vh` sticky child, holding a quote that rises to 48px
at 1200px. Each sentence starts at `color: --foreground-secondary`, `opacity: 0`, `filter: blur(4px)`
and resolves to full opacity, no blur, and `--foreground-primary` as it is reached, over `.6s`.
**Below 992px the effect is not applied at all** and the quote is simply a static block. **Present in
the stylesheet, not rendered on the page as served.**

**Appendix.** Bounded top and bottom by a `1px --border-faint` rule. A `274px / 1fr` grid with a
`157px` gap from 992px, stacked below it. The word APPENDIX in sans 600 36px on the left; a numbered
list on the right at `max-width: 633px`, in sans 13px `#e8e6dc`, with underlined links in
`--foreground-primary`.

---

## 7. Motion

**One curve.** `cubic-bezier(.22, 1, .36, 1)` — a fast start and a long settle — on the carousel slide
transform, the bar width, and the scroll quote's opacity. Everything else uses the browser default or
`ease-out`. A single signature curve is the reason motion on the page reads as one hand rather than
as several components each configured by a different person.

**Durations, as measured.**

| What                            | Duration        |
| ------------------------------- | --------------- |
| Table-of-contents text colour   | `.2s`           |
| Tab border and colour           | `.2s`           |
| Table-of-contents dot           | `.25s`          |
| Table-of-contents sidebar fade  | `.3s`           |
| Chart slide cross-fade          | `.3s`           |
| Chart stage height              | `.4s`           |
| Quote logo cross-fade           | `.4s`           |
| Logo cell reveal                | `.5s ease-out`  |
| Scroll quote sentence           | `.6s`           |
| Bar width                       | `.6s`           |
| Quote slide opacity             | `.7s`           |
| Quote slide transform           | `.8s`           |

**Three principles behind that table.**

**Motion scales with distance.** A colour change is `.2s`; a bar travelling most of the column is
`.6s`; a slide travelling 24px while fading is `.8s`, because the fade is what needs the time.

**Nothing moves far.** `12px` on a logo reveal, `24px` on a carousel slide. Every entrance is a
settle, not an arrival.

**Opacity and transform, and almost nothing else.** The two properties the compositor can animate
without laying the page out again. The exceptions are the chart stage's height, which is animated so
the page does not jump, and the scroll quote's blur.

**What is missing, and must not be.** Nothing in the stylesheet honours `prefers-reduced-motion`.
This site does — [`engineering-practices.md`](engineering-practices.md) §8.1 AC5 makes it a floor —
and this is the one place where copying the reference would be a defect.

---

## 8. Responsive behaviour

**Mobile first, `min-width` only, with one exception.** Six breakpoints, and each does a specific
job rather than describing a class of device.

| Breakpoint | What changes there                                                                  |
| ---------- | ----------------------------------------------------------------------------------- |
| `680px`    | Hero asset narrows to 68%; logo wall images step up to 48px                          |
| `992px`    | The main desktop break: hero becomes two columns, gutters go to 48px, the hero button appears, most type steps up |
| `1024px`   | Gutters go to 80px, the reading column goes off-centre, the table of contents appears, section titles reach 36px |
| `1100px`   | Logo wall goes to three columns; scroll quote reaches 40px                           |
| `1200px`   | Scroll quote reaches 48px                                                            |
| `1300px`   | Logo wall goes to four columns                                                       |
| `700px` max | The one `max-width` rule on the page: bar labels wrap and shrink to 13px            |

**Read `992` and `1024` as two different decisions.** 992 is where the layout stops being a single
stack. 1024 is where there is enough room for a left rail. They are 32px apart and they are not
interchangeable.

**The four `min-width` rules above 1024px each move one thing.** No breakpoint on this page changes
more than it has to, and that is why the page has no intermediate width that looks broken.

---

## 9. What Enkefalos takes from this

**Take wholesale.**

The **single reading column with interruptions** (§6). The **spine sequence** (§6.1). The
**monochrome discipline** and the deliberate absence of accents (§2.3). The **two-step text rule**,
headings brighter than body (§2.4). The **serif reads, sans structures** division (§4.1). The
**binary weight**, 400 and 600 and nothing between (§4.2). **Tracking only at small sizes** (§4.2).
The **uppercase-by-stylesheet section title** (§4.4). **Zero shadows** (§3). The **spacing scale**
(§5.1). The **one easing curve** (§7). **Crosshatch instead of a second colour** wherever two series
must be distinguished (§6.3).

**Take with a decision attached.**

The **off-centre reading column** (§5.3) is striking and it commits the whole page to a left rail
that must have something in it. Take it only if there is a table of contents or an equivalent to
live there; an empty 480px margin is not the same design.

**The theme is decided, and it is not Glasswing's.** Enkefalos is **ivory**, the light theme, chosen
by the principal on 20 August 2026 and recorded in [`../OVERVIEW.md`](../OVERVIEW.md) §3. Glasswing
is `slate` because it is announcing a security programme; a front page explaining what a consultancy
is has no such reason to be dark.

**Two consequences, and neither is optional.**

**§2.4's two-step rule inverts.** Headings go to `--slate-950` and body copy one step *down in
lightness* to `--slate-700`, not one step up. On a light page the danger is the opposite of the dark
page's: body text at full contrast is comfortable, and the temptation is to grey it toward
illegibility for the look of it. The step exists to separate heading from body, not to soften the
body.

**Both defects in §2.5 land on us rather than beside us.** The ivory theme is the side where the
tertiary text fails AA at 3.47:1 and the control border reaches only 1.48:1. On the slate theme those
are observations about someone else's page; here they are the exact values this site would ship if it
transcribed the source. §10's token file corrects both, and the corrections are the reason to build
from that block rather than from §2.1's table.

The **radii** (§3). They are the clearest divergence from the parent repository's flat visual
language, and [`public-copy-style.md`](public-copy-style.md) §9 records that this site follows
Glasswing here.

**Do not take.**

The **fonts**, which cannot be licensed. §4.5 names the substitutes.

The **carousels**, unless there is genuinely more evidence than fits on a screen. A carousel hides
content behind an interaction most visitors never perform, and a page with three quotes should show
three quotes.

The **300vh scroll quote**. It is expensive, it does not work below 992px, and it holds the reader in
one place for three screens of scrolling to deliver one sentence.

The **missing `prefers-reduced-motion` support** (§7), which is a defect rather than a feature.

**Build it as tokens, not as values.** Every component on the Glasswing page references a role. That
is what makes the theme flip work, and it is what will make this site's own inevitable divergences
cheap. A hex value written directly into a component is a value that will be wrong the first time
anything changes.

---

## 10. A starting token file

**A transcription of the source into the form [`engineering-practices.md`](engineering-practices.md)
§2 N2 requires, with the corrections §2.5 calls for.** Names describe roles.

**`ivory` is this site's theme** and `slate` is kept because the mechanism is worth having and
because a page that cannot be inverted is a page whose colours are not really tokens. Set
`data-theme="ivory"` on the root element.

```css
:root {
  /* The neutral ramp. Warm at both ends. Nothing else. */
  --slate-000: #ffffff;
  --slate-050: #faf9f5;
  --slate-150: #f0eee6;
  --slate-200: #e8e6dc;
  --slate-300: #d1cfc5;
  --slate-400: #b0aea5;
  --slate-500: #87867f;
  --slate-550: #73726c;
  --slate-600: #5e5d59;
  --slate-700: #3d3d3a;
  --slate-800: #262624;
  --slate-850: #1f1e1d;
  --slate-950: #141413;

  /* The Enkefalos accent. §2.6: ink and rule, never body copy. */
  --green: #004235; /* 10.89:1 on ivory, both directions */
  --green-600: #0a5646; /* 8.19:1 — hover and pressed. Reasoned, not measured. */

  /* Type. Self-hosted, subset, woff2. Practices §5 D3 forbids a third-party host. */
  --font-read: "Source Serif 4", Charter, Georgia, serif;
  --font-structure: Inter, system-ui, sans-serif;
  --weight-read: 400;
  --weight-label: 600;

  /* Space. Nothing off this scale. */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 24px;
  --sp-6: 32px;
  --sp-7: 40px;
  --sp-8: 48px;
  --sp-9: 64px;
  --sp-10: 80px;
  --sp-11: 96px;
  --sp-12: 128px;

  /* Measure. 633px is roughly 72 characters at 17px serif. */
  --measure-read: 633px;
  --measure-title: 615px;
  --container: 1400px;

  /* Shape. No shadows exist in this system. */
  --radius-control-sm: 6px;
  --radius-control: 8px;
  --radius-card: 12px;
  --radius-media: 16px;
  --radius-pill: 200px;

  /* Motion. One curve. */
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-tint: 0.2s;
  --dur-swap: 0.4s;
  --dur-travel: 0.6s;
  --dur-enter: 0.8s;
}

[data-theme="slate"] {
  --foreground-primary: var(--slate-050); /* 17.50:1 */
  --foreground-body: var(--slate-200); /* 14.73:1 — §2.4, one step down from headings */
  --foreground-secondary: var(--slate-400); /* 8.29:1 */
  --foreground-tertiary: var(--slate-500); /* 5.04:1 — labels only, never prose */
  --background-primary: var(--slate-950);
  --background-secondary: var(--slate-850);
  --background-tertiary: var(--slate-700);
  --border-control: var(--slate-550); /* 3.82:1 on page, 3.45:1 on control fill */
  --border-rule: var(--slate-850); /* decorative only; carries no contrast duty */
  --button-primary-background: var(--slate-050);
  --button-primary-foreground: var(--slate-950);
}

[data-theme="ivory"] {
  --foreground-primary: var(--slate-950); /* 17.50:1 */
  --foreground-body: var(--slate-700); /* 10.34:1 */
  --foreground-secondary: var(--slate-600); /* 6.26:1 */
  --foreground-tertiary: var(--slate-600); /* 6.26:1 — see the note below */
  --background-primary: var(--slate-050);
  --background-secondary: var(--slate-150);
  --background-tertiary: var(--slate-200);
  --border-control: var(--slate-500); /* 3.47:1 on page, 3.15:1 on control fill */
  --border-rule: var(--slate-150); /* decorative only; carries no contrast duty */
  --accent: var(--green); /* headings, marks, rules. §2.6 forbids it on body copy. */
  --button-primary-background: var(--green);
  --button-primary-foreground: var(--slate-050);
}

@media (prefers-reduced-motion: reduce) {
  /* The source has no equivalent. Practices §8.1 AC5 makes this a floor. */
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Five departures from the source, every one deliberate and every one marked above.**

**`--foreground-body` is promoted to a named role**, from a literal `#e8e6dc` scattered through the
source's components. §2.4 is a rule, and a rule belongs in a token.

**The single `--border-subtle` is split into `--border-control` and `--border-rule`.** The source
uses one token for two jobs: the visible boundary of a button, which WCAG holds to 3:1, and a
decorative separator, which it holds to nothing. One token cannot satisfy both without over-darkening
every rule on the page. Splitting the role is what makes defect one in §2.5 fixable without changing
how the page looks.

**`--border-control` is darkened one step on each theme**, to `--slate-550` on slate and
`--slate-500` on ivory. These are the minimum steps on the ramp that clear 3:1 against both the page
and the control fill behind them. Going further would make the controls louder than the source
intends, and there is no reason to.

**The ivory theme's tertiary is `--slate-600`, not a mirror of the slate theme's `--slate-500`.** The
mirror is 3.47:1 and fails AA, which is defect two in §2.5. This is the concrete demonstration that a
symmetric token mechanism does not produce symmetric contrast.

**`prefers-reduced-motion` is honoured.** The source has no equivalent anywhere in its stylesheet.

**And one value that is reasoned rather than measured, flagged so it is not mistaken for a
finding.** The ivory theme's `--foreground-body` is `--slate-700`, chosen because one step down from
near-black on a light page is a legible dark grey while a mirror of `--slate-200` would be an
unreadable pale one. The source does not paint body copy in its light theme anywhere this study could
observe, so this is a starting position to be checked in use, not a transcription.

---

## 11. What is a tool's habit rather than a decision

**Stated so that nothing here is copied as though it were considered.**

**The `.13px` and `.2px` tracking values.** These are almost certainly a design tool exporting
`0.01em` and `0.018em` at a specific size and rounding to two decimals. The principle — small type
gets tracking, large type does not — is the real rule. The exact hundredths are not.

**`--headline-1` through `--headline-6` and `--display-xs` through `--display-xxl`.** A generic
type-scale token set that ships with the design system and which the Glasswing components do not use:
every component declares its own literal sizes. Do not build a scale from those tokens and expect
this page.

**The hero subtitle's `max-width: 252px`.** A number chosen to make one specific sentence break in one
specific place at one specific size. It is not a measure and it will be wrong for any other sentence.

**The `157px` appendix gap and the `68px` sidebar offset.** Positions that fall out of a 12-column
grid the rest of the page does not otherwise expose. Reproduce the proportion, not the number.

**The five separate stylesheet chunks.** A bundler's output, not an architecture.
