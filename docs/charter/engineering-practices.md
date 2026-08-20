# Engineering practices

**Status: in force, 20 August 2026.** The design rules for this repository. Normative, and carrying
the same weight as [`CHARTER.md`](CHARTER.md), which holds the priority ordering, the contributor
protocol and the definition of done, and defers to this document for everything below.

**Every rule carries a rationale, an example and a counterexample.** A rule whose reason is unknown
gets misapplied at the edges, and a rule with no counterexample is a rule two competent people will
read two ways.

**Derived from the parent engineering charter, version 1.9.0**, §4 and §5, adapted for a static
website and a public asset host. [`CHARTER.md`](CHARTER.md) §8 records what was carried, changed and
dropped, and why.

**Where a rule has no tool behind it, it says so.** A rule with no tool behind it decays, in
disciplined codebases, silently. At version 1.0.0 nothing in this repository is enforced by a tool
at all, so every rule below is review's job until [`CHARTER.md`](CHARTER.md) §3 says otherwise.

---

## 1. Structure

**S1 — Content lives in HTML, presentation in CSS, behaviour in JS, and none of the three does
another's job.** A heading is a heading because it is an `<h2>`, not because it is 30 pixels. A
control is a control because it is a `<button>`, not because it has a click handler.

_Rationale:_ the platform gives semantics away for free, and everything downstream depends on them —
the accessibility tree, keyboard behaviour, the reader mode, the search engine, the styling hooks. A
`<div>` with a click handler has to have every one of those rebuilt by hand, and one of them will be
forgotten.

```html
<button type="button" aria-expanded="false" aria-controls="nav">Menu</button>
```

```html
<div class="button" onclick="toggleNav()">Menu</div>
<!-- not focusable, not operable by keyboard, announced as nothing -->
```

**S2 — The page works before the script does.** Content is in the HTML that arrives from the server.
Script enhances what is already there; its absence degrades the page rather than emptying it.

_Rationale:_ a script that has not loaded yet is the normal condition of every page for its first
few hundred milliseconds, and the permanent condition of a page whose script failed. This is also
what makes the site cheap: content in HTML needs no framework to put it back.

```html
<nav id="nav">
  <a href="/work">Work</a>
</nav>
<script>
  // Collapses the nav on narrow viewports. Without this, the nav is simply always open.
</script>
```

```html
<nav id="nav"></nav>
<script>
  nav.innerHTML = renderNav(); // no script, no navigation, and no way to tell
</script>
```

**S3 — One stylesheet and one script for the site, unless a page has a reason of its own.** Split by
what a page needs, never by what a directory looks tidy as.

_Rationale:_ a site of this size pays more in requests and cache misses for fragmentation than it
saves in unused bytes. The threshold for splitting is a page that loads something substantial no
other page uses.

**S4 — A file that only forwards is deleted.** If a module's exports call one other module and add
no invariant, remove the file and call the thing directly.

_Rationale:_ pass-through layers add reading cost and hide nothing.

```js
// Counterexample — delete this, call the function directly.
export const formatDate = (d) => dates.formatDate(d);
```

**S5 — Prefer a shallow directory tree.** A path is read far more often than it is typed, and a
site with three sections does not need five levels.

_Rationale:_ on this project the directory structure is also the URL structure, and directive 3
makes every path a promise. A tree nobody wanted to type is a tree somebody will want to
reorganise, and reorganising is exactly what is forbidden.

---

## 2. Naming

**N1 — URLs and file names are lowercase, hyphen-separated, and carry no spaces, underscores,
capitals or dates.** `about-enkefalos`, not `About_Enkefalos` or `about-2026`.

_Rationale:_ case sensitivity differs between a developer's filesystem and the server's, so a
capital letter is a link that works locally and 404s in production. A date in a path is a promise to
rename it later, which directive 3 forbids.

```
/signature/wordmark.png
```

```
/Signature/Wordmark_2026 final.PNG
```

**N2 — A name says what a thing is, not what it looks like or where it currently sits.**
`--colour-accent`, not `--colour-orange`. `.masthead`, not `.top-bar`.

_Rationale:_ the orange changes and the top bar moves; the accent and the masthead do not. A name
that describes an appearance is a name that lies after the first redesign, and nobody renames it
because everything references it.

```css
--colour-accent: #d97757;
```

```css
--colour-orange: #d97757; /* now blue, and called orange in forty places */
```

**N3 — Every quantity names its unit, in the identifier.** Sizes, durations, weights, counts.

_Rationale:_ a unit error is a wrong result presented as a right one, and the fix is free at the
moment of naming.

```js
const heroFadeMs = 600;
const logoWidthPx = 160;
```

```js
const heroFade = 600; // milliseconds? frames? seconds?
```

**N4 — Index, count and size are distinct concepts, and converting between them is explicit.**

_Rationale:_ the usual off-by-one is a casual interaction between them: indexes are zero-based,
counts are one-based.

```js
const slideCount = slides.length;
const lastSlideIndex = slideCount - 1; // conversion stated
```

```js
for (let i = 0; i <= slides.length; i += 1) {
  /* reads plausibly, runs off the end */
}
```

**N5 — Use the site's own word for a thing, exactly, and never give it a second meaning.** If the
navigation says "Work", the directory is `work`, the CSS is `.work-grid` and the copy says work. Do
not introduce "portfolio", "projects" and "case studies" as synonyms.

_Rationale:_ a term with two meanings causes lasting confusion, and on a site the vocabulary is
visible to the visitor as well as the author.

---

## 3. Failure

**F1 — Never swallow.** Every `catch` handles, rethrows with context, or surfaces. An empty catch
block, a bare `.catch(() => {})`, and a `?? fallback` covering a thrown failure are all prohibited.
**Recording is not handling**: if the caller still receives a value, the error was handled, and F3
governs whether it was allowed to be.

_Rationale:_ the swallowed exception hides exactly the failure the check existed to catch, and on a
site the symptom is a feature that silently stopped working months ago.

```js
try {
  await loadSlides();
} catch (cause) {
  throw new Error("carousel: slide index failed to load", { cause });
}
```

```js
try {
  await loadSlides();
} catch {
  /* best effort */
}
```

**F2 — Distinguish an expected outcome from a broken assumption.** A fetch that 404s, a form field
that fails validation, a feature the browser does not support: expected, handled, and the page
carries on. A selector that matches nothing it was written against, an element missing from the DOM,
a config value of the wrong shape: broken, and the code stops rather than guessing.

_Rationale:_ the two need opposite treatment, and conflating them produces code that retries a logic
bug and papers over a typo in a class name.

```js
const stage = document.querySelector("[data-carousel-stage]");
if (!stage) throw new Error("carousel: stage element missing from the markup");
```

```js
const stage = document.querySelector("[data-carousel-stage]");
if (!stage) return; // the carousel is now silently absent, on every page, forever
```

**F3 — A failure the visitor can see is never dressed as success.** If something the page promised
did not load, the page says so in words. An empty region where content should be, a spinner that
never resolves, and a silently skipped section are all a lie told by omission.

_Rationale:_ this is directive 2 at the last layer. The producer failing loudly is worthless if the
consumer renders the failure as a tasteful blank space.

```js
catch (cause) {
  console.error(cause);
  region.textContent = "This section could not be loaded.";
}
```

```js
catch (cause) {
  console.error(cause);
  region.remove(); // the visitor sees a page that never mentioned it
}
```

**F4 — Nothing from outside is written into the DOM as HTML.** Query parameters, hash fragments, form
input, feed content, file names, anything from a network response. Use `textContent`, or a
`<template>` and explicit element construction.

_Rationale:_ `innerHTML` with any outside value is a cross-site scripting vulnerability, and the
site is public and carries the principal's name.

```js
name.textContent = params.get("name") ?? "";
```

```js
name.innerHTML = params.get("name"); // ?name=<img src=x onerror=...>
```

**F5 — Feature-detect, never sniff.** Test for the capability you are about to use, not for the
browser you think has it.

_Rationale:_ a user-agent string is a claim about identity and the check needs a claim about
capability; the two diverge every release cycle.

```js
if ("IntersectionObserver" in window) {
  observeReveals();
}
```

```js
if (/Safari/.test(navigator.userAgent)) {
  /* wrong on Chrome, wrong on every embedded webview */
}
```

---

## 4. Comments

**C1 — Comments say why, not what.** Rationale, invariants, units, and the alternative that was
rejected.

_Rationale:_ the reader can see what the code does; only the author knows why it does it that way.

```css
/* 633px, not a round number: it is the measure at which the serif body sets to roughly
   72 characters, which is where the Glasswing reference page holds it. */
--measure-body: 633px;
```

```css
/* Set the measure. */
--measure-body: 633px;
```

**C2 — A surprising invariant gets an assertion or a visible failure as well as a comment.**

_Rationale:_ a comment goes stale silently; a check fails loudly.

**C3 — No commented-out code.** Git remembers it; the file does not need to.

_Rationale:_ commented-out code is a claim that something might come back, with no owner and no
expiry.

**C4 — A `TODO` names the thing it is waiting on.** `TODO: ask the principal what Enkefalos does
before writing the meta description`, not `TODO: fix this`.

_Rationale:_ an unattributed `TODO` is a note to nobody, and it survives every review because
nobody knows enough about it to remove it.

---

## 5. Dependencies

**D1 — A new dependency of any kind requires the principal's approval before it is added.** Ask
first; do not add it and explain afterwards. This includes a development dependency, a build tool
and a framework.

_Rationale:_ dependencies bring supply-chain risk and an upgrade treadmill, and a site that has none
is a site that still builds in five years. [`CHARTER.md`](CHARTER.md) §6.3 makes this a mandatory
stop-and-ask.

**D2 — Prefer the platform.** Modern CSS and the DOM over a library; a library over a framework; a
framework only when the principal has agreed the site needs one.

_Rationale:_ a platform primitive has no supply chain, no maintainer who can disappear and no
migration. A framework is the most expensive form of dependency, because it dictates the shape of
code that has to outlive it. Nesting, custom properties, container queries, grid, `:has()`,
`<dialog>`, `<details>` and the view transitions API cover most of what a library used to be for.

```css
.card {
  container-type: inline-size;
}
@container (min-width: 30rem) {
  .card__body {
    display: grid;
  }
}
```

```js
import { useMediaQuery } from "some-hooks-package"; // a dependency for a media query
```

**D3 — Nothing is requested from a third-party host. Ever.** Fonts, scripts, stylesheets, icons,
images, analytics, embeds. Everything the site serves is served from this origin.

_Rationale:_ four reasons, and any one of them is sufficient. A third-party request tells that party
every visitor's address and the page they were reading, which makes it a data-protection question
rather than a technical one. It is a supply-chain injection point on a public site carrying the
principal's name. It is a dependency on someone else's uptime for the site's first paint. And it
defeats the strict content security policy in §9.

```html
<link rel="preload" href="/fonts/subset.woff2" as="font" crossorigin />
```

```html
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
```

**D4 — A licensed font is licensed for this use before it is committed.** Self-hosting a font does
not grant the right to serve it, and a webfont licence is usually distinct from a desktop one. Where
the licence is unclear, the font is not used.

_Rationale:_ this is a public site, so a licence breach is a public one. The rule is stated because
self-hosting under D3 makes it easy to move a font file that was licensed for something else.

---

## 6. Resources and limits

**R1 — Put a limit on everything**: loops, retries, timers, observers, listeners, cache entries,
input length, image dimensions. Where a loop must not terminate, say so and check it.

_Rationale:_ every unbounded thing is bounded by something eventually, and it is always the browser
tab rather than the author.

```js
const RETRY_MAX = 3;
for (let attempt = 0; attempt < RETRY_MAX; attempt += 1) {
  /* ... */
}
```

```js
while (!loaded) {
  await tryLoad();
} // one bad response, one hot tab
```

**R2 — Limits bind before the expensive work, never after.** Check a declared size, a length or a
count before allocating, parsing or decoding.

_Rationale:_ a cap applied after the allocation is not a cap.

```js
if (text.length > FIELD_CHARS_MAX) throw new Error("field: too long");
const parsed = parse(text);
```

```js
const parsed = parse(text);
if (parsed.length > FIELD_CHARS_MAX) throw new Error("field: too long"); // the work is already done
```

**R3 — No regex over untrusted text without a linear-time guarantee.** Anchor it, bound the input
first, and avoid nested quantifiers entirely.

_Rationale:_ a catastrophically backtracking expression over a crafted query string is a denial of
service that costs the attacker one request.

```js
if (slug.length > SLUG_CHARS_MAX) throw new Error("slug: too long");
const match = /^[a-z0-9-]{1,64}$/.exec(slug); // anchored, bounded, no nesting
```

```js
const match = /(\s*\w+\s*)+:(.*)/.exec(input); // nested quantifier over outside text
```

**R4 — Every listener, observer, timer and animation frame is removed when the thing that owns it
goes away.** Acquire and release in the same place.

_Rationale:_ grouping the two makes a leak visible in one screen, and a leaked observer on a
long-lived page is a slow scroll nobody can attribute.

```js
const observer = new IntersectionObserver(onReveal);
elements.forEach((el) => observer.observe(el));
return () => observer.disconnect();
```

```js
elements.forEach((el) => new IntersectionObserver(onReveal).observe(el)); // one per element, never released
```

**R5 — Never use a plain object as a lookup keyed by outside data.** Use `Map`.

_Rationale:_ a key of `constructor`, `__proto__` or `toString` returns a function from the prototype
chain rather than the miss the code is written to expect, and the resulting value fails open.

```js
const bySlug = new Map(pages.map((p) => [p.slug, p]));
const page = bySlug.get(slug);
```

```js
const page = pagesBySlug[slug]; // ?slug=constructor
```

---

## 7. Assets and URL permanence

**This section is the one with no parent in the parent charter's rules, and the one most specific to this
project.** It exists because the images this repository serves are referenced from email messages
that have already been sent and can never be edited.

**A1 — A published path is permanent.** Once a file has been served from a path, that path serves
something forever. Never move it, never rename it, never delete it. This binds hardest on anything
under the email-signature asset directory and it binds on every page URL too.

_Rationale:_ directive 3. A sent email is not a document the sender can revise. A signature image
moved for tidiness leaves a broken-image icon in every message in the recipient's archive, in every
thread it was quoted into, indefinitely — and it does so silently, because the sender's own client
still shows the cached copy.

```
# The wordmark moves to a new design. The old path keeps serving.
/signature/wordmark.png       -> the current wordmark, bytes replaced in place
```

```
# FORBIDDEN
git mv public/signature/wordmark.png public/signature/logo-2026.png
```

**A2 — Two kinds of asset, two opposite caching rules, and the kind is decided when the file is
created.**

- **A referenced asset** — anything an email signature or an external page points at — lives at a
  **stable, unfingerprinted path** and is cached for a **short** period, so that replacing its bytes
  actually reaches people. Suggested: `public, max-age=3600, stale-while-revalidate=86400`.
- **A build asset** — a stylesheet, a script, a page image — lives at a **content-fingerprinted
  path** and is cached **immutably**. Suggested: `public, max-age=31536000, immutable`.

_Rationale:_ these two rules are each correct and each catastrophic in the other's place. An
immutable signature image can never be corrected, which makes directive 1's worked example
unresolvable. A short-cached fingerprinted asset throws away the only benefit fingerprinting has.

```
/signature/wordmark.png            max-age=3600         referenced, correctable
/assets/site.a1b2c3d4.css          max-age=31536000     fingerprinted, immutable
```

```
/signature/wordmark.png            max-age=31536000, immutable
# the mobile number in it is now unfixable for a year, in every mail client that cached it
```

**A3 — Replacing the bytes at a referenced path rewrites history, and is done deliberately or not at
all.** Every message ever sent that points at the path will show the new image. That is the reason
to host signature images centrally, and it is also a way to change what a past email appears to say.
Correct a defect this way; never restate a fact this way.

_Rationale:_ directive 2. A signature image is decoration and a logo, and updating it is honest. An
image that carried a claim — a figure, an accreditation, a title — is a statement, and silently
swapping the statement in a sent message is not a correction, it is a rewrite.

**A4 — Signature images are PNG or JPEG, and nothing else.** No SVG, no WebP, no AVIF.

_Rationale:_ Outlook on Windows renders mail through the Word engine and supports neither SVG nor
WebP; the fallback is a broken image or an attachment prompt, not a graceful downgrade. This is the
one place on the project where the modern format is the wrong answer, and it is written down because
every other rule here points the other way.

```html
<img src="https://enkefalos.co.uk/signature/wordmark.png" width="180" height="40" alt="Enkefalos" />
```

```html
<img src="https://enkefalos.co.uk/signature/wordmark.svg" alt="Enkefalos" />
<!-- broken in Outlook -->
```

**A5 — A signature image carries explicit `width` and `height` attributes in the markup, set to the
intended display size, and is authored at twice those pixel dimensions.**

_Rationale:_ mail clients do not reliably apply CSS, so the attributes are the only sizing that
survives. Authoring at 2x is what keeps it from looking soft on a high-density screen, and halving it
in the attributes is what keeps it from being enormous everywhere else.

```html
<!-- file is 360x80; displayed at 180x40 -->
<img src="/signature/wordmark.png" width="180" height="40" alt="Enkefalos" />
```

```html
<img src="/signature/wordmark.png" style="width: 180px" alt="Enkefalos" />
<!-- style stripped, image renders at 360px -->
```

**A6 — Every asset is served over HTTPS, from the site's own domain, with no redirect in the path.**

_Rationale:_ mail clients block mixed content and many refuse to follow a redirect for an image.
A redirect that works in a browser can still be a broken image in Outlook, so the published path is
the real path.

**A7 — State the limit of central hosting rather than assuming it away.** Gmail serves images
through a caching proxy, and several clients cache aggressively or block remote images until the
reader allows them. Replacing an image therefore reaches people **eventually and unevenly**, not
immediately, and some recipients will never have loaded it at all.

_Rationale:_ this is directive 2 applied to the project's own capabilities. A1 to A6 make correction
possible; they do not make it instant, and a document that implied otherwise would be claiming a
control that does not exist.

**A8 — Where a URL genuinely must change, the old one is redirected permanently, in the same
change.** A `301` in `vercel.json`, added in the commit that moves the thing, and followed once by
hand before the change is called done.

_Rationale:_ A1 forbids moving a published URL, and this rule is what happens when the principal
decides one must move anyway. The redirect is part of the move, not a follow-up, because a follow-up
is a thing that happens after the links have already broken.

```json
{ "redirects": [{ "source": "/old-path", "destination": "/new-path", "permanent": true }] }
```

---

## 8. Accessibility and performance — the floors

**Not directives, because they do not trade.** A page that fails either is unfinished.
[`CHARTER.md`](CHARTER.md) §1 says why.

### 8.1 Accessibility — WCAG 2.2 AA

**AC1 — Every image has an `alt`.** Descriptive where the image carries meaning; `alt=""` where it
is decorative. A missing attribute is a defect; an empty one is a decision.

```html
<img src="/signature/wordmark.png" alt="Enkefalos" />
<img src="/img/texture.png" alt="" />
```

```html
<img src="/img/texture.png" />
<!-- announced as the file name -->
```

**AC2 — Everything interactive is reachable and operable by keyboard**, in a sensible order, with a
**visible** focus state. Never remove a focus outline without replacing it with something at least
as legible.

```css
:focus-visible {
  outline: 2px solid var(--colour-focus);
  outline-offset: 2px;
}
```

```css
:focus {
  outline: none;
} /* the keyboard user is now lost on the page */
```

**AC3 — Every text and control pairing meets AA**: 4.5:1 for body text, 3:1 for large text and for
the non-text parts of a control. Measured, not judged by eye.

_Rationale:_ contrast is the one accessibility rule that is fully mechanical, so guessing at it is
indefensible. Dark palettes fail it most often on secondary and tertiary text, which is exactly
where a reference design will be copied from.

**AC4 — The page has one `<h1>` and a heading order with no gaps.** Headings describe structure;
they are not a size picker.

**AC5 — Honour `prefers-reduced-motion`.** Every transition, reveal, parallax and autoplaying
element has a reduced or absent form.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**AC5a — Content hidden by a rotating panel is hidden from everyone, or from nobody.** An inactive
slide is `inert`, not merely transparent or positioned offscreen.

_Rationale:_ `opacity: 0` and `transform: translate` leave an element in the tab order and readable
by a screen reader, so a keyboard user tabs into text they cannot see and a screen reader announces
three panels at once. The reference implementation this site's carousel is modelled on has exactly
this defect. `inert` removes an element from the tab order and the accessibility tree together,
which is the only way the visual state and the announced state agree.

```html
<div class="panel" inert>…</div>
<div class="panel" data-active="true">…</div>
```

```html
<div class="panel" style="opacity: 0">…</div>
<!-- invisible, still focusable, still announced -->
```

**AC5b — Nothing rotates on a timer.** No autoplaying carousel, no auto-advancing banner.

_Rationale:_ content that moves on a timer takes the page away from a reader mid-sentence, and the
accessibility floor then requires a pause control to put it back, which is a component built to
undo a decision nobody needed to make. Where a set is small enough to be worth showing, it is small
enough for the reader to advance themselves.

**AC6 — Colour is never the only carrier of meaning**, and text is never placed over a photograph
without a measured contrast against the region it actually sits on.

**AC7 — A visitor can zoom to 200% and reflow to a 320px viewport without losing content or
function.** No `user-scalable=no`, no fixed pixel heights on text containers.

### 8.2 Performance

**PF1 — Budgets, per page, on a cold load.** These are chosen defaults for a site of this kind, not
measurements of anything; the principal may set different ones, and if they do, this line changes
rather than being quietly ignored.

| Metric                    | Budget                                                    |
| ------------------------- | --------------------------------------------------------- |
| HTML                      | 30 KB compressed                                          |
| CSS                       | 30 KB compressed                                          |
| JS                        | 30 KB compressed                                          |
| Fonts                     | 100 KB total, subset, `woff2`, at most two faces          |
| Images, per page          | 350 KB total                                              |
| Requests, per page        | 20                                                        |
| Largest Contentful Paint  | under 1.5s on a mid-range mobile over 4G                  |
| Cumulative Layout Shift   | under 0.05                                                |

**The image budget was 300 KB and was raised to 350 KB on 20 August 2026**, when a full-bleed hero
photograph was added to a page designed without one. It is recorded rather than quietly exceeded,
because a budget that moves silently the first time it binds was never a budget.

**The budget binds the initial load, not the eventual total.** An image fetched only because the
visitor asked for it — a carousel panel they clicked through to — is counted separately, because
counting it against the first paint would price a cost nobody has yet paid, and would push every
design toward showing less rather than loading less. **Both figures are stated wherever the budget
is:** at 20 August 2026 the landing page costs **269 KB** on the initial load and **447 KB** with
every carousel panel fetched.

**PF2 — Every `<img>` carries `width` and `height` or an `aspect-ratio`.** Layout shift is a defect,
not a taste.

**PF2a — A photograph is served as AVIF with a JPEG fallback**, at three widths and one respectively,
through `<picture>` and `srcset`. Never a modern format without a fallback, and never a full ladder
in both formats.

_Rationale:_ AVIF is roughly half the weight of JPEG at matched quality on photographic content,
which is the difference between meeting PF1 and not. A browser that cannot decode AVIF is a small
minority which does not also need a choice of widths. **This rule does not reach the signature**,
where §7 A4 forbids anything but PNG and JPEG for a different reason entirely.

**PF3 — Images below the fold are `loading="lazy"`; the largest above-the-fold image never is.**

_Rationale:_ lazily loading the element that is the Largest Contentful Paint delays the metric it
defines.

**PF4 — Fonts are subset, `woff2`, self-hosted, preloaded, and declared `font-display: swap`.** At
most two faces, and a real fallback stack behind each.

**PF5 — Nothing blocks the first paint that does not have to.** Script is `defer` or `type="module"`
unless it must run before paint, and the one thing that legitimately must — a theme decision that
would otherwise flash — is a few inline lines, not a file.

---

## 9. Security and privacy

**SE1 — No secret is ever committed.** No token, no key, no `.env`, no password-bearing URL. A
secret that has been committed is compromised: rotate it, and do not imagine that deleting the file
undoes it, because the history is public.

**SE2 — A strict Content Security Policy, and D3's no-third-party rule is what makes it possible.**
Default to `self`, no `unsafe-inline` for script, and an explicit list for anything else.

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;
frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

**SE3 — The security headers are set, and they are set in one place.** `Strict-Transport-Security`,
`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, a restrictive
`Permissions-Policy`. On Vercel that place is `vercel.json`.

**SE4 — Every external link carries `rel="noopener"`.** `noreferrer` too, unless there is a reason
the destination should know where the visitor came from.

**SE5 — Collect nothing.** No analytics, no cookies, no local storage of anything about the visitor,
no form that submits anywhere, unless the principal has asked for it explicitly. Anything that would
require a cookie banner is a stop-and-ask.

_Rationale:_ a site that collects nothing has no privacy policy to get wrong, no consent flow to
implement, no processor agreement to sign and nothing to breach. That is a design position, and it
is cheaper than every alternative.

---

## 10. Verification

**V1 — Look at it.** Every change is loaded in a browser and looked at, at a narrow viewport and a
wide one, before it is called done. The console is clean: no error, no warning, no failed request.

_Rationale:_ a static site has no test suite standing between a plausible change and a broken page.
Looking is what replaces one, and it is not optional because it is manual.

**V2 — Follow the links.** Every link the change touched, and every link on a page it touched.
A 404 introduced by a change is invisible to its author and obvious to a visitor.

**V3 — Test the thing you claim to have fixed, in the state it was broken in.** Reproduce the defect
first, then show it gone.

**V4 — Check it with script disabled**, or write down exactly what is lost. S2 is the rule; this is
how it is verified.

**V5 — Where a check can be automated, automate it rather than adding it to this list.** Then record
the tool in [`CHARTER.md`](CHARTER.md) §3, only after it has been pointed at a deliberate violation
and seen to fail.

_Rationale:_ a manual checklist decays into a formality, and the honest response to noticing that is
to remove items from it by building them, not to add a line asking people to try harder.
