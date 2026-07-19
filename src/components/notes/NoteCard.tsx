import type { Note } from "@/types/note";
import { useState } from "react";
import NoteModal from "./NoteModal";

interface Props {
  note: Note;
}

export default function NoteCard({ note }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-2xl border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
      >
        <h3 className="text-2xl font-semibold">
          {note.title}
        </h3>

        <p className="mt-5 leading-8 text-muted">
          {note.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 font-mono text-sm text-primary">
          {note.project}
        </p>

        <p className="mt-6 font-mono text-sm text-primary">
          
          <span>Open Note → </span>
        </p>
      </article>

      <NoteModal
        note={note}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}