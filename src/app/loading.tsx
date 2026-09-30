export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-1 items-center justify-center p-8"
    >
      <span
        aria-hidden="true"
        className="size-8 animate-spin rounded-full border-4 border-muted border-t-foreground"
      />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
