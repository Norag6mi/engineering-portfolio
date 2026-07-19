interface ProjectTechStackProps {
  technologies: string[];
}

export default function ProjectTechStack({
  technologies,
}: ProjectTechStackProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}