import Section from "@/components/layout/Section";
import NoteCard from "@/components/notes/NoteCard";
import { notes } from "@/data/notes";

export default function Notes() {
  return (
    <Section id="notes">

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
        06 / TECHNICAL NOTES
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold">
        Engineering decisions, implementation details, and lessons learned while building production-oriented software.
      </h2>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
          />
        ))}
      </div>

    </Section>
  );
}