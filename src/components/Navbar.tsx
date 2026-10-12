"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { Logo } from "./ui/Logo";
import { easeOut } from "./ui/Section";
import { ThemeToggle } from "./ui/ThemeToggle";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="container-page">
        <motion.nav
          aria-label="Main"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className={cn(
            "flex items-center justify-between rounded-full bg-surface/90 py-2 pr-2 pl-3 backdrop-blur-md transition-shadow duration-300 dark:ring-1 dark:ring-white/10",
            scrolled ? "shadow-lg shadow-black/5" : "shadow-sm shadow-black/5",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-accent" : "text-ink/70 hover:text-ink",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-accent-soft"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full bg-night px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent sm:inline-flex"
            >
              Contact Me
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-10 place-items-center rounded-full bg-paper md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="mt-2 rounded-3xl bg-surface p-3 shadow-xl shadow-black/10 md:hidden dark:ring-1 dark:ring-white/10"
            >
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 font-medium transition-colors",
                        active === link.href.slice(1)
                          ? "bg-accent-soft text-accent"
                          : "hover:bg-paper",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-2xl bg-night px-4 py-3 text-center font-medium text-white"
              >
                Contact Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
