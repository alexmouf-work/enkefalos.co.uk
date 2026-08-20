# Landing page design plan

**Status: proposed, 20 August 2026. Nothing is built.** This document is the conceptual design of
the single page at `enkefalos.co.uk`, for the principal to approve, amend or reject before any markup
exists.

**Its three sources.** The visual system is
[`charter/glasswing-visual-language.md`](charter/glasswing-visual-language.md), formalised from
Anthropic's Project Glasswing page. The page rhythm is taken from St Paul's School,
`stpaulsschool.org.uk`, at the principal's direction, read from its served HTML and its theme
stylesheet. The voice is [`charter/public-copy-style.md`](charter/public-copy-style.md).

**Every line of copy below is a draft for approval, not a decision.** §7 sets it out in full so it
can be rejected in one place rather than discovered in the markup.

---

## 1. The constraint that decides everything

**There is almost nothing to say, and that is deliberate.** The principal has set the page's whole
content: Enkefalos Solutions offers software solutions and IT contracting services, the page should
not expand much on that, and it is not advertising. No client may be named. No face and no personal
name appears. There are no figures to quote, no case studies and no testimonials. **One photograph
was supplied on 20 August 2026 and is used, once**, as the hero establishing image; it carries no
information and makes no claim, which is why it does not disturb any of the above.

**This is the design problem, not a limitation of it.** St Paul's landing page works because it has a
great deal to show: photographs of pupils, news, events, six profile cards, four statistics and six
quotations. Take its structure and fill it with three sentences and it reads as a page waiting for
content that never arrived.

**So the page is built on space and scale rather than on quantity.** Few bands, each doing one thing,
each given far more vertical room than its content strictly needs, with type large enough that the
emptiness reads as composure. A page with little to say and the confidence to leave room around it is
a different object from a page with little to say and a lot of furniture.

**The corollary, stated so it is not quietly broken later.** Every section that a consultancy site
conventionally carries and this one does not — services grid, client logos, testimonials, team,
statistics, blog, contact form — is absent because it was decided against, not because it is
outstanding. Adding one is a change to this plan, not a completion of it.

---

## 2. What is taken from each source

### 2.1 From Glasswing

**The type system**: serif reads, sans structures; weights 400 and 600 and nothing between; tracking
only at small sizes; section titles stored in sentence case and set in capitals by the stylesheet.

**The restraint**: no shadows anywhere, no cards behind text, separation by rule or by space.

**The two-step text rule**: headings at full strength, body one step down, so hierarchy is carried by
colour as well as by size.

**One easing curve** for every transition: `cubic-bezier(.22, 1, .36, 1)`.

**The reading measure**: 633px for anything set in sentences.

### 2.2 From St Paul's School

**The band rhythm.** The page is a stack of full-bleed horizontal bands, each edge to edge, each its
own object, rather than one continuous scroll of a single column. This is the structural difference
from Glasswing and it is the thing the principal identified as good.

**The proportional gutter.** St Paul's sets its content margins at `10vw` rather than at a fixed
pixel value, which is most of why the page feels wide and unhurried on a large screen. Adopted, with
a `clamp()` so it does not collapse on a phone or run away on an ultrawide display.

**The short accent rule as a recurring mark.** St Paul's uses a `3px` by `40px` gold bar under text
in at least three separate components. It is the cheapest possible device for making unrelated
sections read as one system, and it works because it is exactly the same everywhere. Adopted in
Enkefalos green.

**Tonal alternation between bands.** Adjacent bands sit on slightly different grounds so each reads
as separate without a border.

**The full-bleed banner image.** Adopted for the hero, at §5.2, and used exactly once.

**One inverted band.** St Paul's puts its statistics in white type over a full-bleed photograph.
Enkefalos has no statistics, and §5.2 forbids type over a picture, so the equivalent here is a
full-bleed green band carrying a single statement.

### 2.3 What is taken from neither

**No carousel.** Glasswing has three; they hide content behind an interaction most visitors never
perform, and this page has less content than fits on a screen already.

**A hero photograph, but no image tiles and no type over a picture.** St Paul's leads with a
full-width banner image and follows with four photographic tiles, each carrying a headline in white
over a black scrim at 40% opacity. The banner is adopted; the tiles and the scrim are not. §5.2 says
why, and §5.3 sets out the rule that replaces the scrim.

**No navigation.** St Paul's carries a nine-item menu with multi-level dropdowns because it has
hundreds of pages. This site has one. A navigation bar linking to nothing is furniture, and the
public copy style already forbids interface jewellery.

---

## 3. Colour

### 3.1 The two colours

**Ivory `#faf9f5`** is the ground, from the Glasswing `ivory` theme.

**Enkefalos green `#004235`** is the brand colour, read from the logo file rather than sampled by
eye: it is the single colour of `brand/logo-lockup.png` and 92% of `signature/strip-green.png`.

### 3.2 The measured finding that shapes how green is used

**Green on ivory is 10.89:1, and green against the body-text neutral is 1.05:1.**

The first number says green is an excellent ink: it clears AAA on every ivory surface, and the
inverse — ivory on a green band — is the same 10.89:1, so an inverted band needs no adjustment at
all.

**The second number is the one that matters.** `#004235` and `#3d3d3a`, the neutral this system would
otherwise set body copy in, are within 5% of each other in luminance. At body size they are
indistinguishable: green body copy on this palette does not read as green, it reads as black that has
gone slightly wrong in printing. The colour costs a token and buys nothing.

**Green therefore reads as green only at scale.** The rule that follows:

| Green is                                                                 | Green is not                       |
| ------------------------------------------------------------------------ | ---------------------------------- |
| Display and heading type, roughly 20px and above                          | Body copy, at any size             |
| The logo and the mark                                                     | Small print, captions, legal lines |
| The `3px` accent rule                                                     | Link colour inside a paragraph     |
| The ground of one full-bleed band, with ivory type on it                  | A background for large areas       |
| A hairline separator, at the darkened step in §3.4                        |                                    |

**Green is ink, not area, with one deliberate exception.** This is the parent project's visual language
finding applied here: on that firm's own site the dominant navy fills under 2.3% of any screen and is
almost entirely letterforms and small solid rectangles. The same discipline holds the green. The
exception is the one inverted band in §5.6, which exists because the email signature already has a
green strip and the page should look like it belongs to the same company.

### 3.3 Contrast, computed

| Pairing                              | Ratio    | Verdict                         |
| ------------------------------------ | -------- | ------------------------------- |
| Green `#004235` on ivory `#faf9f5`   | 10.89:1  | AAA                             |
| Green on ivory-150 `#f0eee6`         | 9.87:1   | AAA                             |
| Ivory `#faf9f5` on green             | 10.89:1  | AAA                             |
| Ivory-200 `#e8e6dc` on green         | 9.17:1   | AAA — the inverted band's body  |
| `#d1cfc5` on green                   | 7.34:1   | AAA — the inverted band's quiet type |
| Body `#3d3d3a` on ivory              | 10.34:1  | AAA                             |
| Quiet `#5e5d59` on ivory             | 6.26:1   | AA, short of AAA                |

**Both defects inherited from the Glasswing source are already corrected** in that document's §10
token file, and both were on the light theme. Nothing here reintroduces them.

### 3.4 The steps green needs

Green at `#004235` is too dark to serve as a hairline on ivory without disappearing, and too dark to
show a hover state by going darker. Two derived steps, both to be added to the token file:

- **`--green-600 #0a5646`**, 8.19:1 on ivory. Hover and pressed states, and large type where the full
  green is heavier than the composition wants.
- **A green hairline at 20% over ivory**, for separators that should read as green rather than grey
  without carrying the weight of a rule.

**These two values are reasoned, not measured from anything.** They are a starting position to be
checked in use, and they are marked as such wherever they land.

---

## 4. Type

**As specified in the visual language document §4, with one addition.**

**Serif for reading**: Source Serif 4, self-hosted and subset. Hero title, the statement bands, body
copy.

**Sans for structure**: Inter, self-hosted and subset. Section titles, the three-up labels, the
footer, the legal line.

**The addition is a note about the logo.** The wordmark in `brand/logo-lockup.png` is a heavy slab
serif and is not either of the two faces above. That is correct for a logo, which is a drawing rather
than a font, but it means the masthead sets a third letterform on the page. It should therefore
appear at one size, in one place, and never be matched or echoed by type set in CSS.

**Sizes**, following the visual language document's scale:

| Role                    | Family | Weight | Narrow      | Wide         |
| ----------------------- | ------ | ------ | ----------- | ------------ |
| Hero title              | serif  | 400    | 48px / 1.0  | 80px / 1.0   |
| Band statement          | serif  | 400    | 24px / 34px | 36px / 48px  |
| Section title           | sans   | 600    | 30px / 38px | 36px / 44px  |
| Three-up label          | sans   | 600    | 15px / 24px | 15px / 24px  |
| Body                    | serif  | 400    | 17px / 26px | 17px / 26px  |
| Legal line, footer      | sans   | 400    | 13px / 20px | 13px / 20px  |

---

## 5. The page, band by band

**Six bands**, the first of which has two parts: a photograph and the title beneath it. Each is
full-bleed; each holds its content inside a gutter of
`clamp(24px, 10vw, 160px)`; each is separated from its neighbour by ground tone rather than by a
border.

### 5.1 Masthead

**Ivory. Static, not sticky.** The mark from the logo lockup at the left, at roughly 40px tall, with
`ENKEFALOS SOLUTIONS` set beside it in sans 600 at 15px with capitals applied by the stylesheet.
Nothing on the right.

**No navigation and no button**, per §2.3. A sticky masthead is also rejected: it costs vertical room
on a phone and there is nothing in it worth following the reader down the page.

### 5.2 Hero — the photograph

**Full-bleed, edge to edge, immediately under the masthead.** `aspect-ratio: 2.5 / 1` at wide
viewports easing to `4 / 3` on a phone, with `object-fit: cover` doing the cropping, so the framing
adapts and no crop is baked permanently into a file.

**The image is `assets/hero-sps-*`**, supplied by the principal on 20 August 2026 and stripped of
every metadata segment before it entered the repository. It is a courtyard: pale stone paving, a
glass facade, cherry blossom, a low green hedge. **Its own palette is almost exactly the site's**,
which is why it sits in this design rather than merely on top of it.

**No type sits on it. No scrim, no gradient, no overlay of any kind.** §5.3 carries the title.

**It never fades in, and it is never lazy-loaded.** It is the Largest Contentful Paint: revealing it
on scroll would delay the metric it defines, and `loading="lazy"` on the LCP element is the same
mistake spelled differently. It carries `fetchpriority="high"` and an explicit aspect ratio so it
reserves its space before it arrives.

**`alt=""`, and that is a decision rather than an omission.** The photograph says nothing about what
Enkefalos does; it is establishing texture. Describing it to a screen reader would add a sentence
about paving and blossom to a page whose whole argument is that it says little. **Naming the building
would be worse**: it would imply an association the company does not claim, which is exactly the kind
of unearned suggestion the public copy style exists to prevent. No caption, no credit, no label.

### 5.3 Hero — the title

**Ivory, directly beneath the photograph, generous.**

- A green accent rule, `3px` by `40px`, centred.
- **h1**, serif 400, up to 80px, in green: the company name.
- **A one-line subtitle**, serif, 20px, in the body neutral, at `max-width: 34em`.

**The large mark is dropped from the hero and lives only in the masthead and the footer.** The
photograph now does the establishing work the mark was doing, and two large objects competing at the
top of a page with three sentences on it is exactly the furniture §1 warns against.

**The type never sits over the photograph, and this is a rule rather than a preference for this
image.** The parent project's visual language records it: type lives in the panel beside or beneath
the picture, which is why that design needs no scrims and no shadows. It also removes a whole class
of accessibility failure — a scrim is a contrast ratio that changes with every image swapped behind
it, and this page will never have to check one.

### 5.4 Statement

**Ivory-150 `#f0eee6`, the first tonal step.** One paragraph, serif, 36px at wide viewports, centred,
at `max-width: 20em` so it breaks over three or four lines. Green accent rule, `3px` by `40px`,
centred above it.

**This is the whole of what the company says about itself in prose.** Everything else on the page is a
label, a fact or a legal requirement.

### 5.5 What we do — the three-up

**Ivory.** A section title in sans, uppercase, centred. Below it three equal columns, collapsing to
one on a phone.

Each column, from the top: the green `3px` by `40px` accent rule, a sans 600 label in green with
capitals applied by the stylesheet, and two lines of serif body in the neutral.

**The three columns carry no icons.** An icon set would be three drawings invented to fill space, and
the accent rule already does the work of marking where each column starts.

**This band is where St Paul's four-up tile row is echoed and where its photography is dropped.**

### 5.6 The green band — contact

**Full-bleed `#004235`. The only area use of the brand colour on the page.**

Three elements, centred, in this order:

- The statement, serif at 36px in ivory `#faf9f5`, at `max-width: 24em`.
- A label, `ENQUIRIES`, sans 600 at 12px, tracked `.13em`, in `#d1cfc5`, with capitals applied by
  the stylesheet.
- **The address, as a link**, serif at 28px in ivory, underlined.

**Generous padding, at least 128px top and bottom at wide viewports**, so the band reads as a
deliberate block of colour rather than as a coloured strip around a sentence.

**Why contact lives here rather than in a band of its own.** §3.2 permits green as an area exactly
once, so a second full-bleed band would break the rule that makes the colour work; and an ivory
contact band after the green one would end the page on its quietest note rather than its strongest.
This band was already the terminal beat. Giving it something to do makes it a conclusion rather than
a flourish.

**The link is underlined always, not on hover.** Everything on this band is ivory, so colour cannot
distinguish the link from the text around it, and the accessibility floor forbids colour as the only
carrier of meaning. `:focus-visible` draws a 2px ivory outline at 3px offset, which is the one place
on the page where the focus ring is ivory rather than green.

**Contrast:** ivory `#faf9f5` on green is 10.89:1 and the label at `#d1cfc5` is 7.34:1. Both clear
AAA, so the band needs no adjustment for the link treatment.

**A plain `mailto:`, not an obfuscated one.** Splitting the address across script or encoding it to
defeat harvesters would break the rule that the page works before the script does, and would hide
the one actionable thing on the page from anyone whose script failed. Harvesters defeat obfuscation
anyway; the mail provider's filtering is the layer that actually addresses it.

**No form, and no phone number.** A form is a data-collection surface with a privacy policy behind
it, which the overview §3 rules out. The number is a personal mobile and the principal has excluded
it.

### 5.7 Footer

**Ivory-200 `#e8e6dc`, the darkest ivory step, so the page settles rather than stopping.**

The full logo lockup at small size on the left. On the right, or beneath it on a phone, the legal
line in sans 13px in the quiet neutral. Nothing else.

**The contact address is not repeated here.** It sits immediately above, in the band the reader has
just passed through, set larger than anything the footer could give it. Repeating it in small grey
type directly underneath would make the reader wonder which one to use.

**The legal line is the only place the registered entity is named**, and it is the only text on the
page that must be exact.

---

## 6. Motion

**What the principal asked for**: elements fade in and move up slightly as the page is scrolled. This
is the Glasswing logo-wall reveal, which moves `12px` over `.5s`, with the distance and duration
raised a little because the elements here are larger.

**The specification.**

| Property           | Value                                                |
| ------------------ | ---------------------------------------------------- |
| From               | `opacity: 0; transform: translateY(16px)`             |
| To                 | `opacity: 1; transform: translateY(0)`                |
| Duration           | `.7s`                                                 |
| Easing             | `cubic-bezier(.22, 1, .36, 1)`, the page's only curve |
| Trigger            | `IntersectionObserver`, `rootMargin: 0px 0px -12% 0px` |
| Stagger in a group | `90ms` per item, capped at four items                 |
| Repeat             | Never. Each element reveals once and is unobserved.   |

**Four rules that make it safe**, each of which is a rule from
[`charter/engineering-practices.md`](charter/engineering-practices.md) rather than a preference:

**The hidden state is applied by script, never baked into the HTML.** An inline pre-paint script puts
a class on the root element, and only under that class does anything start invisible. If the script
fails, the page is simply a page with no animation, rather than a blank screen. Practices §1 S2.

**`prefers-reduced-motion: reduce` removes the hidden state entirely**, rather than shortening the
transition. An element that still moves 16px quickly is still an element that moves. Practices §8.1
AC5.

**The hero is excluded**, per §5.2 — both the photograph and the title above the fold.

**Every observer is disconnected once its elements have revealed.** Practices §6 R4.

**Nothing else on the page moves.** No parallax, no scroll-driven scaling, no sticky elements, no
counters that animate upward. One motion idea, applied consistently, is the whole of the page's
behaviour.

---

## 7. Copy — draft, for approval

**Written to the brief: corporate in register, minimal in quantity, vague in substance, naming no
client and no person.** It obeys the public copy style: British English, no em dashes, no
contractions, no exclamation marks, no claims of ease, no journey metaphors, sentence case in the
source with capitals applied by the stylesheet.

**Nothing below is a statement of fact that could be falsified.** Each line describes a service
offered rather than work performed, which is what keeps a deliberately vague page honest. **The
principal should confirm that each is a service they intend to offer**, because that is the one thing
this document cannot check.

### Hero

> **Enkefalos Solutions**
>
> Software solutions and IT contracting services for enterprise organisations.

### Statement

> We design, build and maintain software for enterprise clients, and provide specialist IT
> contracting alongside their own teams.

### What we do

> **SOFTWARE SOLUTIONS**
> Software specified, built and maintained around the requirements of the organisation it serves.
>
> **IT CONTRACTING**
> Specialist capability provided alongside existing teams, for as long as a programme requires it.
>
> **ENTERPRISE DELIVERY**
> Engagements run to the governance, security and reporting standards our clients already work to.

### Green band, and contact

> Enkefalos Solutions works with established organisations on the systems they depend on.
>
> **ENQUIRIES**
>
> hello@enkefalos.co.uk

**No sentence introduces the address.** "For all enquiries, please write to" and its variants add a
line of throat-clearing above a word that already says what it is. The label is the sentence.

### Footer

> Enkefalos Solutions is a trading name of Enkefalos Holdings Ltd. Registered in England and Wales,
> company no. 17301883. London, United Kingdom.

### What is deliberately absent

No "get in touch" heading, because `ENQUIRIES` above the address says the same thing without the
familiarity. No contact form, no phone number, no postal address beyond the registered office in the
legal line. No list of technologies, because naming them dates the page and invites a question the
page does not want to answer. No claim about scale, history, team size or client count.

---

## 8. Assets

### 8.1 Collected

| File                            | Size       | Notes                                                        |
| ------------------------------- | ---------- | ------------------------------------------------------------- |
| `brand/logo-lockup.png`         | 300 × 99   | Transparent, single colour `#004235`. Displayed at 150 × 50.  |
| `signature/strip-green.png`     | 1200 × 160 | Displayed at 600 × 80.                                        |
| `signature/strip-light.png`     | 1200 × 160 | Displayed at 600 × 80.                                        |

**All three are already at twice their display size**, which is what
[`charter/engineering-practices.md`](charter/engineering-practices.md) §7 A5 requires, so nothing
needs re-exporting for the signature.

**The hero photograph**, supplied 20 August 2026 as a 4032 × 2268 phone photograph and derived into
a responsive set. Sixteen by nine at every step, because §5.2 crops with `object-fit` rather than
baking a crop into a permanent file.

| Path                        | Size        | Weight   |
| --------------------------- | ----------- | --------- |
| `assets/hero-sps-1200.avif` | 1200 × 675  | 79.2 KB  |
| `assets/hero-sps-1800.avif` | 1800 × 1012 | 169.4 KB |
| `assets/hero-sps-2400.avif` | 2400 × 1350 | 284.0 KB |
| `assets/hero-sps-1600.jpg`  | 1600 × 900  | 294.6 KB |

**AVIF at three widths and one JPEG fallback**, rather than a full ladder in both formats. AVIF is
carried by every current browser and is roughly half the weight; a browser that cannot decode it is
a small minority that does not also need four widths.

**Every file was stripped of all metadata.** The originals carried no EXIF, no GPS and no colour
profile, only an eighteen-byte JFIF header, so the full-resolution masters could be stripped
**losslessly** by removing that segment rather than by re-encoding: the decoded pixels are
byte-identical to the originals. The derivatives above are re-encoded from those masters and were
verified to contain no `APPn` or comment segment of any kind.

**A second photograph was supplied and is not used.** It shows a university building with
identifiable people on its steps, and §3 of the overview forbids faces. One establishing image is
also enough for a page of this length; a second would be decoration. It was stripped on the same
terms and returned to the principal rather than committed.

### 8.2 Held back deliberately

**The signature HTML was not committed.** It carries a personal name, a personal email address and a
personal mobile number, and this repository is public with a permanent history. Directive 1 outranks
everything, and the principal has separately said their name is to appear nowhere. It can be committed
as a template with those four fields replaced by placeholders, on request.

### 8.3 Still needed

**The mark on its own, without the wordmark**, as SVG. §5.1 needs it small in the masthead and §5.7
needs the lockup in the footer, and the 300px PNG is adequate for both at those sizes. **This is
therefore no longer blocking**, because the photograph replaced the large mark in the hero. It is
still worth having: single-colour line art is the ideal case for SVG, giving every size from one
small file, recolourable by CSS, and the favicon for free.

**A favicon**, which the mark gives for free once it is SVG.

**Confirmation of the wordmark question.** The logo reads ENKEFALOS HOLDINGS LTD; the site speaks as
Enkefalos Solutions. §5.1 resolves this by setting ENKEFALOS SOLUTIONS in type beside the bare mark
and reserving the full lockup for the footer, where the legal entity belongs. A lockup drawn for the
trading name would be better and is not needed to proceed.

### 8.4 The path scheme, now settled by use

`/brand/` and `/signature/` hold **referenced assets**: stable paths, short cache, bytes replaceable.
`/assets/` will hold **build assets**: fingerprinted paths, immutable cache. The rule and the reason
are in the practices document §7 A2.

**Nothing has been served yet**, and the signature currently embeds its images as base64 rather than
linking them, so no path is load-bearing at this moment. **That stops being true the first time a
message goes out with a linked image**, and from then on §7 A1 applies absolutely.

---

## 9. Decisions needed before this is built

**The address must exist before the page ships.** `hello@enkefalos.co.uk` is now the page's only
action, and an address that bounces is worse than no address at all: it is a control the page claims
and does not have. This is the one item on the list that blocks shipping rather than blocking
design.

**Whether the copy in §7 is the right register.** It is deliberately vague and deliberately corporate,
which is what was asked for, and it is the part of this plan most likely to be wrong in a way only the
principal can see.

**Whether three columns in §5.5 is right, or two, or none.** Three is a shape rather than a finding.
Two would be the two services actually named; none would push the page to four bands and lean harder
on §1's argument about space.

**Whether the page wants a seventh band.** Six is enough for the content and gives roughly three
screens of scroll, which is enough for the reveal in §6 to be felt. More content would need more to
say.
