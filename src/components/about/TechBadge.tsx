interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-border
        bg-surface
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-200
        hover:border-primary
        hover:text-primary
      "
    >
      {label}
    </span>
  );
}