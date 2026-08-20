# Overview

**What this is.** The orientation document for this repository: what Enkefalos is, what the site is
for, and what has been decided. **Everything in §1 was stated by the principal and is quotable in
copy. Nothing else is.**

---

## 1. What Enkefalos is

**Stated by the principal, 20 August 2026.**

**Enkefalos Solutions is the trading name of Enkefalos Holdings Ltd.**

**It offers consultancy, software solutions and IT contracting services to enterprise
organisations.**

**Enkefalos Holdings Ltd is registered in England and Wales, company number 17301883, London, United
Kingdom.** The principal has authorised the legal name and the company number to appear on the site.

That is the whole of the record, and it is short deliberately. An agent may write copy from these
facts and from nothing else.

---

## 2. What the site is for

**A front page, so that a person who has heard of Enkefalos can understand what it is.**

**It is not advertising, and it is not a pitch.** The principal has said so directly: there is no
need to give too much information. A page that says less than it could is the intended outcome here,
not a draft of a fuller one.

**It also hosts the images used in the principal's email signature.** That is the second and only
other function of this repository, and it is the one with the strictest rules, in
[`charter/engineering-practices.md`](charter/engineering-practices.md) §7.

---

## 3. Four prohibitions, directed by the principal

**No client is named.** Not on the site, not in this repository, not in a commit message. This
repository is public, so recording a client relationship here publishes it exactly as surely as
putting it on the page. Copy that refers to clients does so generically: "enterprise organisations",
"our clients".

**No personal name and no face.** Not the principal's, not anyone's. This rules out the address
currently used in the signature, which is built from the principal's first name, and it rules out
photography of people entirely.

**No phone number.** Directed 20 August 2026. The number in the signature is a personal mobile, and
a public page is a different exposure from a message sent to a known recipient. Contact is by email
only.

**Nothing is expanded on.** Every section a consultancy site conventionally carries and this one does
not — services grid, client logos, testimonials, team, statistics, blog — is absent because it was
decided against, not because it is outstanding. Adding one is a change to the plan, not a completion
of it.

---

## 4. What has been decided

| Decision      | Value                                                                                        | Decided                        |
| ------------- | -------------------------------------------------------------------------------------------- | ------------------------------ |
| Domain        | `enkefalos.co.uk`                                                                              | Before this repository existed |
| Hosting       | Vercel                                                                                         | Before this repository existed |
| Visual system | Glasswing, per [`charter/glasswing-visual-language.md`](charter/glasswing-visual-language.md)   | 20 August 2026                 |
| Theme         | **Ivory**, the light theme                                                                     | 20 August 2026                 |
| Brand colour  | **Enkefalos green `#004235`**, read from the logo file                                         | 20 August 2026                 |
| Page rhythm   | Banded, after `stpaulsschool.org.uk`, per [`landing-page-plan.md`](landing-page-plan.md) §2.2   | 20 August 2026                 |
| Motion        | Fade and rise on scroll, one curve, per [`landing-page-plan.md`](landing-page-plan.md) §6       | 20 August 2026                 |
| House voice   | [`charter/public-copy-style.md`](charter/public-copy-style.md)                                  | 20 August 2026                 |
| Contact       | **hello@enkefalos.co.uk**, by email only, on its own band                                       | 20 August 2026                 |
| Deploy root   | `website/`, pointed at by Vercel                                                                | 20 August 2026                 |

**On the theme.** The principal's words were "I lean ivory". It is recorded as the working decision
rather than as a preference, because the whole palette and every contrast pairing follow from it and
cannot be left open. It is one attribute to change if the lean turns out to be wrong, which is the
point of the theme mechanism in the visual language document §2.1.

**On the green.** `#004235` was read from `brand/logo-lockup.png`, where it is the only colour, and
confirmed against `signature/strip-green.png`, where it is 92% of the pixels. It is not sampled by
eye. How it may be used, and the measured reason it may not be used for body copy, are in the visual
language document §2.6.

---

## 5. Assets

### 5.1 Collected

| Path                        | Size        | Notes                                                       |
| --------------------------- | ----------- | ------------------------------------------------------------ |
| `website/brand/logo-lockup.png` | 300 × 99 | Transparent, single colour `#004235`. Displayed at 150 × 50. |
| `website/signature/strip-green.png` | 1200 × 160 | Displayed at 600 × 80.                                       |
| `website/signature/strip-light.png` | 1200 × 160 | Displayed at 600 × 80.                                       |
| `website/assets/hero-courtyard-*.avif` | 1200, 1800, 2400 wide | Hero photograph. 79.2, 169.4, 284.0 KB.       |
| `website/assets/hero-courtyard-1600.jpg` | 1600 × 900 | Hero fallback for browsers without AVIF, 294.6 KB.       |
| `website/assets/panel-arcade-1200.*` | 1200 × 675  | Carousel panel. 82.1 KB as AVIF, 176.9 KB as JPEG.        |
| `website/assets/panel-court-1200.*` | 1200 × 675  | Carousel panel. 84.1 KB as AVIF, 184.3 KB as JPEG.        |
| `website/assets/panel-gatehouse-1200.*` | 1200 × 675 | Carousel panel. 65.3 KB as AVIF, 148.6 KB as JPEG.        |

The three signature and brand images are at twice their display size, which is what
[`charter/engineering-practices.md`](charter/engineering-practices.md) §7 A5 requires.

**Every image here carries no metadata of any kind, and every master was stripped losslessly.** The
first two photographs held only an eighteen-byte JFIF header; the third held a good deal more, and is
covered below. In each case the master was rebuilt without its metadata segments rather than
re-encoded, so the decoded pixels hash identically to what was supplied. The derivatives are
re-encoded from those masters and were verified to carry no `APPn` or comment segment.

**Files are named for what they show, not for where they were taken.** §3 forbids naming clients,
and an institution's initials in a public path is the same disclosure by a shorter route. The hero
files were renamed on that basis on 20 August 2026, which was safe because `/assets/` paths are
internal; the same rename under `/brand/` or `/signature/` would have been forbidden.

**The three carousel panels are now two photographs and a third.** Two are crops of the courtyard
already used for the hero, framed to read as different views; the third is a gothic court supplied
on 20 August 2026 and used at a 16:9 crop of its own.

**That third file was the first to arrive carrying real metadata**, and the first where stripping
could have cost something. It held EXIF, an IPTC block, an XMP packet, an Adobe marker and an ICC
profile. Two checks decided that a lossless strip was safe: **the profile is sRGB IEC61966-2.1**, so
removing it changes no colour, and **the Adobe marker's transform flag is 1**, so decoders read the
remaining data as YCbCr exactly as they did before. Had the profile been Display P3 or Adobe RGB, the
correct order would have been to convert first and strip second; had the transform flag been 0, the
marker could not have been dropped at all. The decoded pixels of the stripped master hash identically
to the original.

**Its rights are not recorded in the file.** The IPTC and XMP blocks carry a capture date and nothing
else: no creator, no copyright notice, no usage terms. The file therefore neither establishes nor
refutes the licence question raised on 20 August 2026, and the principal supplied it again after that
question was put.

**A measured note on how it sits with the other two.** Sampled at 120px, its mean saturation is 0.281
against 0.150 and 0.170 for the courtyard crops and 0.127 for the hero, so it is roughly twice as
saturated as anything else on the page. Its lightness, 0.608, matches the hero's 0.611 almost exactly
and is a better fit than the panel it replaced. Brighter and better matched; more saturated and less
so.

**One photograph supplied on 20 August 2026 is now unused.** The university portico, which was
standing in as the third panel, has been removed rather than found another job.

### 5.2 Held back deliberately

**The signature HTML was supplied and was not committed.** It carries a personal name, a personal
email address and a personal mobile number, and this repository is public with a permanent history.
Directive 1 outranks everything, and §3 forbids the name separately. It can be committed as a template
with those fields replaced by placeholders, on request.

### 5.3 Still needed

- **The mark alone, as SVG.** Not blocking. `website/brand/mark.png` was cut from the lockup and
  serves the masthead at 36px, and `favicon-32.png` and `apple-touch-icon.png` were cut from the same
  crop. An SVG would replace all three with one small file that is sharp at every size and
  recolourable by CSS, and it is worth having whenever the source artwork surfaces.
- **The licence position on the third carousel photograph.** The file carries no creator, copyright
  notice or usage terms of its own, and it is a professionally produced architectural photograph
  rather than a phone image. Settling this is the principal's, and it is not blocking the build.

### 5.4 The path scheme, now in force

**Vercel's root directory is `website/`**, so a file at `website/signature/strip-green.png` serves
at `https://enkefalos.co.uk/signature/strip-green.png`. The served URLs are unchanged by the move
into that folder, and the move was safe because nothing had been deployed when it happened.

```
/brand/<name>.<ext>            referenced externally; stable path, short cache, bytes replaceable
/signature/<name>.png          referenced by email; same rules, and the strictest case of them
/assets/<name>.<ext>           loaded by the site itself; moderate cache, no fingerprint
```

**`/assets/` is not fingerprinted, deliberately.** The practices document §7 A2 asks for a content
hash and an immutable cache, and states the precondition that makes that safe: a build step to keep
the hash correct. There is none, and a hand-maintained hash fails by omission in the worst available
direction. `website/README.md` records the choice where it is made.

**The two rules are opposite and each is catastrophic in the other's place**; the reason is in the
practices document §7 A2.

**No path is load-bearing yet.** Nothing has been deployed, and the signature currently embeds its
images as base64 rather than linking them. **That stops being true at the first deployment**, and
from then on §7 A1 applies absolutely: no move, no rename, no delete.

---

## 6. Open questions

**`hello@enkefalos.co.uk` must exist before the page ships.** It is the page's only action. An
address that bounces is a control the page claims and does not have, which directive 2 forbids, and
it is worse than carrying no address at all. This is a provisioning dependency rather than a design
question, and it is the one item that blocks shipping.

**Whether the wordmark should be redrawn.** The logo reads ENKEFALOS HOLDINGS LTD; the site speaks as
Enkefalos Solutions. The landing page plan works around this by setting the trading name in type
beside the bare mark and reserving the full lockup for the footer, where the legal entity belongs. A
lockup drawn for the trading name would be better and is not needed to proceed.

**Whether the site speaks as "we" or as one person.** The house voice assumes a firm. The draft copy
uses "we". A company being a company does not settle it, because a one-person company can credibly
write either way.

**Whether the inherited voice is the right one.** It is derived from one firm's professional-services
publication. It is corporate, plain and unhurried, which suits a front page that is deliberately
saying little, but it was chosen for a different firm.
