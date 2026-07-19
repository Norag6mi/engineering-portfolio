interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  index,
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
        {index} / {label}
      </p>

      <h2 className="mt-4 text-4xl font-bold max-w-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}