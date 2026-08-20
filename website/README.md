# website

**The deployed site.** Vercel's root directory is set to this folder, so `website/index.html` serves
at `https://enkefalos.co.uk/` and `website/signature/strip-green.png` at `/signature/strip-green.png`.

**No build step, no package manager, no dependencies.** Plain HTML, CSS and JavaScript. To work on
it, serve the folder and open it:

```
cd website && python3 -m http.server 8000
```

**Do not add a bundler, a framework or a package manager to make something convenient.** That is a
stop-and-ask under [`../docs/charter/CHARTER.md`](../docs/charter/CHARTER.md) §6.3.

---

## What is here

| Path                | What it is                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| `index.html`        | The whole site. Nine bands, documented inline and in the landing page plan.       |
| `styles.css`        | Tokens then bands, in the order the page uses them.                               |
| `main.js`           | Two behaviours: the scroll reveal and the rotating panel. Both are enhancement.   |
| `vercel.json`       | Headers. Security policy and the cache rules below.                               |
| `assets/`           | What the site itself loads: the photographs and the two font files.               |
| `brand/`            | The mark and the lockup. Referenced externally as well as by this page.           |
| `signature/`        | The email signature strips. **The strictest paths in the repository.**            |

---

## Three rules that are easy to break by accident

**Never move, rename or delete anything under `signature/` or `brand/`.** Those paths are referenced
from email that has already been sent and from anything else that has linked them. A sent message
cannot be edited, so a moved file is a broken image in someone's archive for good. Replace the bytes
at the same path instead. [`../docs/charter/engineering-practices.md`](../docs/charter/engineering-practices.md)
§7 has the whole rule and its limits.

**Never load anything from a third-party host.** No CDN, no Google Fonts, no analytics, no embeds.
Both faces are self-hosted in `assets/fonts/` under the SIL Open Font License, with the licence text
beside each file. The Content Security Policy in `vercel.json` enforces this, so an off-origin
request does not degrade quietly, it fails.

**If you edit the inline script in `index.html`, the CSP hash must change with it.** `vercel.json`
pins that script by `sha256-`. Change one character of it and the script is blocked, which takes the
scroll reveal and the rotating panel with it. Recompute:

```
python3 -c "import re,hashlib,base64;h=open('index.html').read();s=re.findall(r'<script>(.*?)</script>',h,re.S)[0];print('sha256-'+base64.b64encode(hashlib.sha256(s.encode()).digest()).decode())"
```

---

## Caching, and one deliberate departure from the rules

**`brand/` and `signature/` are cached for an hour** with a day of stale-while-revalidate, so that
replacing an image actually reaches people. That is the practices document §7 A2 exactly.

**`assets/` is cached for a day, and is not content-fingerprinted.** A2 says a build asset should
carry a content hash and be cached immutably. **It does not here, and the reason is that A2 assumes
a build step to keep the hash correct.** Without one, the hash is maintained by hand, and the failure
mode of a hand-maintained hash is the worst one available: change the file, forget the rename, and
every visitor holds a stale copy under an immutable header for up to a year. A one-day cache fails
the other way, which is recoverable by waiting.

**This is recorded rather than done quietly**, and it should be revisited the moment a build step
exists, because then A2 applies as written.

---

## Before you push a change

The full list is [`../docs/charter/CHARTER.md`](../docs/charter/CHARTER.md) §5 and §6.6. The ones
this site gets wrong most easily:

- Load the page and look at it, narrow and wide. The console must be clean.
- Check it with JavaScript disabled: all three service panels should be visible, stacked, and
  nothing should be missing.
- Check `prefers-reduced-motion`: nothing should start hidden.
- Every image needs an `alt` and explicit `width`/`height`.
- Every colour pairing needs to clear AA. Measure it; do not judge by eye.
