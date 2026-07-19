import type { Note } from "@/types/note";

interface Props {
  note: Note | null;
  open: boolean;
  onClose: () => void;
}

export default function NoteModal({
  note,
  open,
  onClose,
}: Props) {
  if (!open || !note) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-[90%] max-w-4xl overflow-y-auto rounded-2xl border border-border bg-background p-10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-8 top-8 rounded-lg border border-border px-3 py-2"
        >
          ✕
        </button>

        <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
          {note.project}
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          {note.title}
        </h2>

        <div className="mt-10 space-y-6">
          {note.content.map((paragraph, index) => (
            <p
              key={index}
              className="leading-8 text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-4 py-2 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}