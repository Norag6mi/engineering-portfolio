import Section from "@/components/layout/Section";
import ArchitectureCard from "@/components/Architecture/ArchitectureCard";
import { architectures } from "@/data/architectures";

export default function Architecture() {
  return (
    <Section id="architecture">

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
        05 / SOFTWARE ARCHITECTURE
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold">
        Designing systems through modular architecture and clean separation of concerns.
      </h2>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">

        {architectures.map((architecture) => (
          <ArchitectureCard
            key={architecture.id}
            architecture={architecture}
          />
        ))}

      </div>

    </Section>
  );
}