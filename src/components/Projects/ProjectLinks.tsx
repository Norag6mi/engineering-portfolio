import Button from "@/components/ui/Button";

interface ProjectLinksProps {
  github: string;
  demo?: string;
}

export default function ProjectLinks({
  github,
  demo,
}: ProjectLinksProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {github && (
        <Button href={github}>
          GitHub
        </Button>
      )}

      {demo && (
        <Button
          href={demo}
          variant="secondary"
        >
          Live Demo
        </Button>
      )}
    </div>
  );
}