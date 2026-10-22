# Raha Ache — chapter historical notes editorial packet

**Status:** Studio-only proposal and source audit; not published. **Scope:** Books I–III (30 core chapters) and Book III bonus chapters 11–12. **Release rule:** do not delay the already-prepared Chapter 5 manuscript for this enhancement.

## Reader experience and editorial contract

Keep the first-person narrative uninterrupted. Place an optional, collapsed **Historical Notes & Sources** section after the final paragraph and before chapter navigation/comments. Do not put distracting numbered footnote markers in dialogue or imply that fictional conversations are recorded history. Each note should link to an existing Universe/source entry where possible, give the precise source locator (author, title, date, edition and page or passage where verified), and explicitly distinguish:

- **Documented account:** what a source actually says; contemporaneous versus retrospective testimony.
- **Scholarly reconstruction:** what is inferred from routes, trade, material culture or comparative scholarship; identify uncertainties.
- **Invented for the novel:** the particular dialogue, bargaining, household dynamics, personal motivations and scene-level incidents.

Use three to seven meaningful notes where warranted, fewer when evidence is thin. Never manufacture exact page numbers, quotes or direct-source access. Flag retrospective spoilers and conceal them by default. Avoid repeating the same generic bibliography on every chapter. Studio retains detailed evidence ledger, competing interpretations, confidence, and unresolved checks; Universe pages host reusable context; Novel displays only chapter-specific reader notes.

## Book I Chapters 1–5 — candidate notes for source review

**Chapters 1–3:** Audit each chapter's specific scenes against the established source entries before selecting notes. In particular, do not canonize the named Nakhoda Hamid from unmerged PR #15: the published Chapter 3 captain remains unnamed. Distinguish period maritime-language plausibility from evidence about Ache personally.

**Chapter 4 — The Second Crossing**
1. **Tondo–Maynila political tension:** Aganduru Móriz, *Historia General*, chapter XIII, later retrospective account of Tondo encroachment. Historical trajectory asserted; specific clerk, rowers, Sima, tally marks and wage dispute invented.
2. **Labor and river traffic:** the physical and commercial setting can be contextualized with separately verified scholarship; do not attribute the chapter's unpaid-wages incident to any chronicle.
3. **Regent's authority:** Aganduru reports Ache's mother governing Maynila after his father's death; her steward's precise negotiations and compromise are fiction.

**Chapter 5 — The Boat That Stayed**
1. **Ache's proposed Brunei appeal:** Aganduru Móriz, *Historia General*, chapter XIII, later narrative that Ache sought his maternal grandfather's help and his mother initially opposed then permitted departure. The original Spanish CODOIN 78 pp. 59–60 has **not been inspected**; do not quote or label the passage verified.
**Locator QA correction (16 October 2026):** An earlier table-of-contents inference incorrectly treated CODOIN 78 pp. 59–60 as necessarily outside Aganduru's Book I, chapter XIII. Pedro A. Paterno's *El Barangay* explicitly cites **Aganduru, book I, chapter XIII, p. 60, vol. 78** for a statement about Luzon's rulers and Manila; he separately refers to p. 57 in a discussion of *ladya*. This is independent nineteenth-century **secondary citation evidence** that chapter XIII material occurs around these pages, so do **not** label p. 60 an erroneous chapter locator merely because the partial Google Books contents shows headings at pp. 50 and 61. It does **not** establish that Ache's childhood, maternal regency or Brunei appeal appears on pp. 59–60: that particular passage remains uninspected. Paterno's social interpretation is not neutral primary testimony. Source: https://es.scribd.com/document/907186750/PATERNO-LOS-TAGALOG (search *Fr. Aganduru, Histy lib. I, cap. XIII, p. 60, t. 78*); edition metadata: https://books.google.com/books/about/Historia_general_de_la_Islas_Occidentale.html?id=jiViHQAACAAJ .

2. **Regional Luzon–Borneo commerce:** Tomé Pires, *Suma Oriental* (written 1512–1515), Cortesão 1944 ed., vol. I pp. 133–134 as cited in the existing source record. Pires collected commercial intelligence, not Ache's itinerary or merchant-by-merchant Maynila records. Source: `src/content/sources/tome-pires-suma-oriental.md`.
3. **Routes, not a guaranteed voyage:** Roderich Ptak, “The Northern Trade Route to the Spice Islands,” *Archipel* 43 (1992), pp. 27–56, DOI 10.3406/arch.1992.2804. Scholarly regional corridor reconstruction does not establish the unnamed captain, messenger or a booked boat.
4. **Wages, consent and households:** Sima's payment to the organizer, unpaid first-voyage rowers, Sulad's uncle's fishing work and the regent's conditional crossing are fictional dramatizations. Do not present them as attested incidents.
5. **No boat yet:** Chapter 5 ends with Ache seeking passage; Ula's messenger and the captain are unconfirmed, Sulad undecided, physical departure reserved for Chapter 6.

## Book I Chapters 6–9 — candidate notes for source review

**Chapter 6 — No Boat Owed Us.** The paid first-leg passage, cargo handling and unnamed landing are fictional scene events. Contextualize maritime labor only after checking the relevant passages of William Henry Scott's 1982 boat-building article; its bibliographic record alone does not verify the depicted crew practices. Do not give the landing a historical name or imply a booked onward route.

**Chapter 7 — The Length of a Rope.** William Henry Scott's *Barangay* (1994), Visayas discussions of trade, textile work, property and social organization, is a source for comparative context, subject to checking the printed edition before page-specific notes. Nima's absent sister retaining control of her cloth, the local fisherman's refusal of landing space, and Ache's paid pole-handler are fictional applications, not reported incidents. Mulaw is an invented personal name: the current manuscript does not assign him a datu/lakan title, and the older Universe alias must not be mistaken for an attested historical chief. Scott's 1982 vessel article has not yet been checked for the specific mooring and repair actions; withhold such an attribution.

**Chapter 8 — Diplomacy and Supplies.** Regional exchange and maritime labor can be placed alongside Tomé Pires's *Suma Oriental* (Cortesão 1944 edition, vol. I, pp. 133–134, subject to source-file locator check), but Pires does not document Ache's supplies, mat-mending work or one-leg bargain. The mat carrier's consent and the division of earned food are fictional continuity facts; do not call them period records. Wait for the assembled public prose before selecting chapter-specific notes.

**Chapter 9 — The Last Storm.** Roderich Ptak, “The Northern Trade Route to the Spice Islands,” *Archipel* 43 (1992), pp. 27–56, DOI 10.3406/arch.1992.2804, reconstructs overlapping trade corridors. The opening p. 27 has been inspected, while the later pp. 39–41 and 46–48 discussion has so far been checked through uncorrected searchable text rather than original page images. Cite the article as network-level scholarship only; it does not establish Ache's intermediate landing, a single through-voyage, a named captain or a specific storm. Modern monsoon climatology may inform a plausibility check after season and geography are fixed, but cannot attest weather on this fictional crossing. No public Chapter 9 prose or historical notes are release-ready.

## Implementation acceptance criteria (separate technical packet)

1. Chapter notes are structured data or reusable chapter-linked records, not manually duplicated prose; support zero notes gracefully.
2. The section is collapsed by default, keyboard accessible, readable without JavaScript, mobile-friendly and clearly separate from narration and Read Aloud.
3. Only chapter prose is read by default; notes have their own opt-in audio treatment if supported.
4. Source links resolve; each claim's attribution and source status are visible. No fabricated locators.
5. Optional spoilers are hidden by default. Chapter previous/next navigation, chapter list, Universe links and comments remain intact.
6. Audit generated HTML and internal links after implementation; GitHub Pages deployment is not rendered live verification.
7. Roll out retrospectively for Chapters 1–5 only after Chapter 5 publication is no longer blocked, then make it part of the 30+2 chapter release checklist.

**Open research:** Verify Aganduru's original Spanish edition and exact passage; check Chapter 1–3 scene-specific claims and source links; test whether the current Astro chapter template can display structured notes without disrupting Read Aloud.
