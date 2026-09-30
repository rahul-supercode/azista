"use client";

import { createContext, useContext } from "react";

export const DatasheetRequestContext = createContext(null);

/**
 * Returns `open({ name, datasheet })`, which slides in the datasheet request
 * form for that product. Use inside `DatasheetRequest`.
 */
export function useDatasheetRequest() {
  return useContext(DatasheetRequestContext);
}
