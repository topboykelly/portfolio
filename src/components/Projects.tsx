import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { PillLink } from "./ui/Button";
import { Reveal, Section } from "./ui/Section";
import { Accent, SectionHeading } from "./ui/SectionHeading";
import { GithubIcon } from "./ui/SocialIcons";

export function Projects() {
  return (
    <Section id="projects" className="bg-surface">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            label="My Work"
            title={
              <>
                Featured <Accent>Projects</Accent>
              </>
            }
          />
        </Reveal>
        <Reveal delay={0.1}>
          <PillLink href={profile.socials.github} target="_blank" rel="noreferrer" variant="outline">
            More on GitHub
          </PillLink>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 3) * 0.08}
            className={cn(project.featured && "md:col-span-2")}
          >
            <article className="group flex h-full flex-col rounded-3xl bg-paper p-3 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/10">
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl bg-surface",
                  project.featured ? "aspect-[16/10] lg:aspect-[11/5]" : "aspect-[16/10]",
                )}
              >
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes={project.featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="absolute top-3 right-3 grid size-11 place-items-center rounded-full bg-surface text-ink shadow-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-white"
                >
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </a>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-ink/5 bg-surface px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-5 pt-5 text-sm font-medium">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                  >
                    <GithubIcon className="size-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
