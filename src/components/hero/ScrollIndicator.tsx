export default function ScrollIndicator() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Scroll
      </span>

      <div className="mt-3 animate-bounce text-2xl text-primary">
        ↓
      </div>
    </div>
  );
}