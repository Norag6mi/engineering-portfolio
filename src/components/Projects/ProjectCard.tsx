import type { Project } from "@/types/project";

import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";

import type { ReactNode } from "react";

import ProjectMedia from "./ProjectMedia";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="border-b border-border py-24">

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
        PROJECT {project.id.toString().padStart(2, "0")}
      </p>

      <div className="mt-8 grid gap-14 lg:grid-cols-2">

        {/* Left */}

        {/* Left */}

        <div>
          <ProjectMedia
              media={project.media}
              title={project.title}
          />
        </div>

        {/* Right */}

        <div>

          <h2 className="text-4xl font-bold leading-tight">
            {project.title}
          </h2>

          <ProjectTechStack
            technologies={project.technologies}
          />

          <p className="mt-8 leading-8 text-muted">
            {project.overview}
          </p>

          

          <DetailSection title="Problem">

            <p className="leading-8 text-muted">
              {project.problem}
            </p>

          </DetailSection>

          <DetailSection title="Architecture">

            <ul className="space-y-3">

              {project.architecture.map((item) => (

                <li
                  key={item}
                  className="flex gap-3"
                >
                  <span className="text-primary">▸</span>

                  <span className="text-muted">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </DetailSection>

          <DetailSection title="Key Features">

            <ul className="space-y-3">

              {project.features.map((feature) => (

                <li
                  key={feature}
                  className="flex gap-3"
                >
                  <span className="text-green-500">
                    ✓
                  </span>

                  <span className="text-muted">
                    {feature}
                  </span>

                </li>

              ))}

            </ul>

          </DetailSection>

          <ProjectLinks
            github={project.github}
            demo={project.demo}
          />

        </div>

      </div>

    </article>
  );
}
interface DetailSectionProps {
  title: string;
  children: ReactNode;
}

function DetailSection({
  title,
  children,
}: DetailSectionProps) {
  return (
    <section className="mt-10">
      <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
        {title}
      </h3>

      {children}
    </section>
  );
}
