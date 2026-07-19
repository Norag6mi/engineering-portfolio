import type { ArchitectureDiagram } from "@/types/architecture";
import ArchitectureNode from "./ArchitectureNode";

interface Props {
  architecture: ArchitectureDiagram;
}

export default function ArchitectureCard({
  architecture,
}: Props) {
  return (
    <div className="rounded-3xl border border-border p-8">

      <h3 className="text-2xl font-bold">
        {architecture.title}
      </h3>

      <p className="mt-4 leading-8 text-muted">
        {architecture.description}
      </p>

      <div className="mt-10 space-y-2">

        {architecture.nodes.map((node, index) => (
          <ArchitectureNode
            key={node}
            label={node}
            isLast={index === architecture.nodes.length - 1}
          />
        ))}

      </div>

    </div>
  );
}