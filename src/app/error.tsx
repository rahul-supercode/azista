"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

type ErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function Error({ error, retry }: ErrorProps) {
  useEffect(() => {
    // TODO: report to an error-tracking service.
    console.error(error);
  }, [error]);

  return (
    <section
      role="alert"
      className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center"
    >
      <h1 className="type-heading-3">Something went wrong</h1>
      <p>An unexpected error occurred. Please try again.</p>
      {error.digest ? (
        <p className="font-mono text-xs">Error ID: {error.digest}</p>
      ) : null}
      <Button onClick={() => retry()}>Try again</Button>
    </section>
  );
}
