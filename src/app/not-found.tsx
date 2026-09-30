import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <p className="type-text-5">404</p>
      <h1 className="type-heading-2">Page not found</h1>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <ButtonLink href="/">Go home</ButtonLink>
    </section>
  );
}
