# Overview

**What this is.** The orientation document for this repository: what Enkefalos is, what the site is
for, and what has been decided. **Everything in §1 was stated by the principal and is quotable in
copy. Nothing else is.**

**Why this document exists.** Three other documents in this repository used to say that what
Enkefalos does was recorded nowhere, and forbade agents from inventing it. This is where it is
recorded, and that prohibition still governs everything §1 does not cover.

---

## 1. What Enkefalos is

**Stated by the principal, 20 August 2026.**

**Enkefalos Holdings Ltd is a consultancy and IT contractor for enterprise customers.**

**It is currently partnered with Arthur J. Gallagher, and with Gallagher Specialty, to build
Manifest.**

That is the whole of the record. An agent may write copy from these two facts and from nothing else.

---

## 2. What the site is for

**A front page, so that a person who has heard of Enkefalos can understand what it is.**

**It is not advertising, and it is not a pitch.** The principal has said so directly: there is no
need to give too much information. A page that says less than it could is the intended outcome here,
not a draft of a fuller one.

**It also hosts the images used in the principal's email signature.** That is the second and only
other function of this repository, and it is the one with the strictest rules, in
[`charter/engineering-practices.md`](charter/engineering-practices.md) §7.

**What follows for anyone writing copy.** Do not add a services list, a case-study section, a
testimonial, a call to action or a contact form because a consultancy site usually has one. Every one
of those is a decision the principal has not made.

---

## 3. What has been decided

| Decision                | Value                                    | Decided                        |
| ----------------------- | ---------------------------------------- | ------------------------------ |
| Domain                  | `enkefalos.co.uk`                        | Before this repository existed |
| Hosting                 | Vercel                                   | Before this repository existed |
| Visual system           | Glasswing, per [`charter/glasswing-visual-language.md`](charter/glasswing-visual-language.md) | 20 August 2026 |
| Theme                   | **Ivory**, the light theme               | 20 August 2026                 |
| House voice             | [`charter/public-copy-style.md`](charter/public-copy-style.md) | 20 August 2026 |

**On the theme.** The principal's words were "I lean ivory". It is recorded as the working decision
rather than as a preference, because the whole palette, every contrast pairing and the illustration
treatment follow from it and cannot be left open. It is one attribute to change if the lean turns out
to be wrong, which is the point of the theme mechanism in the visual language document §2.1.

---

## 4. Assets

**Nothing has been collected yet.** The logo and the email signature strip exist in a Claude
conversation the principal shared on 20 August 2026, which this session could not read: the share
page renders its content from an API that refuses unauthenticated requests, and the browser in this
environment has no working outbound route. They are still to be supplied.

### 4.1 The proposed path scheme, awaiting approval

**This is a proposal, not a decision, and it is here because
[`charter/CHARTER.md`](charter/CHARTER.md) §6.3 makes a URL scheme a stop-and-ask.** It is worth
settling before the first image is served, because directive 3 makes every path permanent from the
moment it reaches an outgoing email.

```
/signature/<name>.png     referenced by email; stable path, short cache, bytes replaceable
/brand/<name>.<ext>       the logo and its variants, for use on the site and by third parties
/assets/<name>.<hash>.<ext>   everything the site itself loads; fingerprinted, cached immutably
```

**Three properties this buys.**

**The permanent things are visibly separate from the disposable ones.** `/signature/` and `/brand/`
are promises; `/assets/` is regenerable. A contributor can see which is which from the path alone,
which is what stops the wrong caching rule being applied to the wrong file.

**A signature image is correctable.** The path is stable and the cache is short, so replacing the
bytes reaches people. The limit on that is stated in the practices document §7 A7 and is not repeated
here.

**No name carries a date or a version.** `wordmark.png`, never `wordmark-2026.png`. A version in a
path is a promise to rename it later, and renaming is the one thing directive 3 forbids outright.

### 4.2 What is needed to proceed

- **The Enkefalos logo**, as a source file rather than as markup: SVG for the site, and the
  dimensions it is meant to be read at.
- **The email signature strip**, as its HTML, and the image assets it references.
- **Approval of the path scheme above**, or a different one.

---

## 5. Open questions

**Whether the Gallagher partnership is published.** It is recorded here as a fact about the business,
which is a different act from putting a client's name on a public website. That is a commercial
decision and possibly one requiring the client's agreement, so no copy states it until the principal
says it may.

**Whether the site speaks as "we" or as one person.** The house voice assumes a firm.
[`charter/public-copy-style.md`](charter/public-copy-style.md) §1 flags this, and Enkefalos Holdings
Ltd being a company does not settle it, because a one-person company can credibly write either way.

**Whether the inherited voice is the right one.** It is derived from a marine insurance publication.
It is corporate, plain and unhurried, which suits a front page that is deliberately saying little,
but it was chosen for a different firm.
