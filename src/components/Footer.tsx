import { navLinks, profile } from "@/data/portfolio";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <Logo />
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink/70">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">
          &copy; {profile.copyrightYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
