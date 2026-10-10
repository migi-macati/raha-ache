# Raha Ache chapter-cycle unblock queue

Updated 2026-10-10, Asia/Manila. Studio workflow note, not public Novel content.

## Operating rule
Continue research, editorial planning, drafting, retrospective continuity review, and permitted GitHub actions when one mutation is rejected. A rejected action blocks only that exact operation; it does not revoke general publication authority. Never bypass a safety control, repeatedly retry an identical rejected call, or treat a user's message “Unblock” as technical authorization to override platform controls.

## Queued checks / actions
- **Q-01 — Chapter 4 prose reconciliation:** Existing working draft on `draft/book1-ch4-encroachment-20261009` and independently developed Studio PR #24 (`studio/book1-ch4-source-and-prose-review-20261009`). Compare content and choose one canonical draft before any merge; do not overwrite either concurrent line.
- **Q-02 — Chapter 3 alternate draft:** PR #15 remains draft; compare against canonical published Chapter 3 and retain useful material only through deliberate revision, not blind merge.
- **Q-03 — Chapter 3 reader-facing editorial note:** PR #22 remains draft. Verify whether intervening merged changes already removed the note before deciding whether to close or merge.
- **Q-04 — Historical identity continuity:** PR #27 is draft. Review its evidence and affected character/Chapter 3 pages before integrating, separately from Chapter 4 publication.
- **Q-05 — Chapter 4 publication gate:** Research/prose PR #24 remains draft and mergeable as checked on 10 October. Do not publish a reader-facing Chapter 4 until scene, source, chronology, content-link, Read Aloud, and CI checks pass.
- **Q-06 — Previous mutation safety rejections:** A multi-replacement Chapter 4 edit and an edit to the mother's entrance were rejected before execution. Their changes are proposals, not committed revisions. Continue with other work; revisit only through a newly scoped, independently legitimate action if permitted.

## When user says “Unblock”
Reinspect main, branch heads, PRs, checks, current feedback, and checkpoint. Report which queue entries are already resolved, which are actionable, and which require user approval or direct GitHub action. Attempt only allowed actions. Do not claim a rejected operation was executed.

## Checkpoint
`.automation/raha-ache-chapter-cycle.json` currently says lastCompleted `book-1-chapter-3`, nextChapterId `book-1-chapter-4`. No retroactive edit or Studio merge advances the checkpoint.

## Unblock review — 2026-10-10
- Main is `10542d33a1167754490e8ed5bd1b74d6548eb2d7`; GitHub Pages workflow `38026064553` completed successfully for that SHA. This confirms build, not rendered-page inspection.
- Q-01: PR #24 contains a later second-pass Chapter 4 Studio draft; treat it as canonical candidate, while preserving the earlier draft branch for comparison. Do not auto-merge a reader-facing chapter.
- Q-02: PR #15 is draft and has merge conflicts (`dirty`); retain for comparison only.
- Q-03: RESOLVED ON MAIN. Chapter 3 now ends with the clerk's hesitation and has no appended editorial heading. PR #22 is redundant; avoid merging it. Closing it is optional cleanup.
- Q-04: PR #27 is draft and mergeable; historical identity correction needs substantive review before merge.
- Q-05: PR #24 is draft and mergeable; Studio content is not Chapter 4 publication. The checkpoint still points to Chapter 4.
- Q-06: Previously rejected prose edits were not executed; a separate, permitted revision already exists in PR #24. Do not replay blocked payloads.
- User intervention required now: none established by this review. Further platform checks may still reject individual actions.

## Cycle update — 2026-10-10, PR cleanup and source review
- **Q-03 closed:** PR #22 was closed without merge after verifying that Chapter 3 on main already ends cleanly at the clerk's hesitation. No reader-facing change was necessary.
- **Q-04 substantive review:** PR #27 changes the early attribution from Lakandula to the unidentified ruler of Tondo, removes the unsupported strong-inference cousin relation in both Ache and Lakandula profiles, and removes premature Lakandula links in Chapters 4–5. These edits correctly narrow claims; the 1571 Lakandula remains documented. The underlying Aganduru Spanish original is still not independently verified. PR #27 remains draft pending normal review and release checks; do not collapse source caution into proof of a different ruler.
- **Q-05:** PR #24 still contains the second-pass Chapter 4 prose; its last passage asks the clerk to seek the rowers' permission before marking them. Preserve this agency-driven ending when assessing public prose. Studio frontmatter and editorial gate must not appear in reader text.
- **Next editorial decision:** Review the title `Encroachment` versus provisional `The Second Crossing` against the final scene, then prepare the public chapter only when Chapter 4 source and chronology checks pass.
