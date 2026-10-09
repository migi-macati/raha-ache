# Book I Chapter 4: editorial, continuity and source review
Reviewed: 2026-10-09 15:56–16:00 Asia/Manila
State: **working draft, NOT ready for publication**
Manuscript: `src/content/research/book-1-chapter-4-working-prose.md` on `draft/book1-ch4-encroachment-20261009`
Forward checkpoint: `book-1-chapter-4`; retrospective chapter changes this pass: none.

## Publication blockers identified from direct Chapters 1–3 comparison

**P0: sunset-to-afternoon time reversal.** Published Chapter 3 ends with Ache questioning the Tondo clerk as a boat arrives on the **evening tide**. Draft Chapter 4 begins before that boat lands, but later says **“By late afternoon”** after a long morning's work. This cannot be the same calendar day. Preferred repair: begin “The clerk had not answered my question the evening before. By morning I had asked it twice more.” Then make the arriving vessel a new morning boat. Alternatively keep the evening opening and carry the whole dispute into the following day with an explicit scene break. Do not change the seven-boat tally: those seven vessels were counted since midday **in Chapter 3**, and are “yesterday's seven” if Chapter 4 opens the next morning.

**P0: loading direction reverses.** The draft says the boat lands and its crew hands baskets **ashore**, with Sima deciding which “stay aboard” and which “go”; later it explains she hired men to carry baskets **from her shore to a larger trading vessel toward the bay**. Choose one consistent cargo route. Recommended: Sima's baskets are stacked on the bank; a small hired cargo boat comes alongside to collect them for the larger ship; Sima authorizes one load only after confirming the price. Show the loading, unmooring, rowing and transfer or its obstruction. “Lighter” may be accurate as English technical narration but could sound like a later colonial port category; “small cargo boat” is safer until researched.

**P1: the drama is still mostly a hearing.** The revised outline calls for an active riverside scene; the manuscript currently contains long sequences of abstract argument and a nearly frictionless mediated settlement. Make a concrete task go wrong under time pressure: a basket binding gives way while a rower holds the boat against the current, a competing boat takes the only available working crew, or the larger ship signals it is moving. Only one physical complication is needed, and it must result from the choices already made. Avoid treating a vessel's tide window as precisely known without navigation research.

**P1: independent agency.** Sima speaks clearly but mainly to correct Ache. Let her make one shrewd, costly commercial choice *without* Ache's help (e.g. reserve two baskets for a new buyer, negotiate the balance only on return). The organizer needs to demonstrate real risk in provisioning rowers; the rowers should have their own unpaid or underpaid concerns. The Tondo clerk's recent revision (commit `4be4b9f6`) successfully reveals his loyalty conflict. Ache's mother should own a mistake in the joint tally's scope and be unable to promise substitute crews.

**P1: scene's core conflict.** Chapter 2 already dramatizes a missed passage and the cost of delayed dried fish. Chapter 4's irreversible cost must be Sima's refusal to delegate authority to Ache, and Tondo's increased bargaining power over future crew reservations. Economic disruption can support that cost but cannot repeat Chapter 2's entire arc.

**P2: narration and terminology.** The opening hypothetical “if I were that woman's husband” needs an antecedent: Chapter 3's woman searching for a missing sailor. The story uses the English terms “organizer”, “steward” and “clerk” as translations of roles; they are **narrative conventions**, not documented office titles c.1500. Check every technical vessel term and avoid invented specific legal formulae. Ache is sixteen in Chapter 2, so keep his competence and speech imperfect. His final conversation with his mother currently risks summarizing the lesson too neatly; consider ending on a decision or object rather than a question that restates the theme.

## Historical evidence audit

**Directly verified source:** Juan de Plasencia, “Customs of the Tagalogs” (1589), in Blair and Robertson, *The Philippine Islands*, Vol. VII. It describes late-sixteenth-century Tagalog chiefs, river fisheries/markets, differentiated rowing and labor obligations, and community justice. This is comparative evidence from roughly **nine decades after the novel's c.1500 opening**. It does not establish a joint Tondo–Maynila crew register, a two-transfer contract, a particular 1500 port procedure, or universal free wage labor.
Source: https://en.wikisource.org/wiki/The_Philippine_Islands,_1493%E2%80%931898/Volume_7/Customs

**Independent archaeological evidence:** National Museum of the Philippines, Pandanan shipwreck collection. Mid-fifteenth-century wreck off southern Palawan, 4,722 recovered objects including ceramics from Vietnam, Thailand and China, plus utilitarian objects; construction combines Southeast Asian and Chinese shipbuilding traditions. It supports a wider Philippine maritime trading world **before Spanish arrival**, not this specific Manila Bay transfer arrangement.
Source: https://www.nationalmuseum.gov.ph/our-collections/maritime-and-underwater-cultural-heritage/maritime-pandanan-shipwreck-2/

**Scholarship:** Bobby C. Orillaneda, “Maritime Trade in the Philippines During the 15th Century CE,” *Moussons* 27 (2016), 83–100, DOI 10.4000/moussons.3529. Analyzes Pandanan, Lena Shoal, Santa Cruz and terrestrial finds to reconstruct regional maritime trade. Article metadata and abstract verified; full publisher page blocked by browser verification, so **do not claim full text independently read**.
Source: https://doi.org/10.4000/moussons.3529

**Unverified:** Original Spanish passage in Rodrigo de Aganduru Móriz identifying Ache's mother and the unnamed Tondo cousin; exact page and wording still needed. Do not silently identify the unnamed cousin with Lakandula or Siripada with Sultan Bolkiah.

**Fictional reconstruction:** Ache's conversations, Sima, the organizer, clerk, disputed second voyage, paired tally boards, arbitration and private character motives. Label these as fiction in Studio; do not insert source disclaimers into reader-facing chapter prose.

## Chapter progression and final gate

Ch1: a rescue exposes unintended labor costs. Ch2: a hearing reveals limited resources and Ache learns to ask Sulad. Ch3: Islam, Ula, Sulad and trade records reveal overlapping loyalties; the tally system genuinely prevents double payment. Ch4: a valid objection voiced badly costs Ache a household's consent; his mother cannot solve a shortage by decree. Ch5 should force a material choice under Tondo pressure, not simply repeat a discussion of authority.

Before moving from **draft** to **ready**, correct the two P0 continuity errors in the manuscript; make the commercial action physically legible; confirm the revised text against the Chapter 3 ending and Chapter 2 consent arc; run repository content/link/build checks; then open a reviewable PR. Keep Studio files separate from the public Novel/Universe and do not advance the forward checkpoint until Chapter 4 is actually published.
