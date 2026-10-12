"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { PillLink } from "./ui/Button";
import { Reveal, Section, easeOut } from "./ui/Section";
import { Accent, SectionHeading } from "./ui/SectionHeading";

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="services" className="bg-surface">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            label="My Specialization"
            title={
              <>
                <Accent>Services</Accent> I Provide
              </>
            }
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-muted">
            From the first wireframe to production deploys, I help teams ship interfaces that
            are fast, accessible, and built to last.
          </p>
        </Reveal>
      </div>

      <ul className="mt-12 space-y-4">
        {services.map((service, i) => {
          const isOpen = open === i;
          return (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.05 }}
              className={cn(
                "overflow-hidden rounded-3xl transition-colors duration-500",
                isOpen
                  ? "bg-night text-white dark:ring-1 dark:ring-accent/40"
                  : "bg-paper hover:bg-accent-soft",
              )}
            >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${i}`}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left md:gap-6 md:px-8 md:py-6"
                >
                  <span className="w-10 shrink-0 text-lg font-semibold md:w-24">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="flex-1 text-lg font-semibold md:text-2xl">{service.title}</span>
                  <span
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-300",
                      isOpen ? "bg-accent text-white" : "bg-surface text-ink",
                    )}
                  >
                    <ArrowUpRight
                      className={cn("size-5 transition-transform duration-300", isOpen && "rotate-90")}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-panel-${i}`}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: easeOut }}
                    >
                      <div className="grid gap-6 px-6 pb-6 md:grid-cols-[1fr_auto] md:pr-8 md:pb-8 md:pl-[9.5rem]">
                        <div>
                          <ul className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <li
                                key={tag}
                                className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium"
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-4 max-w-xl text-white/70">{service.description}</p>
                        </div>
                        <div className="overflow-hidden rounded-2xl md:w-80">
                          <Image
                            src={service.image}
                            alt=""
                            width={800}
                            height={500}
                            className="h-auto w-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>

      <Reveal className="mt-12 flex justify-center">
        <PillLink href="#contact" variant="accent" arrow>
          Start a Project
        </PillLink>
      </Reveal>
    </Section>
  );
}
