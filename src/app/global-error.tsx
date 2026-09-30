"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

// Replaces the root layout when it errors, so it must render <html> and <body>.
export default function GlobalError({ error, retry }: GlobalErrorProps) {
  useEffect(() => {
    // TODO: report to an error-tracking service.
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col">
        <title>Something went wrong</title>
        <main
          role="alert"
          className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center"
        >
          <h1 className="type-heading-3">Something went wrong</h1>
          <p>A critical error occurred. Please try again.</p>
          <Button onClick={() => retry()}>Try again</Button>
        </main>
      </body>
    </html>
  );
}
