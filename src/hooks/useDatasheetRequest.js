"use client";

import { createContext, useContext } from "react";

export const DatasheetRequestContext = createContext(null);

export function useDatasheetRequest() {
  return useContext(DatasheetRequestContext);
}
