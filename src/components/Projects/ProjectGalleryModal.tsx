import { useEffect, useState } from "react";
import type { ProjectMediaItem } from "@/types/project";

interface Props {
  media: ProjectMediaItem[];
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function ProjectGalleryModal({
  media,
  title,
  open,
  onClose,
}: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight")
        setCurrent((c) => (c + 1) % media.length);

      if (e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + media.length) % media.length);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [open, media.length, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {media[current].type === "image" ? (
          <img
            src={media[current].src}
            alt={media[current].title ?? title}
            className="max-h-[80vh] w-full rounded-xl object-contain"
          />
        ) : (
          <video
            controls
            autoPlay
            playsInline
            className="max-h-[80vh] w-full rounded-xl object-contain"
          >
            <source src={media[current].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg bg-black/70 px-3 py-2 text-white"
        >
          ✕
        </button>

        <button
          onClick={() =>
            setCurrent((c) => (c - 1 + media.length) % media.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-4 text-white"
        >
          ←
        </button>

        <button
          onClick={() =>
            setCurrent((c) => (c + 1) % media.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-4 text-white"
        >
          →
        </button>

        <div className="mt-6 flex justify-center gap-3">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === current
                  ? "bg-primary"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}