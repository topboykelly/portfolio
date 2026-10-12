import { profile } from "@/data/portfolio";

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label={`${profile.name}, back to top`}>
      <span className="grid size-9 place-items-center rounded-full bg-accent text-lg font-bold text-white">
        {profile.firstName.charAt(0)}
      </span>
      <span className="text-lg font-semibold tracking-tight">
        {profile.firstName}
        <span className="text-accent">.</span>
      </span>
    </a>
  );
}
