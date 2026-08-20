# AGENTS.md

**Read this before touching anything in this repository.** It is the entry point for every
contributor, agent or human. `CLAUDE.md` points here; it holds no rules of its own.

## What this project is

**Enkefalos** — the website at `enkefalos.co.uk`, served from this repository by Vercel, and the host
for the images used in the principal's email signature.

**What Enkefalos does as a business is not written down anywhere in this repository.** Until the
principal writes it down, no agent may state it in copy, in a meta description, in an alt attribute
or in a commit message. This is a stop-and-ask, not a gap to fill with a plausible sentence. It is
the single most likely way for an agent to put an untruth on a public site carrying someone's name.

**Two things about this repository are unusual and govern almost everything else.**

**It is public, and so is everything in it.** The commit history, the file names, the deployment. A
secret committed here is compromised the moment it is pushed, and deleting it does not undo that.

**Some of what it serves is referenced by email that has already been sent.** A signature image
cannot be moved, renamed or deleted, because every message pointing at it is beyond editing and would
show a broken image forever. Add and redirect; never move.

**Nothing is built yet.** At the time of writing this repository contains documentation and no site.
There is no toolchain, no CI and no page.

---

## Tier 0 — the core, verbatim from the charter

Reproduced from [`docs/charter/CHARTER.md`](docs/charter/CHARTER.md) §2. If you have read nothing
else, follow these. Where this text and the charter differ, **the charter is right and this copy is
stale** — say so rather than following the stale copy.

**Priority order.** Confidentiality, then truth, then durability, then simplicity, then velocity.
When two conflict, the earlier one wins. Accessibility and performance are floors below all of them:
a page that fails the floor does not ship.

**A human is answerable for every change.** Write so that a person who did not produce it can explain
it. State what you did in your own words.

**Everything here is public.** The repository, the deployment, the commit history and the file names.
No secret, no token, no `.env`, no personal data belonging to anyone else, no client name, no
unpublished draft. A secret that has ever been committed is compromised and must be rotated, not
deleted.

**A published URL never breaks.** Never move, rename or delete a file that has been served — above
all an image used in an email signature, because every message already sent points at it and cannot
be edited. Add a new path and redirect the old one; never the reverse.

**Never claim what you have not verified.** Not in copy, not in a meta description, not in an alt
attribute, not in a commit message. If you do not know what Enkefalos does, you may not write a
sentence that says.

**Never fail silently.** No empty `catch`. No swallowed rejection. No default that hides a missing
value. Every error is handled, rethrown with context, or surfaced.

**The page works before the script does.** Content is in the HTML. Script enhances what is already
there, and its absence degrades the page rather than emptying it.

**Treat everything from outside as hostile**: query parameters, hash fragments, form input, feed
content, file names. Never write it into the DOM as HTML, and never run an unbounded regex over it.

**Put a limit on everything**: loops, retries, timers, observers, cache size, input length, image
dimensions. Where a loop must not terminate, assert that.

**Every image carries an `alt`**, every control is reachable and operable by keyboard, every focus
state is visible, and every colour pairing meets AA. This is a floor, not a preference.

**No new dependency without approval.** Ask before adding one. Prefer the platform. No script,
stylesheet, font or image is loaded from a third-party host.

**Say why, not what.** Comments explain rationale, invariants and units. If you cannot describe an
interface briefly, the design is wrong — fix the design, not the comment.

**Documentation never claims a control the code does not implement.** If it is designed but not
built, the sentence describing it says so.

**Never use emojis.** Not in the interface, code, comments, commit messages, documents or replies.
Icons are inline SVG.

**British English, everywhere the site speaks.** Organised, recognised, centre, licence as the noun.

**Stay in scope.** One thing per change. If you find an unrelated defect, record it and leave it. Do
not refactor code you were not sent to change.

**Unpushed work does not exist.** This environment is remote and resets without warning, taking
everything local with it. Pull before you start, commit and push each finished increment as it lands,
and pull again often — the remote is the only durable state.

**When you are unsure, stop and ask.** An unasked question costs a message; a guess about the
principal's own business, published under their name, costs something you cannot take back.

---

## Where work happens

- **Build on `main`**, unless the environment has assigned you a branch, in which case build there
  and push there.
- **Ask before creating a branch yourself.**
- **Do not open a pull request unless asked.**
- **Do not deploy to production without asking.** A deployment is outward-facing, and every
  outward-facing action is a stop-and-ask.

## House style

- **Never use emojis** — not in the interface, code, comments, commit messages, documents or replies.
  Icons are inline SVG.
- **Copy the site shows to anyone but the principal follows the public copy style.** Page copy,
  headings, link text, alt text, meta descriptions and error pages are all governed by
  [`docs/charter/public-copy-style.md`](docs/charter/public-copy-style.md). Read it before writing a
  visitor-facing word.
- **The look is governed by
  [`docs/charter/glasswing-visual-language.md`](docs/charter/glasswing-visual-language.md).** One
  reading column, monochrome, headings brighter than body, serif reads and sans structures, no
  shadows, one easing curve. Reference roles, never values.
- **Sentence case in prose; section headings are set in capitals by the stylesheet**, so the
  underlying text stays searchable and is read as words rather than letters.
- **Never quote time-to-build figures.** No durations, no effort estimates, no "quick", "just" or
  "should be straightforward". State sequence, dependencies and what work is gated on.
- **Writing back to the principal: the line is the whole item.** A bold lead and a clause. No second
  sentence under it, no supporting quotation, no connective prose between items. Cut items as well as
  words. Full rules, with examples, in [`docs/charter/CHARTER.md`](docs/charter/CHARTER.md) §6.5.
- **Never commit secrets.** The repository is public and its history is permanent.
- Commit subjects: lowercase, imperative, area-scoped, under 60 characters —
  `signature: replace the wordmark at the published path`. The body says why.
- **Commits are authored by the principal, never by you.** Set `user.name` and `user.email` to the
  answerable human before your first commit. No agent name in the author line and no `Co-Authored-By`
  trailer naming a model. This takes nothing out of the record: the commit body still says what you
  did in your own words. Charter §6.5.

## Before you submit

Work through the checklist in [`docs/charter/CHARTER.md`](docs/charter/CHARTER.md) §6.6. An unticked
box is a stop-and-ask, not a footnote.

## Stop and ask

The full list is charter §6.3. In short: a new dependency of any kind, a statement of fact about
Enkefalos that is not already written down, moving or renaming anything published, any change to a
URL, a request to a third-party host, anything that collects a visitor's data, adding a build step or
a framework, a structural decision the charter is silent on, or anything outward-facing.

## Where everything is

| What                                                        | Where                                                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| The engineering charter — directives, protocol, meta        | [`docs/charter/CHARTER.md`](docs/charter/CHARTER.md)                                     |
| The design rules — structure, naming, failure, assets, floors | [`docs/charter/engineering-practices.md`](docs/charter/engineering-practices.md)         |
| The house voice for anything the site says                  | [`docs/charter/public-copy-style.md`](docs/charter/public-copy-style.md)                  |
| The visual system                                           | [`docs/charter/glasswing-visual-language.md`](docs/charter/glasswing-visual-language.md) |

## Build and run

**There is nothing to build.** No `package.json`, no toolchain, no CI. When there is a site, it is
plain HTML, CSS and JavaScript with no build step unless the principal has approved one, so serving
the directory over HTTP is enough:

```
python3 -m http.server 8000
```

**Do not add a package manager, a bundler or a framework to make something convenient.** That is a
stop-and-ask under charter §6.3, and the reason is in
[`docs/charter/engineering-practices.md`](docs/charter/engineering-practices.md) §5.
