// ms each letter takes to fade in, and ms added per letter's position so
// they stagger left to right; shared between SplitText (a "use client"
// component, so this can't just be exported from there) and server
// components that need to sequence one SplitText after another — e.g. a dd
// waiting for its dt to finish.
export const CHAR_STAGGER_MS = 30;
export const CHAR_DURATION_MS = 100;

/** Total ms `text`'s own SplitText reveal takes, start to finish. */
export function splitTextDuration(text) {
  const length = [...String(text)].length;
  return length === 0 ? 0 : (length - 1) * CHAR_STAGGER_MS + CHAR_DURATION_MS;
}
