interface ContactCardProps {
  title: string;
  value: string;
  href?: string;
}

export default function ContactCard({
  title,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {title}
      </p>

      <p className="mt-3 text-lg font-medium break-all">
        {value}
      </p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary hover:-translate-y-1"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      {content}
    </div>
  );
}