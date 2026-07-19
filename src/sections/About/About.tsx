import Section from "@/components/layout/Section";
import TimelineItem from "@/components/about/TimelineItem";

import { education } from "@/data/education";
import { experience } from "@/data/experience";

import DisciplineCard from "@/components/about/DisciplineCard";
import { disciplines } from "@/data/disciplines";

import TechBadge from "@/components/about/TechBadge";
import { technologies } from "@/data/technologies";

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-5xl">

        <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
          01 / WHO I AM
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Engineering software with a focus on
          scalable systems and clean architecture.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
          I am a Computer Science undergraduate specializing in Artificial
          Intelligence and Machine Learning with a strong interest in backend
          engineering, full-stack application development, and intelligent
          gameplay systems. I enjoy designing scalable software, building
          practical products, and applying clean architecture principles to
          create maintainable, production-ready applications.
        </p>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          <TimelineItem
            title={education.degree}
            subtitle={education.institute}
            duration={education.duration}
          >
            <p className="text-muted">
              {education.cgpa}
            </p>
          </TimelineItem>

          <TimelineItem
            title={experience.role}
            subtitle={experience.company}
            duration={experience.duration}
          >
            <ul className="space-y-3">
              {experience.description.map((item) => (
                <li
                  key={item}
                  className="text-muted"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </TimelineItem>

        </div>
        <div 
          id="skills"
          className="mt-24 scroll-mt-24">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
                02 / ENGINEERING DISCIPLINES
            </p>

            <h2 className="mt-4 text-3xl font-bold">
                Areas where I design and build software.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {disciplines.map((discipline) => (
                <DisciplineCard
                    key={discipline.title}
                    title={discipline.title}
                    description={discipline.description}
                />
                ))}
            </div>
        </div>
        <div className="mt-24">

            <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
                03 / TECHNOLOGY STACK
            </p>

            <h2 className="mt-4 text-3xl font-bold">
                Technologies I use to build software.
            </h2>

            <div className="mt-10 space-y-10">

                {technologies.map((group) => (

                <div key={group.category}>

                    <h3 className="mb-5 text-xl font-semibold">
                    {group.category}
                    </h3>

                    <div className="flex flex-wrap gap-3">

                    {group.technologies.map((tech) => (

                        <TechBadge
                        key={tech}
                        label={tech}
                        />

                    ))}

                    </div>

                </div>

                ))}

            </div>

        </div>
      </div>
    </Section>
  );
}