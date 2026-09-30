"use client";

import { useEffect } from "react";

import StatusMessage from "@/components/shared/components/StatusMessage";
import Button from "@/components/ui/Button";

import "./globals.css";

// Replaces the root layout when it errors, so it must render <html> and <body>.
export default function GlobalError({ error, retry }) {
  useEffect(() => {
    // TODO: report to an error-tracking service.
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <title>Something went wrong</title>
        <StatusMessage as="main" role="alert" title="Something went wrong">
          <p>A critical error occurred. Please try again.</p>
          <Button onClick={() => retry()}>Try again</Button>
        </StatusMessage>
      </body>
    </html>
  );
}
