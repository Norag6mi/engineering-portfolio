import { useState } from "react";
import ProjectGalleryModal from "./ProjectGalleryModal";
import type { ProjectMediaItem } from "@/types/project";

interface Props {
  media: ProjectMediaItem[];
  title: string;
}

export default function ProjectMedia({
  media,
  title,
}: Props) {
  const [open, setOpen] = useState(false);
  const preview = media[0];

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface shadow-lg"
      >
        {preview.type === "image" ? (
            <img
                src={preview.src}
                alt={title}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        ) : (
            <video
                src={preview.src}
                muted
                playsInline
                preload="metadata"
                className="aspect-video w-full object-cover"
            />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            View Gallery
          </span>
        </div>
      </div>

      <ProjectGalleryModal
        media={media}
        title={title}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}