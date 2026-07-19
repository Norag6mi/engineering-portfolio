interface DisciplineCardProps {
  title: string;
  description: string;
}

export default function DisciplineCard({
  title,
  description,
}: DisciplineCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}