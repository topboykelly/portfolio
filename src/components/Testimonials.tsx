"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Reveal, Section } from "./ui/Section";
import { Accent, SectionHeading } from "./ui/SectionHeading";

const CARD_GAP = 24;

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const update = () => {
      const max = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setMaxDrag(max);
      if (x.get() < -max) x.set(-max);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [x]);

  const step = (direction: 1 | -1) => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    if (!card) return;
    const next = x.get() - direction * (card.offsetWidth + CARD_GAP);
    animate(x, Math.min(0, Math.max(-maxDrag, next)), {
      type: "spring",
      stiffness: 300,
      damping: 35,
    });
  };

  return (
    <Section id="testimonials" className="bg-surface">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            label="Testimonials"
            title={
              <>
                What <Accent>Clients</Accent> Say
              </>
            }
          />
        </Reveal>
        <Reveal delay={0.1} className="flex gap-3">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous testimonial"
            className="grid size-12 place-items-center rounded-full border-2 border-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next testimonial"
            className="grid size-12 place-items-center rounded-full bg-accent text-white transition-colors hover:bg-accent-dark"
          >
            <ChevronRight className="size-5" />
          </button>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div ref={viewportRef} className="mt-12 overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            dragElastic={0.08}
            style={{ x, gap: CARD_GAP }}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex w-[85%] shrink-0 flex-col rounded-3xl bg-paper p-7 select-none sm:w-[60%] lg:w-[calc((100%-48px)/3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-accent text-white">
                    <Quote className="size-5 fill-white" aria-hidden="true" />
                  </span>
                  <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-night text-sm font-semibold text-white">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </Reveal>
    </Section>
  );
}
