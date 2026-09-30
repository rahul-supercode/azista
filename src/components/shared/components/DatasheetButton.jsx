"use client";

import { useDatasheetRequest } from "@/hooks/useDatasheetRequest";

export default function DatasheetButton({
  name,
  datasheet,
  className,
  children,
}) {
  const open = useDatasheetRequest();

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-label={`Download the ${name} datasheet`}
      onClick={() => open({ name, datasheet })}
      className={className}
    >
      {children}
    </button>
  );
}
