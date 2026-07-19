import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button href="#projects">
        Explore My Work
      </Button>

      <Button
        href={profile.resume}
        variant="secondary"
      >
        Download Resume
      </Button>
    </div>
  );
}