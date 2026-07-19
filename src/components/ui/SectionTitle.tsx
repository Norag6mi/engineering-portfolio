interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14">
      <p className="font-mono text-accent">
        {subtitle}
      </p>

      <h2 className="mt-2 font-heading text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}