"use client";

import Button from "@/components/ui/Button";
import { useDatasheetRequest } from "@/hooks/useDatasheetRequest";

/** Opens the datasheet request form. Pass a `variant` to render a `Button`. */
export default function DatasheetButton({
  name,
  datasheet,
  variant,
  className,
  children,
}) {
  const open = useDatasheetRequest();
  const props = {
    "aria-haspopup": "dialog",
    "aria-label": `Download the ${name} datasheet`,
    onClick: () => open({ name, datasheet }),
    className,
  };

  if (variant) {
    return (
      <Button variant={variant} {...props}>
        {children}
      </Button>
    );
  }

  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
