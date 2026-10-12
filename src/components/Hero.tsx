"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { heroTags, profile, reviews } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { Blob } from "./ui/Blob";
import { PillLink } from "./ui/Button";
import { HireMeBadge } from "./ui/HireMeBadge";
import { easeOut } from "./ui/Section";
import { SectionLabel } from "./ui/SectionHeading";
import { SocialLinks } from "./ui/SocialIcons";
import { Sparkle, Star4 } from "./ui/Sparkle";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const avatarColors = ["bg-accent", "bg-night", "bg-accent-dark", "bg-accent-light"];

const nameParts = profile.name.split(" ");
const lastWord = nameParts.pop();
const firstWords = nameParts.join(" ");

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-grid pt-32 md:pt-36">
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: easeOut }}
          className="absolute top-0 right-5 hidden lg:block"
        >
          <HireMeBadge />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <SectionLabel className="text-base">Hello There!</SectionLabel>
          </motion.div>
          <motion.h1
            variants={item}
            className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            I&apos;m{" "}
            <span className="text-accent">
              {firstWords}{" "}
              <span className="whitespace-nowrap">
                {lastWord}
                <Sparkle className="ml-1 size-7 -translate-y-6 lg:size-9 lg:-translate-y-9" />
              </span>
            </span>
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-lg text-muted">
            {profile.role} based in {profile.location}
          </motion.p>
        </motion.div>

        <div className="relative mt-6 grid items-end gap-10 lg:mt-2 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
            className="order-3 mx-auto max-w-xs pb-12 text-center lg:order-1 lg:mx-0 lg:pb-24 lg:text-left"
          >
            <Quote className="mx-auto size-8 fill-accent text-accent lg:mx-0" aria-hidden="true" />
            <p className="mt-3 text-muted">{reviews.quote}</p>
            <div className="mt-10 flex justify-center -space-x-3 lg:justify-start">
              {reviews.reviewers.map((initials, i) => (
                <span
                  key={initials}
                  className={cn(
                    "grid size-11 place-items-center rounded-full border-2 border-surface text-xs font-semibold text-white",
                    avatarColors[i % avatarColors.length],
                  )}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p className="mt-3 text-lg font-semibold">
              <span className="text-accent">{reviews.count} Reviews</span> ({reviews.rating} of 5)
            </p>
            <p className="text-sm text-muted">Reviews from valued clients</p>
          </motion.div>

          <div className="relative order-1 mx-auto w-full max-w-[420px] lg:order-2 lg:w-[400px] xl:w-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
              style={{ transformOrigin: "50% 100%" }}
              className="absolute inset-x-[4%] top-[14%] bottom-0"
            >
              <Blob className="size-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
              className="relative"
            >
              <Image
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                width={420}
                height={480}
                priority
                className="mx-auto h-auto w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: easeOut }}
              className="absolute inset-x-0 bottom-6 flex justify-center"
            >
              <div className="flex items-center gap-1.5 rounded-full border border-surface/70 bg-surface/60 p-1.5 shadow-xl shadow-black/10 backdrop-blur-md">
                <PillLink href="#projects" variant="dark" arrow className="hover:translate-y-0">
                  Projects
                </PillLink>
                <PillLink href="#contact" variant="outline" className="py-2.5 hover:translate-y-0">
                  Hire Me
                </PillLink>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: easeOut }}
            className="order-2 flex flex-col items-center gap-10 lg:order-3 lg:items-end lg:pb-24"
          >
            <ul className="flex max-w-sm flex-wrap items-center justify-center gap-2.5 lg:max-w-[17rem] lg:justify-end">
              {heroTags.map((tag, i) => (
                <Fragment key={tag}>
                  <motion.li
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + (i % 3) * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.25,
                    }}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium text-white shadow-md",
                      i % 3 === 1 ? "bg-accent shadow-accent/25" : "bg-night shadow-black/10 dark:ring-1 dark:ring-white/10",
                    )}
                  >
                    {tag}
                  </motion.li>
                  {i === 1 && (
                    <li aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-accent text-white">
                      <Star4 className="size-4" />
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-3 lg:items-end">
              <p className="text-sm text-muted">Follow Me On</p>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
