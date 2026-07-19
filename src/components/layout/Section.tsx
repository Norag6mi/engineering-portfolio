import type { ReactNode } from "react";

import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
}

export default function Section({
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className="py-20 lg:py-28"
    >
      <Container>{children}</Container>
    </section>
  );
}