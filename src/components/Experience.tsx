"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience, profile } from "@/data/portfolio";
import { PillLink } from "./ui/Button";
import { Reveal, Section } from "./ui/Section";
import { Accent, SectionHeading } from "./ui/SectionHeading";
import { Star4 } from "./ui/Sparkle";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section id="experience">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            label="Career Path"
            title={
              <>
                Work <Accent>Experience</Accent>
              </>
            }
          />
          <p className="mt-6 max-w-sm text-muted">
            A track record of shipping products with startups, agencies, and independent clients.
          </p>
          <PillLink href={profile.resumeUrl} download variant="dark" arrow className="mt-8">
            Full Resume
          </PillLink>
        </Reveal>

        <div ref={timelineRef} className="relative pl-10 md:pl-14">
          <div className="absolute top-2 bottom-2 left-[11px] w-0.5 bg-ink/10 md:left-[19px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-[11px] w-0.5 origin-top bg-accent md:left-[19px]"
          />
          <ol className="space-y-8">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute top-7 -left-10 grid size-6 place-items-center rounded-full bg-surface shadow-sm md:-left-14 md:size-10">
                  <span className="size-2.5 rounded-full bg-accent md:size-3" />
                </span>
                <Reveal>
                  <div className="rounded-3xl bg-surface p-6 shadow-sm shadow-black/5 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <span className="rounded-full bg-night px-3.5 py-1 text-xs font-medium text-white">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 font-medium text-accent">{job.company}</p>
                    <ul className="mt-4 space-y-2.5 text-muted">
                      {job.highlights.map((point) => (
                        <li key={point} className="flex gap-3">
                          <Star4 className="mt-1.5 size-3 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
