import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { PillLink } from "./ui/Button";
import { HireMeBadge } from "./ui/HireMeBadge";
import { Reveal, Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionHeading";
import { SocialLinks } from "./ui/SocialIcons";
import { Sparkle } from "./ui/Sparkle";

export function Contact() {
  return (
    <Section id="contact" className="pb-12 md:pb-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-night px-6 py-16 text-white md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-accent/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-accent-light/20 blur-3xl"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid [--grid-line:rgb(255_255_255/0.04)]" />

          <div className="absolute top-12 right-12 hidden lg:block">
            <HireMeBadge />
          </div>

          <div className="relative max-w-2xl">
            <SectionLabel light>Contact</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Let&apos;s build something{" "}
              <span className="whitespace-nowrap">
                <span className="text-accent-light">together</span>
                <Sparkle className="ml-1 size-7 -translate-y-6 text-accent-light md:size-9 md:-translate-y-9" />
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              Have a project in mind, a role to fill, or just want to say hi? My inbox is always
              open and I usually reply within a day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PillLink href={`mailto:${profile.email}`} variant="accent" arrow>
                Say Hello
              </PillLink>
              <PillLink href={profile.resumeUrl} download variant="outline-light">
                Download Resume
              </PillLink>
            </div>
          </div>

          <div className="relative mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            <a href={`mailto:${profile.email}`} className="group flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-accent">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-white/50">Email</span>
                <span className="block font-medium">{profile.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-white/10">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-white/50">Location</span>
                <span className="block font-medium">{profile.location}</span>
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <span className="text-sm text-white/50">Follow Me</span>
              <SocialLinks light />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
