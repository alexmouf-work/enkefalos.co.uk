# Enkefalos engineering charter

**Version 1.0.0** · 20 August 2026 · a public website and a public asset host

**What this is.** The rules every contributor to this repository works under — agents and humans
alike. Every rule carries the reason it exists, because a rule whose rationale is unknown gets
misapplied at the edges.

**Where it comes from.** This charter is derived from the Manifest engineering charter, version
1.9.0, 18 August 2026, which is itself derived from a named source harvest and a study of four
production codebases. The Manifest charter governs a confidential platform holding a marine
broker's book; this one governs a public website. The two projects share a principal and a house
style, and share nothing else about their risk. **Section 8 records exactly what was carried over,
what was changed, and what was dropped**, so that a reader who knows the parent document can see
the seams rather than guess at them.

**Assumed operating posture.** Everything in this repository is public the moment it is pushed, and
everything the deployment serves is public the moment it is built. There is no staging grace period
in this document, and no "nobody will look at it yet".

**What this project is.** The website for Enkefalos Holdings Ltd, served from `enkefalos.co.uk` on
Vercel, and the host for the images used in the principal's email signature. What the business is,
what the site is for, and what has been decided are in [`../OVERVIEW.md`](../OVERVIEW.md). **What
that document records is short, and it is the whole of what an agent may state as fact.** Anything
beyond it is a stop-and-ask under §6.3, not a gap to be filled with a plausible sentence.

---

## 1. Prime directives

Five, in strict priority order. **When two conflict, the lower number wins.** This ordering is the
charter's only tie-breaker, and it is not advisory: a change that buys convenience with a broken
published URL is wrong even when the convenience is real.

1. **Confidentiality.** Nothing private reaches this repository or its deployment. No secret, no
   token, no personal data belonging to anyone other than the principal, no client name, no draft
   that was not meant to be read. The repository is public and the site is public; there is no
   third place where something can sit unseen.
2. **Truth.** Everything the site says is true, and honest about what it does not claim. A wrong
   statement is bad; a wrong statement presented with confidence is worse, because this site is the
   principal's public word about their own business.
3. **Durability.** A URL that has been published never breaks. An image linked from an email
   signature that has already been sent, a page someone has bookmarked, a link another site points
   at — these are promises already made, and they are kept by adding and redirecting, never by
   moving or renaming.
4. **Simplicity.** The simplest thing that satisfies 1, 2 and 3. Complexity accumulates in
   increments nobody objects to individually, and a personal site is where that is least excusable
   and most tempting.
5. **Velocity.** Ship. Last, but present: a charter that makes nothing shippable has failed
   differently.

### Accessibility and performance are floors, not directives

They are absent from the ordering because they never trade against anything: a page that fails the
floor does not ship, so there is no conflict for the ordering to resolve. The floor is **WCAG 2.2 AA**
and the performance budgets in
[`engineering-practices.md`](engineering-practices.md) §8. A change that cannot meet them is not a
change that ships with a note; it is a change that is not finished.

### Accountability is a precondition, not a directive

A named human is answerable for every change merged here, and must be able to explain it without the
agent that wrote it. This is not in the ordering because it never trades against anything — it is the
condition under which the ordering means anything at all.

### Worked example — a real conflict, resolved by the ordering

**The situation.** A signature image published at `/sig/logo.png` has been in outgoing mail for
three weeks. Someone notices it carries a personal mobile number that should not be public.

**The conflict.** Directive 1 requires the number to stop being served. Directive 3 requires the URL
to keep working, because every email already sent points at it and a deleted file renders as a
broken image in all of them, permanently.

**The resolution.** Directive 1 outranks directive 3, so **the number stops being served, today,
whatever it costs the URL.** But the ordering decides the conflict, it does not choose the method:
the correct action is to **replace the bytes at the same path** with a corrected image, which
satisfies both directives at once and repairs every email already sent. Deletion is the fallback for
when no corrected image can stand in the same place, and it is taken knowingly, with the broken
images accepted as the price.

**What the ordering forbids.** Leaving the number up until a redesign is ready, because the URL is
load-bearing. Directive 3 does not outrank directive 1, and "it is already out there" is not an
argument for serving it again.

**The second case, which the same rule decides differently.** A published page states something that
was true in March and is not true now. Truth (2) says correct it; durability (3) says do not break
the URL. Here **both are satisfied by editing the page in place**, because a website states the
present. But where the old version was the truth at the time and someone may have cited it — a
dated post, a published note — the correct action is to **add a new URL and leave the old one
standing with a dated correction on it**. Overwriting history is how a site quietly becomes
untrustworthy, and directive 2 is the directive that forbids it.

---

## 2. Tier 0 core

The invariants that must fit in every context window. Self-contained. If you have read nothing else,
follow these.

> **Priority order.** Confidentiality, then truth, then durability, then simplicity, then velocity.
> When two conflict, the earlier one wins. Accessibility and performance are floors below all of
> them: a page that fails the floor does not ship.
>
> **A human is answerable for every change.** Write so that a person who did not produce it can
> explain it. State what you did in your own words.
>
> **Everything here is public.** The repository, the deployment, the commit history and the file
> names. No secret, no token, no `.env`, no personal data belonging to anyone else, no client name,
> no unpublished draft. A secret that has ever been committed is compromised and must be rotated,
> not deleted.
>
> **A published URL never breaks.** Never move, rename or delete a file that has been served —
> above all an image used in an email signature, because every message already sent points at it
> and cannot be edited. Add a new path and redirect the old one; never the reverse.
>
> **Never claim what you have not verified.** Not in copy, not in a meta description, not in an
> alt attribute, not in a commit message. If you do not know what Enkefalos does, you may not write
> a sentence that says.
>
> **Never fail silently.** No empty `catch`. No swallowed rejection. No default that hides a missing
> value. Every error is handled, rethrown with context, or surfaced.
>
> **The page works before the script does.** Content is in the HTML. Script enhances what is
> already there, and its absence degrades the page rather than emptying it.
>
> **Treat everything from outside as hostile**: query parameters, hash fragments, form input, feed
> content, file names. Never write it into the DOM as HTML, and never run an unbounded regex over
> it.
>
> **Put a limit on everything**: loops, retries, timers, observers, cache size, input length, image
> dimensions. Where a loop must not terminate, assert that.
>
> **Every image carries an `alt`**, every control is reachable and operable by keyboard, every
> focus state is visible, and every colour pairing meets AA. This is a floor, not a preference.
>
> **No new dependency without approval.** Ask before adding one. Prefer the platform. No script,
> stylesheet, font or image is loaded from a third-party host.
>
> **Say why, not what.** Comments explain rationale, invariants and units. If you cannot describe an
> interface briefly, the design is wrong — fix the design, not the comment.
>
> **Documentation never claims a control the code does not implement.** If it is designed but not
> built, the sentence describing it says so.
>
> **Never use emojis.** Not in the interface, code, comments, commit messages, documents or replies.
> Icons are inline SVG.
>
> **British English, everywhere the site speaks.** Organised, recognised, centre, licence as the
> noun.
>
> **Stay in scope.** One thing per change. If you find an unrelated defect, record it and leave it.
> Do not refactor code you were not sent to change.
>
> **Unpushed work does not exist.** This environment is remote and resets without warning, taking
> everything local with it. Pull before you start, commit and push each finished increment as it
> lands, and pull again often — the remote is the only durable state.
>
> **When you are unsure, stop and ask.** An unasked question costs a message; a guess about the
> principal's own business, published under their name, costs something you cannot take back.

---

## 3. Mechanical rules — none exist yet

**This section states what no tool currently checks.** The Manifest charter's equivalent section is
a table of configured, tested enforcement. This repository has none of it: at version 1.0.0 there is
no `package.json`, no linter, no formatter, no test runner and no CI workflow. Writing a table here
that implied otherwise would break the Tier 0 rule about claiming controls that do not exist, in the
document that states the rule.

**What follows is therefore a specification, not a summary.** Each row names a rule from this
charter or from [`engineering-practices.md`](engineering-practices.md) that belongs to a tool rather
than to a reviewer, and the tool it belongs to. Until a row is built, **that rule is review's job and
will decay** — which is the honest description of every unenforced rule in every codebase, stated
here rather than discovered later.

| Concern                       | Intended authority                              | Built? |
| ----------------------------- | ----------------------------------------------- | ------ |
| Formatting                    | Prettier, with a committed config                | No     |
| Lint                          | ESLint, warnings as errors                       | No     |
| Secret scanning               | A scanner over the full history, not the tree    | No     |
| Link integrity                | A crawler proving every internal link resolves   | No     |
| Published-asset permanence    | A check that no file under the published asset directory is deleted or renamed by a diff | No |
| Accessibility floor           | axe or equivalent, failing the build on a violation | No  |
| Performance budgets           | Lighthouse CI against the budgets in the practices document | No |
| Third-party requests          | A check that the built output requests nothing off-origin | No |
| No emojis                     | A grep over the working tree                     | No     |
| Commit authorship             | A check that `user.email` is the principal's, not an agent's | No |

**Two rules govern this section when it does start filling in.**

- **Formatting is never a review topic.** If a reviewer is discussing whitespace, a config is
  missing.
- **Nothing is written into this table before it has been seen to fail.** A rule stated here that
  has never been pointed at a deliberate violation is a rule nobody has tested, and the Manifest
  project found three of its own checks silently matching nothing the first time it looked.

---

## 4. Design rules

**They are not in this document.** They are in
[`engineering-practices.md`](engineering-practices.md), which is normative and carries the same
weight as this file: module boundaries, naming, error handling, comments, dependencies, resources,
assets and URL permanence, accessibility, performance and verification, each with a rationale, an
example and a counterexample.

Two documents stating the same rule drift, and the copy that drifts is the one people read. This
section exists only to say where the rules are.

---

## 5. What "done" means

A change is done when **all** of the following hold. Not most.

- **It renders.** The affected pages have been loaded in a browser and looked at, at a narrow
  viewport and a wide one, in both light and dark rendering if the site supports both.
- **The console is clean.** No error, no warning, no failed request.
- **Every link resolves**, including the ones the change did not touch on pages it did touch.
- **No published URL moved.** If one had to, the redirect is in place and was followed once by hand.
- **The accessibility floor holds**: alt text on every image, a visible focus state on every
  control, keyboard operation of anything interactive, AA contrast on every pairing introduced.
- **The performance budget holds** for the affected pages.
- **The page still works with script disabled**, or the change documents precisely what is lost.
- **Nothing in the diff is a secret**, and nothing in the diff is personal data belonging to anyone
  but the principal.
- **The commit message is in the principal's words about what changed and why.**

_Rationale for verifying rather than reasoning:_ a static site has no test suite standing between a
plausible change and a broken page. The list above is what replaces one, and it is a list of things
observed rather than things concluded. Where automated equivalents land, §3 records them and this
list defers to them.

---

## 6. Contributor protocol for agents

The governing rule is the precondition in §1: **a named human is answerable for every change, and
must be able to explain it without you.** Everything below serves that.

### 6.1 Read before write

Before editing, read this charter's §1 and §2, the relevant part of
[`engineering-practices.md`](engineering-practices.md), and — if you are writing anything the site
shows to anyone — [`public-copy-style.md`](public-copy-style.md) in full. Then read what you are
about to change:

- **A file under 500 lines: in full**, not the region you are editing.
- **A file above 500 lines:** its exported interface, the region you are changing, and every place
  that references what you are changing.

State in the change description which files you read in full.

_Rationale:_ confidently reasoned partial context is the most expensive kind of wrong. The bound
exists because the unbounded version of this rule is untrue the first time a file is four thousand
lines long, and a checklist carrying one box everyone ticks falsely gets skimmed entire.

### 6.2 Scope discipline

One thing per change. No drive-by refactors, no opportunistic renames, no reformatting of untouched
files. If you find an unrelated defect, **record it and leave it**.

_Rationale:_ a diff that does two things cannot be reviewed for either, and the human who is
answerable is reviewing on a budget.

### 6.3 Stop and ask — mandatory triggers

Stop and ask the principal, in every one of these cases. Do not proceed on a best guess.

- **A new dependency** of any kind, including a development dependency.
- **A statement of fact about Enkefalos** — what it does, who it serves, what it has done — that
  goes beyond [`../OVERVIEW.md`](../OVERVIEW.md) §1 or what the principal has given you in the same
  session. **Naming a client in published copy is a separate stop-and-ask** even where the
  relationship is recorded, because publishing it is a commercial decision and possibly the client's
  to make.
- **Moving, renaming or deleting anything that has been published**, above all an image under the
  email-signature asset path.
- **Anything that changes a URL**, including a route, a redirect, a canonical tag or a file name.
- **Adding a request to a third-party host**: a font, an analytics beacon, an embed, a CDN script.
- **Anything that collects, stores or transmits a visitor's data**, including a contact form, and
  including anything that would require a cookie banner.
- **Adding a build step, a framework or a package manager** to a site that has none.
- **Two charter rules conflict and the §1 ordering does not settle it.**
- **The charter is silent and the decision is structural** — a URL scheme, a directory layout, a
  content model, anything a later change would have to live with.
- **You are about to write documentation asserting a control**, and you have not verified it exists.
- **Anything outward-facing**: opening a pull request, posting a comment, deploying to production,
  sending anything to a third party.

### 6.4 When the charter is silent

In order: follow the parent document, the Manifest engineering charter, where its rule transfers;
failing that, choose the most reversible option — judged by three proxies, in order: **no URL
changes**, **no new file that must be served**, **fewest places that would have to change to undo
it**; then record the decision and its reasoning in the change description. If the decision is
structural, §6.3 applies instead — stop and ask.

The proxies exist because "easiest to delete later" is not decidable by two people who disagree, and
a tie-breaker that does not break ties is not one.

Never invent a rule and present it as the charter's. If you believe a rule is missing, propose an
amendment under §7.2.

### 6.5 Writing

**Carried from the Manifest charter §6.5 substantially unchanged**, because it governs how an agent
writes to this principal, and the principal is the same person.

Describe your change in your own words, plainly, and do not paste unreviewed generated prose into a
commit message or a pull request body. Commit subjects are lowercase, imperative, scoped to an area,
and under 60 characters: `signature: replace the wordmark at the published path`. The body says why.
A pull request description is not a substitute for a commit message, because it is not stored in the
repository and is invisible to `git blame`.

**Reviews, reports and findings: one line each.** A review, an audit, a status report or any list of
findings gives every item **one line** — the claim, where it lives, what it costs. Never a paragraph
each. The reasoning goes in the artefact the line points at; the line points. A reader holding twelve
findings must be able to see all twelve at once, because the value of a review is the shape of the
whole list, and prose destroys it.

**The line is the whole item.** One line per item means the line is all there is: a bold lead and a
clause, with no second sentence under it, no supporting quotation, no worked explanation, and no
connective prose between items. Cut items as well as words — an item earns its line only if it
changes what the reader does. This governs **everything written back to the principal**: reviews,
audits, proposals, plans, recommendations and answers alike.

> **Example.**
>
> **Moved a signature image without a redirect** — every email already sent now shows a broken
> image (§1 directive 3).
>
> **Counterexample.**
>
> **Finding 1 — the signature image was moved, which the charter forbids.** "A URL that has been
> published never breaks", and the rule is specifically about email signatures because a sent
> message cannot be edited. What this means in practice is…

**Open a review with a horizontal rule.** Any review, report or set of findings is preceded by a
`---`, so it is visibly separated from the work that produced it — the commands run, the files
touched, the running commentary. The rule is where the doing stops and the reporting starts.

**Name things by their name.** Documents and pieces of work are referred to in prose by name, with
any identifier in brackets on **first mention only** and the name alone thereafter. The moment you
are writing sentences, an identifier is an index, not a word.

**A reference carries its own meaning.** If the reader would have to open another document to know
what a line is asking of them, the line is unfinished. Write out the substance — the actual decision,
the actual choice, the actual thing being asked — in the line itself. This binds hardest in a
next-steps section, where the reader is being asked to act.

**Close a review with what to do next.** Every review, report or findings list ends with its own
clearly headed section naming the work that follows, in the order it should be taken, one line each,
each carrying a **very short** justification — a clause, not a sentence, never a paragraph.

**Never quote a duration for work not yet done.** No timescales, no effort estimates, no "quick",
"just" or "should be straightforward". State sequence, dependency and what a piece of work waits on.

**Where it yields.** When the principal asks for full detail, or the artefact is a document rather
than a reply, write the document properly. The rule binds the reply, not the repository.

**Copy the site shows to anyone else follows the public copy style.** Everything above governs what
an agent writes _back to the principal_. What the site says to a visitor — page copy, headings, alt
text, meta descriptions, error pages — follows [`public-copy-style.md`](public-copy-style.md)
instead. The two never apply to the same words: an agent drafting site copy follows that document,
and the same agent reporting on the work follows this section.

**Commits are authored by the principal, not by the agent.** `user.name` and `user.email` name the
answerable human, and every commit made in this repository carries that name in its author line. No
agent name, no agent address, and no `Co-Authored-By` trailer naming a model.

> **Example.**
>
> `Author: Alexander Moufarrige <alexmouf.work@gmail.com>`
>
> **Counterexample.**
>
> `Author: Claude <noreply@anthropic.com>`
>
> `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`

**This is not a claim that an agent did no work, and it removes nothing from the record.** The commit
body still says what changed and why, in the agent's own words, as the rest of this section requires.
The author line records the person answerable for the change, which is a different question from who
typed it.

### 6.6 Pre-submit self-review checklist

Copy this into the change description and tick it honestly. An unticked box is a stop-and-ask, not a
footnote.

- [ ] I read what §6.1 requires, and the change description names the files I read in full.
- [ ] This change does one thing.
- [ ] Nothing in this diff is a secret, a token, or personal data belonging to anyone but the
      principal.
- [ ] No published URL moved, was renamed, or was deleted — or a redirect is in place and I
      followed it once by hand.
- [ ] Every factual claim in the copy I wrote is one the principal has stated or the repository
      already records.
- [ ] No `catch` is empty; every error is handled, rethrown with context, or surfaced.
- [ ] Nothing from a query string, a hash, a form or a feed is written into the DOM as HTML.
- [ ] Every loop, retry, timer and observer this change adds has a bound.
- [ ] Every image has an `alt`, every control is keyboard-operable, every focus state is visible,
      every colour pairing meets AA.
- [ ] The performance budget holds for the affected pages.
- [ ] Nothing loads from a third-party host.
- [ ] The page still works with script disabled, or the change description says exactly what is lost.
- [ ] No new dependency, or the principal approved it explicitly.
- [ ] I loaded the affected pages and looked at them, narrow and wide, and the console is clean.
- [ ] No documentation in this change claims a control that does not exist.
- [ ] The commit message is in my own words, authored as the principal, and the change description
      lists anything I could not fully justify.

### 6.7 Durable state — pushed work is the only work

The environment this repository is built from is **remote and ephemeral: it resets without warning**,
and when it does, the working tree, local commits and everything else that lives only on the machine
are gone.

Four habits follow, and they are obligations, not preferences:

1. **Pull before every session**, before reading and before writing. A stale clone is a wrong clone,
   and §6.1's read-before-write is worthless if what was read is not what is there.
2. **Commit and push in small, complete increments, as each one lands.** A finished piece of work
   sits unpushed for exactly as long as it takes to verify it — never until "the end of the
   session", because the session is not guaranteed to have an end you choose.
3. **Pull frequently during long work**, and always before starting a new piece.
4. **When a push is refused, integrate and re-verify before pushing again.** Pull, resolve, check,
   then push. Never force-push over another session's work.

The test of compliance is blunt: **if the environment vanished right now, what would be lost?** If
the answer is more than the piece currently in progress, the rules above are not being followed.

---

## 7. Meta

### 7.1 Version and changelog

**Current version: 1.0.0.** Semantic: major for a changed prime directive or priority order, minor
for a new or removed rule, patch for wording that does not change meaning.

| Version | Date       | Change                                                                                                                                                                                                                                                                                        |
| ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0.0   | 2026-08-20 | First issue. Derived from the Manifest engineering charter 1.9.0 at the principal's direction, with the prime directives rewritten for a public website and a public asset host, the mechanical rules section stated as unbuilt, and the design rules moved to a companion document. §8 records the derivation. |

### 7.2 Amendment process

1. An amendment is its own commit, touching this file and the changelog above, and nothing else.
2. It cites a source or a specific incident. **"It seems better" is not grounds** — the rule that
   keeps a mistake out is never the one someone preferred, it is the one someone has already been
   burned by.
3. It states the rule's class: mechanical, reviewable, or a prime directive. **A mechanical rule is
   not added here** — it is added to a config, and recorded in §3.
4. It carries an example and a counterexample **in the medium the rule governs** — markup or code
   for a rule about code, the prose form itself for a rule about writing. A writing rule
   demonstrated in code demonstrates nothing.
5. A new rule gets an adversarial read before it lands: how would two competent agents read this
   differently, and would it be routinely violated? A rule that will be routinely violated is
   corrosive to every rule around it, and is deleted rather than weakened.
6. The principal approves. Agents propose; they do not amend.

### 7.3 Exceptions

An exception is justified only by a platform limitation with no workaround, a measured requirement
the rule makes unachievable, or an external constraint. It is **not** justified by deadline
pressure, by inconvenience, or by a rule being unfamiliar.

Every exception carries an identifier, the rule it suspends, its exact scope, the justification, an
expiry date, and the approving human, and it lives in an `EXCEPTIONS.md` beside this file. **That
file does not exist yet, and is created by the first exception rather than in advance** — an empty
register invites entries.

Two exceptions against the same rule are evidence the rule is wrong. The third is not granted; the
rule is re-examined.

---

## 8. Derivation from the Manifest charter

**Recorded so the seams are visible.** A reader who knows the parent document should be able to see
what changed and why, rather than reverse-engineering it from the differences.

### 8.1 Carried over substantially unchanged

The **priority-ordered directives as a mechanism**, including the rule that the lower number wins and
the requirement for a worked example resolving a real conflict. **Accountability as a precondition
rather than a directive.** The **Tier 0 core** as a self-contained block that fits in a context
window. **Never fail silently**, **treat external input as hostile**, **put a limit on everything**,
**say why not what**, **no new dependency without approval**, **documentation never claims a control
the code does not implement**, **stay in scope**, **unpushed work does not exist**, **when unsure,
stop and ask**. The whole of the **contributor protocol** — read before write, scope discipline,
stop-and-ask triggers, the silence procedure, the writing rules, the checklist, durable state. The
**amendment process** and the **exceptions** discipline. **No emojis.**

### 8.2 Changed

**Directive 1 changed meaning.** In Manifest, confidentiality means Gallagher-private data must not
reach a server that could read it, and the enemy is an honest-but-curious operator. Here it means
nothing private may reach a repository and a deployment that are both public by construction, and
the enemy is an accident. Same word, different mechanism, and the Manifest reasoning about encrypted
planes transfers not at all.

**Directive 2 narrowed from correctness to truth.** Manifest's correctness directive is about a
program computing the right answer and refusing to present a partial one as complete. This site
computes almost nothing. What it does is make public statements under the principal's name, so the
directive that survives is the honesty half.

**Directive 3 is new and has no parent.** URL permanence matters here in a way it does not in
Manifest, because an image in an email signature is referenced by messages that have already been
sent and can never be edited. It is placed above simplicity because a broken image in three years of
correspondence is not recoverable by any later tidiness.

**Performance moved out of the ordering and became a floor**, alongside accessibility. In Manifest
performance is directive 4 because there are stated scale targets that genuinely trade against other
things. Here the budgets are a gate: a page that misses them is unfinished, so there is nothing to
trade.

**Accessibility is new.** Manifest is an internal tool behind an admission system; this is a public
website in the United Kingdom. The floor is stated as a floor rather than a directive for the same
reason performance is.

**The mechanical rules section inverted.** In Manifest it is a table of enforcement that was
observed to fail before it was written down. Here it is a specification of enforcement that does not
yet exist, and says so in its heading, because the alternative would be this charter breaking its own
honesty rule on its own second page.

**The design rules moved to a companion document.** Manifest keeps them in §4 of the charter. Here
they are large enough, and different enough in kind, that keeping them separate is the simpler
arrangement — and the charter is what an agent must hold in context, while the practices are what it
consults.

### 8.3 Dropped, with reasons

**The plane boundary and the layering rules.** There are no private and public planes here, and no
`apps` → `domain` → `platform` stack. A rule with nothing to constrain is noise that teaches agents
to skim.

**The completeness and truncation rules**, EH1 and EH6 in the parent. They exist because a partial
renewal book rendered as complete was the previous build's worst defect. This site reads no paginated
data source, and importing the rule would be cargo cult.

**The assertion density rule**, AS1's average of two assertions per function across `platform/` and
`domain/`. A quantitative floor over modules this project does not have would be met by padding,
which the parent rule itself forbids. What survives is the defensive posture, stated in the practices
document as a rule about validating input at the boundary rather than as a count.

**The test taxonomy and the seven test obligations.** They describe a program with a security core, a
database and a fuzz corpus. What replaces them is §5, a list of things a person observes before
calling a change done, which is what a static site can actually support.

**Key material handling, tenancy in cache keys, and the concurrency rules.** No keys, no tenants, and
no shared mutable state across an `await` in a site that runs a few hundred lines of progressive
enhancement.

**The reference to `plans.csv`, the roadmap and `docs/architecture/`.** Those are Manifest's
artefacts. Where this project needs a ledger, it gets one, and this charter is amended to name it
rather than pointing at another repository's.
