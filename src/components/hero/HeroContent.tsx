import { profile } from "@/data/profile";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <>
      <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">
        BUILDING SCALABLE SOFTWARE
      </p>

      <h1 className="mt-5 font-heading text-5xl font-bold leading-tight lg:text-7xl">
        {profile.name}
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-muted">
        {profile.tagline}
      </h2>

      <p className="mt-8 max-w-lg text-lg leading-8 text-muted">
        {profile.description}
      </p>

      <HeroButtons />
    </>
  );
}