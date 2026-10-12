# Book I Chapter 3–5: Tondo ruler continuity checkpoint — 10 October 2026

**Branch:** `fix/book1-ch3-tondo-ruler-identity-20261010`. **Forward target:** Book I Chapter 4, unchanged. **Publication:** branch only; no PR, merge, or deployment confirmed.

## Applied and verified
- `src/content/chapters/book-1-chapter-3.md`: replaces the unverified Lakandula attribution in Ache's dialogue with “Tondo's ruler”; narrative event and character dynamics otherwise preserved.
- `src/content/chapters/book-1-chapter-4.md`: removes Lakandula as a specifically named adolescent-era character; preserves political pressure through Tondo's independent crews, merchants and clerks. Updates the outlined merchant decision without claiming a completed crew booking.
- `src/content/chapters/book-1-chapter-5.md`: removes the named Lakandula from the youth-era departure outline.
- `src/content/characters/lakandula.md`: retains documented 1571 Tondo leadership, withdraws unsupported strong-inference cousin relation and youth-era chronology.

## Current release gate (11 October 2026)
- The `ache.md` cousin relation and early-life overstatement have now been removed or qualified on this branch; the earlier rejection described below is superseded by the verified file diff.
- Draft PR #27 exists and is mergeable at inspection. Review the remaining character, timeline and historical-source links for premature naming, while retaining genuine later 1571 Lakandula references.
- PR #27 has no returned check runs, statuses, reviews or review threads; these empty results do not constitute passing CI. Complete required release validation before merge.
- Chapter 4 Studio manuscript remains separate in draft PR #24. Its merchant shift and dialogue/ending revisions have since been committed there, but it is not public Chapter 4. Keep the forward checkpoint unchanged.

## Evidence and limits
The historical rationale is documented in `studio/book-1/chapter-4-tondo-ruler-provenance-correction-20261010.md` on PR #24: Alfonso (2016), *Historical Bulletin* 50, pp. 31–61, contrasts the unnamed cousin in an Aganduru-attributed speech with Sibunao Lacandola documented in 1571. The speech's original-language provenance is unverified. Malangsi is a conditional reconstruction, not a replacement name. All early private dialogue remains fictional.

**Title decision:** No retrospective Chapter 3 title change. Chapter 4 provisional *The Second Crossing* remains apt, but public title metadata is unchanged. Shared Read Aloud untouched.

## 11 October 2026 — Chapter 3 agency-language verification
- Verified the branch's current public Chapter 3 now reads “the men claiming to collect for Tondo’s ruler,” not a claim that the ruler commissioned them. This preserves uncertainty about their authority. The correction is committed on PR #27 as `fa355e003d0ab5301efdc9754c32d7f41e71fef0`.
- Current PR #27 remains open, 10 commits ahead and 0 behind main, with no returned reviews. The release still requires CI/build and merge checks. The checkpoint on main remains at Chapter 4; no Chapter 4 public prose or title metadata changed.
- Title review: Chapter 3 *The Muslim Way* unchanged; Chapter 4 *The Second Crossing* provisional. Original Aganduru Spanish pages remain unverified, so do not infer an early Lakandula relationship.

## 12 October 2026 — Chapter 2 metadata correction
Commit `2fae627874b4096f9f59350bd3df39c49ef23a9e` removes the stale Lakandula character tag and duplicate related links from Chapter 2. A subsequent branch read confirmed no remaining Lakandula mentions in Chapters 2, 3, or 5; Chapter 4 retains only a caution against assigning the youthful ruler that name. **Q-26 resolved on branch**, while **Q-10/Q-22** remain open until release. The commit returned no CI statuses or PR workflow runs. No main publication or checkpoint advancement is established.

## 12 October 2026 — verified Chapter 2 correction
Chapter 2's current branch file has no `lakandula` occurrence, including frontmatter. Q-26 is resolved on this PR, pending merge to main. PR #27 is still open, 14 commits ahead of main and zero behind, with no reviews or review threads returned. The checked commit has no reported PR workflow runs or commit statuses; this is not a passing build. The correction cannot be called deployed. Keep Book I Chapter 4 as forward target.

## 12 October 2026 — cross-page historical-link audit
- **Q-27 corrected on this branch:** `src/content/events/tondo-encroachment.md` no longer associates the unidentified early ruler with Lakandula. It now describes Aganduru Móriz as later attributed testimony and marks the event `certainty: possible`, a valid value in `src/content.config.ts`. Commits `27fece04` and `8f7cecb6`; the latter fixes an initially invalid `uncertain` certainty value. Current file and PR head re-fetched and verified. Still unmerged.
- **Q-28 UNSAVED:** A separate `update_file` attempt on `src/content/characters/tondo-harbor-clerk.md` was rejected by tool safety checks before execution. Its `related` list still includes `lakandula`. Reinspect and make a genuinely different permitted correction when possible; no owner action established.
- **Q-29 UNSAVED:** The Chapter 4 public prose extraction was prepared from Studio and a publication branch `publish/book1-ch4-second-crossing-20261012` was created, but the content update was rejected by tool safety checks. That branch has been safely fast-forwarded to `8f7cecb6` and currently has zero commits beyond PR #27; no public Chapter 4 PR exists. Recheck the source and permitted publication method before retrying. Do not bypass safety controls.
- **Release:** PR #27 remains draft/open with no reported PR CI statuses or runs at `8f7cecb6`. Chapter 4 forward checkpoint remains unchanged; title `The Second Crossing` remains provisional. Original Aganduru Spanish passage still unverified.
