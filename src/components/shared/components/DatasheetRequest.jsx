"use client";

import { useCallback, useRef, useState } from "react";

import { DatasheetRequestContext } from "@/hooks/useDatasheetRequest";

import DatasheetDialog from "./DatasheetDialog";

/**
 * Shares one datasheet request drawer between every `DatasheetButton` inside
 * it, so a grid of products renders a single dialog.
 */
export default function DatasheetRequest({ children }) {
  const dialogRef = useRef(null);
  const [product, setProduct] = useState(null);

  const open = useCallback((next) => {
    setProduct(next);
    dialogRef.current?.showModal();
  }, []);

  return (
    <DatasheetRequestContext value={open}>
      {children}
      <DatasheetDialog ref={dialogRef} product={product} />
    </DatasheetRequestContext>
  );
}
