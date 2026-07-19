import Section from "@/components/layout/Section";
import ProjectCard from "@/components/Projects/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
        04 / FEATURED ENGINEERING PROJECTS
      </p>

      <h2 className="mt-4 text-4xl font-bold max-w-3xl">
        Engineering projects that demonstrate my approach to designing scalable and maintainable software.
      </h2>

      <div className="mt-20">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </Section>
  );
}