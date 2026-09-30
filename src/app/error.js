"use client";

import { useEffect } from "react";

import StatusMessage, {
  StatusDigest,
} from "@/components/shared/components/StatusMessage";
import Button from "@/components/ui/Button";

export default function Error({ error, retry }) {
  useEffect(() => {
    // TODO: report to an error-tracking service.
    console.error(error);
  }, [error]);

  return (
    <StatusMessage role="alert" title="Something went wrong">
      <p>An unexpected error occurred. Please try again.</p>
      {error.digest ? (
        <StatusDigest>Error ID: {error.digest}</StatusDigest>
      ) : null}
      <Button onClick={() => retry()}>Try again</Button>
    </StatusMessage>
  );
}
