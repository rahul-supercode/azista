import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

import arrowBlack from "@/assets/icons/arrow-black.svg";
import arrowWhite from "@/assets/icons/arrow-white.svg";
import bracketLeft from "@/assets/icons/bracket-left.svg";
import bracketRight from "@/assets/icons/bracket-right.svg";
import underline from "@/assets/icons/underline.svg";
import { cn } from "@/lib/utils";

/**
 * Figma: Button-2 → `primary`, Button-1 → `framed`, Button-3 → `link`.
 */
const variants = {
  primary:
    "type-text-1 gap-[10px] bg-primary px-[60px] py-[15px] text-primary-foreground hover:opacity-85",
  framed: "group hover:opacity-85",
  link: "type-text-1 flex-col items-start gap-[10px] text-black hover:opacity-70",
} as const;

export type ButtonVariant = keyof typeof variants;

function buttonStyles(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap transition-opacity disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );
}

function Arrow({ src }: { src: StaticImageData }) {
  return (
    <span
      aria-hidden="true"
      className="relative h-[6.5px] w-[10.502px] shrink-0"
    >
      <Image
        src={src}
        alt=""
        width={11.7955}
        height={7.2764}
        className="absolute -top-[0.378px] -left-[0.5px] max-w-none"
      />
    </span>
  );
}

function Bracket({ src, flip }: { src: StaticImageData; flip?: boolean }) {
  return (
    // Outer span: hover/focus animation (corners spread outward).
    // Inner span: mirror for the right-hand bracket.
    <span
      aria-hidden="true"
      className={cn(
        "relative h-[56.5px] w-[7px] shrink-0 transition-[translate,scale] duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110",
        flip
          ? "group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]"
          : "group-hover:-translate-x-[3px] group-focus-visible:-translate-x-[3px]",
      )}
    >
      <span className={cn("absolute inset-0", flip && "-scale-x-100")}>
        <Image
          src={src}
          alt=""
          width={7.5}
          height={57.5}
          className="absolute -top-[0.5px] -left-[0.5px] max-w-none"
        />
      </span>
    </span>
  );
}

function ButtonContent({
  variant,
  children,
}: {
  variant: ButtonVariant;
  children: ReactNode;
}) {
  switch (variant) {
    case "primary":
      return (
        <>
          <Arrow src={arrowWhite} />
          <span className="text-trim-cap">{children}</span>
        </>
      );
    case "framed":
      return (
        <>
          <Bracket src={bracketLeft} />
          <span className="-mx-[3px] bg-primary px-[60px] py-[15px] type-text-4 text-primary-foreground">
            {children}
          </span>
          <Bracket src={bracketRight} flip />
        </>
      );
    case "link":
      return (
        <>
          <span className="flex w-full items-center gap-4">
            <Arrow src={arrowBlack} />
            <span className="text-trim-cap">{children}</span>
          </span>
          <span aria-hidden="true" className="relative h-0 w-full">
            <Image
              src={underline}
              alt=""
              width={99}
              height={0.8}
              className="absolute -top-[0.8px] left-0 h-[0.8px] w-full max-w-none"
            />
          </span>
        </>
      );
  }
}

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

export function Button({
  variant = "primary",
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonStyles(variant, className)} {...props}>
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </button>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

/** A `next/link` styled as a button. */
export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonStyles(variant, className)} {...props}>
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </Link>
  );
}
