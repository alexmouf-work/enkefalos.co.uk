# Public copy style

**Status: in force, 20 August 2026.** The house standard for every word this site shows to a person
who is not building it: page copy, headings, link text, alt text, meta descriptions, error pages,
and anything published under the Enkefalos name.

**The source is Gallagher Specialty's own writing**, not a style invented here: _The P&I Pre-Renewal
Review 2025_. This document is carried across from the Manifest repository, where it was derived from
that publication and has been in force since 18 August 2026. It arrives here because the principal
directed it, and it arrives substantially unchanged, because a house voice that is rewritten per
project is not a house voice.

**Two things about that inheritance, stated plainly.** The source is a marine insurance publication
and the voice is corporate British professional-services. Whether that is the right voice for
Enkefalos is the principal's call and not an agent's: if it is not, this document is amended under
[`CHARTER.md`](CHARTER.md) §7.2, and it is not quietly departed from in the meantime. And §1 assumes
the site speaks as a firm rather than as one person; if Enkefalos speaks in the singular, that is an
amendment, not an improvisation.

**This is not the charter's writing rules.** [`CHARTER.md`](CHARTER.md) §6.5 governs what an agent
writes back to the principal, meaning reviews, findings and commit messages. This governs what the
site says to everyone else. An agent drafting site copy follows this document; the same agent
reporting on that work follows §6.5.

**A note on this document's own prose.** It is an internal standard, not published copy, so it uses
em dashes and code formatting to make its rules legible. Its rules bind the site's copy, not itself.
Do not "correct" this file to comply with the rules it states.

---

## 1. Voice

**Write as the firm, in the first person plural.** "We would advocate", "we think", "our approach".
Never an impersonal passive where a "we" is available, and never a brand voice that refers to itself
in the third person.

**State the position, then the reasoning.** Copy does not build to a conclusion; it opens with one
and then earns it.

**Own a judgement as a judgement.** A view marked as a view is stronger than a hedge pretending to be
a fact.

**Address the reader as a professional peer.** They know their field. Nothing is explained that the
intended reader would find obvious, and nothing is dressed up as simpler than it is.

---

## 2. Register

**Corporate, plain, unhurried.** Full sentences and real paragraphs. The reader is giving this their
attention, and copy that fidgets for it reads as though it has less to say.

**British English throughout:** organised, recognised, centre, licence as the noun.

**No exclamation marks. No slang. No jokes.**

**Contractions are avoided in published copy.** Write "does not", not "doesn't". They are fine in
comments and commit messages, which this document does not govern.

**Never use an em dash. Not once, anywhere.** Where one is tempting, the sentence wants a comma, a
colon, a semicolon, a pair of brackets, or a full stop and a second sentence. This is absolute, and
it is the fastest single tell that copy was not written by a person.

**Never use an emoji.** Not in copy, not in a heading, not in an alt attribute. Icons are inline SVG.

**Foreign or technical terms are used, not glossed.** If a term needs defining for the audience it is
written for, the audience is wrong, not the term.

---

## 3. Structure

**Headings are short and set in capitals.** Two to four words. Capitals are applied by the
stylesheet, so the underlying text stays in sentence case and remains searchable, screen-readable
and correct when copied. The Glasswing section title carried in
[`glasswing-visual-language.md`](glasswing-visual-language.md) §5.3 does exactly this, which is why
the two documents agree without either having to yield.

```html
<h2 class="section-title">Cybersecurity in the age of AI</h2>
```

```html
<h2 class="section-title">CYBERSECURITY IN THE AGE OF AI</h2>
<!-- read aloud letter by letter by some screen readers, and wrong when copied -->
```

**Titles are plain noun phrases.** No leading article, no comma inversion, no participle doing the
work of a verb. "Signature image hosting", not "Hosting your signature images". The title names the
subject; the standfirst says what happened to it.

**Every substantial piece opens with a standfirst:** one sentence, before the body, saying what the
piece concludes rather than what it will cover.

**Bullets carry figures and enumerable facts, never prose.** The argument goes in paragraphs.

**Where a piece is an argument, it is signed.** Someone is answerable for a view.

---

## 4. Formatting

**Use only what a corporate word-processor user uses, and uses often.** Headings, paragraphs, bold,
italic, bullet points, numbered lists and tables. That is the whole set.

**Do not use:** em dashes, code formatting, block quotations, horizontal rules inside a piece, nested
bullets below one level, or any character a person cannot type without looking it up.

**An identifier or a value is written plainly or in bold**, never in a monospaced box. A reference in
a code style tells a reader they are looking at a developer's artefact. In bold it tells them they
are looking at a reference they will use.

---

## 5. Numbers

**Say the figure.** Never "significant", "substantial" or "strong" where a number exists.

**Carry the unit and the currency**, in the form the market uses.

**Keep precision consistent within a table or a series**, and do not round one figure and not its
neighbour.

**Never quote a duration for work not yet done.** No timescales, no effort estimates, no "quick" or
"straightforward". State sequence, dependency and what a piece of work waits on.

---

## 6. Honesty

**Never claim a control, a capability or a credential that does not exist.** Where something is
designed but not built, the sentence describing it says so. This is the charter's rule and it binds
hardest in public copy, because that is where the claim reaches someone who will rely on it.

**Say what is not done, in the same breath as what is.** A capability described without its limit is
a claim the first serious reader will falsify. The signature image hosting in
[`engineering-practices.md`](engineering-practices.md) §7 is the worked case: it is described as
correctable, and the description says in the same section that mail clients cache and proxy images,
so a correction reaches people unevenly rather than at once.

**Attribute what is not ours.** Figures, ratings and third-party data name their source.

**Never state a fact about Enkefalos that the principal has not stated.** What the business does, who
it serves, what it has done, what it is accredited for. This is a stop-and-ask under
[`CHARTER.md`](CHARTER.md) §6.3, and it is the single most likely way for an agent to put an untruth
on this site: a plausible sentence is easier to write than an accurate one, and nothing in the
repository will contradict it.

---

## 7. What not to write

**Each of these is a real correction**, made on the parent project, and each is here because it was
produced once and rejected.

**No decorative metadata line under a title.** Three facts arranged to look considered. Put the date
where dates go.

**No sequence numbering as decoration.** `01 / 02 / 03` down the side of sections that have names
already. A hundred-page document needs navigating; a web page with three sections does not.

**No status chips or pills for words that belong in a sentence.** A small rounded badge reading
"Development" is interface jewellery. If the reader needs to know something, the sentence says it.

**No breezy headings.** "What landed" is a blog talking to itself. Name the thing.

**No summarising footer written in the voice of the author.** The colophon carries the name and the
restriction. Nothing else.

**No claim of ease.** "Simply", "just", "all you need to do".

**No accounting headings over prose.** "What it buys" and "What it costs" set a ledger over a
paragraph and read as a pitch. Name the subject.

**No survival, battle or journey metaphors.** A design is not "taken apart" and does not "survive" a
review; it is rejected, or it is accepted. Work does not "land". Nothing is "on a journey".

**No sentence built on an abstraction the reader has to unpack.** A sentence that asks the reader to
hold three ideas to reach one should be two or three sentences that each carry one.

**A rejected phrase stays rejected.** This list grows as corrections are made, and nothing on it
returns in a synonym.

---

## 8. Worked example

The subject is one of the few things this repository can currently state as fact: that it hosts the
images used in the principal's email signature, and what that does and does not buy.

**Rejected.**

> ## What landed
>
> **Enkefalos · signature images · 20 August 2026**
>
> We've moved all the signature images onto our own domain! No more broken logos - if we ever need to
> update the branding, we can just swap the file and it'll update everywhere automatically.

**In house style.**

> ## SIGNATURE IMAGES
>
> The images in our email signature are served from this domain, so a correction to one of them
> reaches messages that have already been sent.
>
> ### WHY THEY ARE HOSTED HERE
>
> An image attached to an email is fixed at the moment the message is sent. An image linked from a
> web address is fetched when the message is read, so the file behind the address can be replaced
> and every message that points at it shows the replacement. That is the reason to hold these files
> in one place we control.
>
> ### THE LIMIT OF A CORRECTION
>
> A correction does not reach everyone at once. Several mail providers serve remote images through
> their own caches, and some clients do not load remote images at all until the reader allows them.
> A replaced image therefore appears over a period of days, and for a reader who has never allowed
> remote images it does not appear at all.

**What the second one does that the first does not:** it states the position in the standfirst and
then earns it, it explains the mechanism in concrete terms rather than asserting a benefit, and it
gives the limit its own section rather than leaving the reader to discover it. Every heading names
its subject. There is no em dash in it, no exclamation mark, no contraction, and no claim of ease.

**How this entry was produced, and how the next one should be.** It was written from this document
and an ordered list of the points the entry had to convey, and from nothing else. An agent carrying
the context of the work it is describing writes about the work; an agent given only the points
writes for the reader.

---

## 9. The visual language this sits inside

**The words are governed here; the look is governed by
[`glasswing-visual-language.md`](glasswing-visual-language.md).** That document is the visual system
for this site, formalised from Anthropic's Project Glasswing page at the principal's direction.

**Where the two touch, they agree.** Section titles are set in capitals by the stylesheet and stored
in sentence case (§3, and the Glasswing document §5.3). Body copy is set in a serif at a measure of
roughly seventy characters, which is what makes real paragraphs readable rather than dutiful. The
prohibition on decorative metadata lines, status pills and sequence numbering (§7) is a prohibition
on exactly the ornaments the Glasswing page does not use either.

**Where they differ, the visual document governs and this one yields.** The parent project's visual
language is flat: zero radius, zero shadow. The Glasswing system uses radii of 6px to 16px, and this
site follows the Glasswing system. That is a deliberate divergence from the parent repository and
not an oversight.
