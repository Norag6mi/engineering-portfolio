import type { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  children: ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
 duration,
  children,
}: TimelineItemProps) {
  return (
    <div className="relative border-l border-border pl-6">
      <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary" />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-muted">
        {subtitle}
      </p>

      <p className="mt-1 font-mono text-sm text-primary">
        {duration}
      </p>

      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}