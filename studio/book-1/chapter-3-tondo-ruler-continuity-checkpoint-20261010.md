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
