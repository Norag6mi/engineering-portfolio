interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({
  open,
  onClose,
}: ResumeModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[90vh] w-[90vw] rounded-2xl bg-background shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-lg border border-border bg-surface px-3 py-2"
        >
          ✕
        </button>

        <iframe
          src="public\resume\resume.pdf"
          className="h-full w-full rounded-2xl"
          title="Resume"
        />

        <a
          href="public\resume\resume.pdf"
          download
          className="absolute bottom-4 right-4 rounded-lg bg-primary px-5 py-3 text-white"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}