export type ChapterNote = {
  title: string;
  kind: 'documented' | 'retrospective' | 'reconstruction' | 'fiction';
  body: string;
  sourceId?: string;
  links?: { label: string; url: string }[];
  spoiler?: boolean;
};

type ChapterNotesPacket = { chapterId: string; notes: ChapterNote[] };

// Keep chapter-specific evidence separate from the novel's first-person prose.
// Each JSON packet can be revised without copying notes across chapters.
const packets = import.meta.glob('../data/chapter-notes/*.json', {
  eager: true,
  import: 'default'
}) as Record<string, ChapterNotesPacket>;

const allowedKinds = new Set(['documented', 'retrospective', 'reconstruction', 'fiction']);

export function chapterNotesFor(chapterId: string): ChapterNote[] {
  const packet = packets[`../data/chapter-notes/${chapterId}.json`];
  if (!packet) return [];
  if (packet.chapterId !== chapterId || !Array.isArray(packet.notes)) {
    throw new Error(`Invalid historical-notes packet for ${chapterId}`);
  }
  packet.notes.forEach((note, index) => {
    if (!note.title?.trim() || !note.body?.trim() || !allowedKinds.has(note.kind)) {
      throw new Error(`Invalid historical note ${index + 1} for ${chapterId}`);
    }
    if (note.links !== undefined) {
      if (!Array.isArray(note.links) || note.links.some((link) => {
        if (typeof link?.label !== 'string' || !link.label.trim() || typeof link?.url !== 'string') return true;
        try { return new URL(link.url).protocol !== 'https:'; } catch { return true; }
      })) {
        throw new Error(`Invalid historical note links ${index + 1} for ${chapterId}`);
      }
    }
  });
  return packet.notes;
}
