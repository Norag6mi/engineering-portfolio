import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-border
      bg-surface
      p-6
      transition
      duration-300
      hover:-translate-y-1
      hover:bg-surface-hover
      "
    >
      {children}
    </div>
  );
}