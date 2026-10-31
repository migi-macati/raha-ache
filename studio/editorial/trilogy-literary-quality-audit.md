# Raha Ache — trilogy literary excellence audit and revision queue

**Status:** Phase 1 underway, 31 October 2026, Asia/Manila. This is the consolidated literary-quality checklist, not a publication checkpoint or a claim of 10/10 quality. All 30 core chapters plus Book III bonus Chapters 11–12 remain published. **The previous 7.0/10 was a provisional opinion from a limited sample, not a validated full-trilogy score.** Do not carry it forward as an audited baseline.

**Evidence scope at creation:** Main `4e1ce0d2bfd5cc09edb3b74d1beb04133a41f5d6`. Read the complete consecutive published text of **Book I Chapters 1–3**, and fetched the published text of all 32 chapters to inspect their frontmatter, approximate length, openings and endings. The other **29 chapters have NOT yet received a complete continuous literary reading**. No beta-reader results, live-browser/audio QA or new source collation were performed. Chapter-level findings below are limited to the three closely read chapters.

## Goal and release gates

**Aspirational target:** exceptional international-standard historical fiction across the complete trilogy. No internal numeric score, completed checklist, publication milestone or source-note count establishes a 10/10 outcome. Compare technique with *Wolf Hall* (political psychology), *Shōgun* (sustained narrative momentum) and *A Wizard of Earthsea* (economy and earned transformation); do not imitate their voices or claim award competitiveness.

The six gated phases are:

- [ ] **1. Complete manuscript diagnosis.** Read all 32 chapters consecutively; map each scene's conflict, desire, turning point, irreversible consequence, emotional change, and purpose. Record chapter-specific evidence and score ten dimensions only after the full read.
- [ ] **2. Structural revision.** Fix demonstrated P0 arc/climax defects and P1 repeated conflicts, low suspense, weak reversals and unearned outcomes. Preserve the 10+10+10 core structure and two bonus chapters.
- [ ] **3. Character and emotional revision.** Audit Ache's ambition, contradictions, attachments and transformation; independently track Sulad, Ache's mother, Amaya and other major characters. Test danger, desire, humor, intimacy, betrayal, grief, triumph and surprise where appropriate to the actual story.
- [ ] **4. Prose and historical revision.** Improve voice, rhythm, imagery, subtext and compression; verify period-specific claims and label retrospective testimony, reconstruction and invention. Do not expand merely to equalize chapter lengths.
- [ ] **5. Independent validation.** Solicit actual, consented reader/editor/historian feedback where available; record who read what, completion, confusion, engagement, disagreements and revisions. Never fabricate beta readers.
- [ ] **6. Definitive-edition QA.** Reread the revised trilogy end-to-end; resolve continuity and historical issues; test deployed navigation, mobile readability and audible Read Aloud. Distinguish successful HTML/CI from rendered-live verification.

**Ten assessment dimensions:** originality; historical authenticity/world; prose and distinctive voice; character psychology; plot/suspense; pacing/structure; dialogue/relationships; themes/subtext; emotional impact; cumulative endings and lasting effect. A high average cannot hide a critical failure. For each dimension record textual evidence, strongest counterexample, severity, corrective experiment and result. Scores remain **UNASSESSED** until full coverage and calibrated review; independent validation is a separate field.

**Severity and workflow:** P0 = broken structural arc, causality or climactic payoff; P1 = repeated dramatic engine, weak stakes, thin character agency or emotional consequence; P2 = prose, dialogue, compression; P3 = local polish and metadata. No prose rewrite without an identified issue, a smallest viable scene-level change, a continuity test against adjacent chapters, and a scoped PR with exact-head passing CI before merge. Track before/after literary trade-offs; revert regression. Keep source-note work in `studio/editorial/chapter-historical-notes-packet.md`.

## Whole-trilogy length baseline (metadata/lexical scan, NOT a full read)

Approximate prose-token counts derived from published chapter bodies after removing YAML frontmatter; this is a rough lexical count, not a professional manuscript word-count audit. No word-count quota or scene count is implied.

| Chapter | Approx. words | Chapter | Approx. words |
| --- | ---: | --- | ---: |
| I.1 The Boy Prince | 1,910 | II.1 The Other End of the Cord | 11,071 |
| I.2 The Paddle Against the Wall | 3,187 | II.2 A Place on the List | 11,306 |
| I.3 A Grandson Is Not a Fleet | 2,759 | II.3 When the Water Turns | 11,201 |
| I.4 The Second Crossing | 2,752 | II.4 The Empty Mooring | 12,619 |
| I.5 The Boat That Stayed | 4,139 | II.5 The Price of Passage | 13,045 |
| I.6 No Boat Owed Us | 10,715 | II.6 The Other King's Shore | 15,306 |
| I.7 The Length of a Rope | 6,840 | II.7 The Whale Ships | 10,522 |
| I.8 The Unfinished Edge | 6,766 | II.8 The Names They Kept | 11,205 |
| I.9 Seven on the Board | 7,993 | II.9 The List at Low Water | 12,737 |
| I.10 Before the First Load | 8,977 | II.10 Where the River Lets Go | 11,895 |
| III.1 The Bay That Forgot Him | 11,976 | III.7 The Bank at Low Water | 13,553 |
| III.2 The Door They Left Open | 13,267 | III.8 The Words She Would Not Carry | 12,803 |
| III.3 Where the Wood Stood | 14,285 | III.9 Three Knots | 13,440 |
| III.4 What the Bank Could Keep | 15,572 | III.10 Before the Water Turned | 11,022 |
| III.5 Two Short Cuts | 14,622 | III.11 bonus The Foreigners Return | 12,686 |
| III.6 The Third Strip | 12,853 | III.12 bonus The Roof After Rain | 12,352 |

Approximate totals: **Book I 56,038**, **Book II 120,907**, **Book III including bonuses 158,431**, **trilogy 335,376**. Book I Chapters 1–5 total about **14,747**, compared with **41,291** for Chapters 6–10. This is a material change in narrative scale and potential pacing, not proof that the opening needs expansion. The trilogy's total length makes repeated procedural beats and weak macro-level escalation especially costly. Evaluate narrative return per scene before making any cut or addition.

## Completed consecutive close reading: Book I Chapters 1–3 (3/32)

### I.1 — *The Boy Prince*

**Verified causal arc:** Ache and Sulad wager on a quick river turn; a cargo boat breaks loose; Ache attempts rescue but ignores Sulad's warning to lower the sail fully; the rescue saves the child while damaging boats, fishing gear, a porter's passage and a rower's hand. Ache promises restitution without knowing what he owns. His mother orders a hearing; the chapter ends with Ache asking the fisherman to show him the torn net and Sulad not claiming the rice cakes.

**Strength to protect:** Fast comic opening turns into genuine bodily and economic harm. The child's rescue is real and cannot simply be erased by the harm; Sulad's fear and the mother's fear create emotional counterweights. The final unclaimed wager has earned resonance.

**P1 hypothesis RA-LIT-01:** Ache's mother supplies an explicit explanation of political responsibility immediately after the accident (the 'separate river' exchange). Read the later trilogy for recurrence of authority figures delivering thematic corrections after each mistake. **Acceptance:** retain her fear and the concrete restitution hearing, but test whether Ache's choices and relationships can carry more of the lesson without recurring declarative dialogue. Do not rewrite yet.

### I.2 — *The Paddle Against the Wall*

**Verified causal arc:** The hearing gives separate claims to the fisherman, porter, cargo owner and injured rower's sister. Ache pledges his own ornament and labor, while the injured rower's lost livelihood remains unsettled. Tondo's messenger offers a one-season shared tally arrangement; Ache challenges its future political implications. A private exchange with his mother complicates his idealization of his dead father. Ledger inspection shows uncertain collectors and crew marks; Ache resolves to investigate who gives orders in Maynila's name.

**Strength to protect:** The sister places her brother's paddle against the wall and refuses a premature settlement. Her unanswered question about how long the hand will heal gives the scene a human cost that no tally can settle. The mother's public mistake about Ache's father and subsequent private apology complicate her authority. Tondo's proposal is attractive to merchants for intelligible reasons.

**P1 hypothesis RA-LIT-02:** The chapter repeatedly explains political trade-offs through mother/son questions and aphoristic answers ('Which boundaries?' and the ensuing sequence). Test whether the conflict is dramatized strongly enough by the merchant, messenger and injured family, and whether the mother has a privately costly decision beyond tutoring Ache. **Acceptance:** an editor can state each party's incompatible desire without relying on explanatory dialogue; retain the mother's apology and the unresolved injury.

### I.3 — *A Grandson Is Not a Fleet*

**Verified causal arc:** After partial restitution and continued tally inspection, Ache accompanies Ula upriver rather than confronting Tondo collectors. Ula's gathering reveals religious practice and everyday maritime preparation; an unnamed Malay-speaking captain punctures Ache's assumption that kinship guarantees passage or command. Sulad refuses to surrender his mother's protective cord for Ache. Back in Maynila, a Tondo clerk explains that crew marks can help locate missing people but also expose rowers to coercive claimants. Ache asks who may inspect the board; the clerk has not answered at the ending.

**Strength to protect:** The captain's limited knowledge and practical concern with food/prices make Brunei tangible without promising a fleet. Sulad's cord has independent emotional stakes. The clerk's dual-use record is a genuine dilemma, not a simple villain's instrument. The opening's partial restitution and Tondo's operational arrival preserve continuity from I.2.

**P1 hypothesis RA-LIT-03:** Ula repeatedly articulates the thematic lesson for Ache ('the river ... drowns everyone equally'; the warning about ruling an empty shore). Combined with I.1–2, this may produce a predictable tutor/correction pattern. **Acceptance:** across the next seven chapters, record how often Ache learns through another person's speech versus independent, surprising or irreversible consequences; revise only if repetition is substantiated. Preserve Ula's humor and spiritual independence.

**P1 continuity/character gate RA-LIT-04:** The clerk's unanswered question about access to crew marks is a specific political and personal promise. Track whether subsequent chapters develop the danger of searchable labor records rather than merely repeating that records can be misused. Track Sulad's cord as a relationship stake, not only a symbol of tolerance. **Acceptance:** map exact later callbacks and consequences; no invented resolution.

**P2 prose gate RA-LIT-05:** Opening chapters are brisk and voice-driven, with recurring sharp question-answer dialogue. Check the full trilogy for overreliance on short pedagogical exchanges, repeated physical motifs (cords, baskets, knots, tallies, jars), and uniformly modest closing gestures. **Acceptance:** identify actual repetition and show a stronger alternative before changing any sentence; retain meaningful motif recurrence.

**No confirmed P0 defect yet.** These are hypotheses, not verdicts or permission to inflate the opening chapters. A reader should be able to disagree with each proposed revision based on the text.

## Next execution order

1. [ ] **I.4–I.6 consecutive close read**, resolve I.1–3 promises: injured rower, fishing stakes, Tondo clerk and crew-list access, Ula's messenger, Sulad's independent decision and first passage. Update this single queue with scene-level findings, not an additional run log.
2. [ ] **I.7–I.10 close read**, score Book I's central conflict and Chapter 10 resolution, record repeated dramatic patterns.
3. [ ] **II.1–II.10 close read**, especially Sulad/Laila presence, Hamzah/Nasir consequences, Loue, 1521 capture and return decision. Track historical-source boundary and chapter-length value.
4. [ ] **III.1–III.10 close read**, verify whether the final core chapter resolves the promised Maynila/Tondo conflict and whether domestic restitution has enough accumulated emotional force. Do not infer failure from its closing paragraph alone.
5. [ ] **III.11–III.12 close read**, distinguish historical testimony from invention and evaluate colonial arrival, death and Awi's aftermath.
6. [ ] Consolidate ten-dimension evidence and calibrated assessment; promote only confirmed defects to P0/P1 revision PRs; invite independent validation when feasible.

**Publication/QA boundary:** The source-note packet currently has structured notes for 22/32 chapters. Rendered live-page behavior and actual audible Read Aloud remain unverified. Do not change the release checkpoint to reflect this audit. This queue is editorial and should remain separate from the historical-notes queue and the automation's release-status JSON.
