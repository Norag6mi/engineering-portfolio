interface ArchitectureNodeProps {
  label: string;
  isLast?: boolean;
}

export default function ArchitectureNode({
  label,
  isLast = false,
}: ArchitectureNodeProps) {
  return (
    <div className="flex flex-col items-center">

      <div className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-center font-medium transition-colors hover:border-primary">
        {label}
      </div>

      {!isLast && (
        <div className="my-2 text-primary text-xl">
          ↓
        </div>
      )}

    </div>
  );
}