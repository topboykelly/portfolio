"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Blob } from "./ui/Blob";
import { PillLink } from "./ui/Button";
import { Counter } from "./ui/Counter";
import { Reveal, Section } from "./ui/Section";
import { Accent, SectionHeading } from "./ui/SectionHeading";
import { Star4 } from "./ui/Sparkle";

const [experienceStat, projectsStat] = stats;

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative">
            <Blob className="absolute inset-x-[4%] top-[14%] bottom-0 h-[86%] w-[92%]" />
            <Image
              src={profile.portrait}
              alt=""
              width={420}
              height={480}
              className="relative h-auto w-full"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-2 flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xl shadow-black/10 sm:-left-8 dark:ring-1 dark:ring-white/10"
          >
            <span className="grid size-11 place-items-center rounded-full bg-accent text-white">
              <Briefcase className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-muted">{projectsStat.label}</p>
              <p className="text-2xl font-bold">
                {projectsStat.value}
                {projectsStat.suffix}
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-2 bottom-24 flex items-center gap-3 rounded-2xl bg-night p-4 text-white shadow-xl shadow-black/20 sm:-right-6 dark:ring-1 dark:ring-white/10"
          >
            <Star4 className="size-6 text-accent-light" />
            <div>
              <p className="text-2xl font-bold">
                {experienceStat.value}
                {experienceStat.suffix}
              </p>
              <p className="text-xs text-white/60">{experienceStat.label}</p>
            </div>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              label="About Me"
              title={
                <>
                  Who is <Accent>{profile.name}</Accent>?
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-lg text-muted">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-ink/10 py-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="text-3xl font-semibold text-ink md:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            <PillLink href={profile.resumeUrl} download variant="dark" arrow>
              Download Resume
            </PillLink>
            <PillLink href="#contact" variant="outline">
              Let&apos;s Talk
            </PillLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
