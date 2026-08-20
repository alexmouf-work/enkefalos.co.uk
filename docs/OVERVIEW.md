# Overview

**What this is.** The orientation document for this repository: what Enkefalos is, what the site is
for, and what has been decided. **Everything in §1 was stated by the principal and is quotable in
copy. Nothing else is.**

---

## 1. What Enkefalos is

**Stated by the principal, 20 August 2026.**

**Enkefalos Solutions is the trading name of Enkefalos Holdings Ltd.**

**It offers software solutions and IT contracting services to enterprise organisations.**

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

## 3. Three prohibitions, directed by the principal

**No client is named.** Not on the site, not in this repository, not in a commit message. This
repository is public, so recording a client relationship here publishes it exactly as surely as
putting it on the page. Copy that refers to clients does so generically: "enterprise organisations",
"our clients".

**No personal name and no face.** Not the principal's, not anyone's. This rules out the address currently used in the
signature, which is built from the principal's first name, and it rules out photography of people
entirely. See §6.

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
| `brand/logo-lockup.png`     | 300 × 99    | Transparent, single colour `#004235`. Displayed at 150 × 50. |
| `signature/strip-green.png` | 1200 × 160  | Displayed at 600 × 80.                                       |
| `signature/strip-light.png` | 1200 × 160  | Displayed at 600 × 80.                                       |
| `assets/hero-sps-1200.avif` | 1200 × 675  | Hero photograph, 79.2 KB.                                    |
| `assets/hero-sps-1800.avif` | 1800 × 1012 | Hero photograph, 169.4 KB. The step a typical laptop takes.  |
| `assets/hero-sps-2400.avif` | 2400 × 1350 | Hero photograph, 284.0 KB.                                   |
| `assets/hero-sps-1600.jpg`  | 1600 × 900  | Fallback for browsers without AVIF, 294.6 KB.                |

The three signature and brand images are at twice their display size, which is what
[`charter/engineering-practices.md`](charter/engineering-practices.md) §7 A5 requires.

**Every image here carries no metadata of any kind.** The photographs supplied on 20 August 2026
held no EXIF, no GPS and no colour profile, only an eighteen-byte JFIF header, so the
full-resolution masters were stripped **losslessly** by removing that segment rather than by
re-encoding: the decoded pixels are byte-identical to what was supplied. The derivatives are
re-encoded from those masters and were verified to carry no `APPn` or comment segment.

**A second photograph was supplied and is not used.** It shows identifiable people, which §3
forbids. It was stripped on the same terms and returned to the principal rather than committed.

### 5.2 Held back deliberately

**The signature HTML was supplied and was not committed.** It carries a personal name, a personal
email address and a personal mobile number, and this repository is public with a permanent history.
Directive 1 outranks everything, and §3 forbids the name separately. It can be committed as a template
with those fields replaced by placeholders, on request.

### 5.3 Still needed

- **The mark alone, without the wordmark, as SVG.** The landing page sets it large in the hero, where
  a 300px PNG will not hold up, and small in the masthead. It is single-colour line art, so SVG gives
  every size from one small file.
- **A favicon**, which the SVG mark gives for free.

### 5.4 The path scheme, now in force

```
/brand/<name>.<ext>            referenced externally; stable path, short cache, bytes replaceable
/signature/<name>.png          referenced by email; same rules, and the strictest case of them
/assets/<name>.<hash>.<ext>    loaded by the site itself; fingerprinted, cached immutably
```

**The two rules are opposite and each is catastrophic in the other's place**; the reason is in the
practices document §7 A2.

**No path is load-bearing yet.** Nothing has been deployed, and the signature currently embeds its
images as base64 rather than linking them. **That stops being true the first time a message goes out
with a linked image**, and from then on §7 A1 applies absolutely: no move, no rename, no delete.

---

## 6. Open questions

**The contact address.** The address currently used in the signature cannot go on the page, because
it is built from the principal's first name, which §3 forbids. The recommendation is `enquiries@enkefalos.co.uk`, which needs creating. The alternative is a
page with no contact at all, which is defensible for a front page whose only job is that someone
understands what Enkefalos is.

**Whether the phone number appears.** The recommendation is that it does not. It is a personal mobile,
and a public page is a different exposure from a signature sent to a known recipient.

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
