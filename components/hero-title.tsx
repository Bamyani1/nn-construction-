import type { CSSProperties, ReactNode } from "react";

interface HeroTitleProps {
  main: string;
  accent: string;
}

const segmenter = new Intl.Segmenter("en", { granularity: "word" });

/* Splits a phrase into per-word .nn-hero-word spans, interleaved with the
   original whitespace and punctuation as plain text nodes so native wrap
   stays intact. Folds U+2011 (non-breaking hyphen) back into the surrounding
   word — Intl.Segmenter marks U+2011 as non-word-like, which would otherwise
   split "Full‑service" into two animatable fragments. */
function splitPhrase(text: string, startIndex: number) {
  const nodes: ReactNode[] = [];
  let wordIndex = startIndex;
  let buffer: string | null = null;
  let bufferWi: number | null = null;
  let foldNext = false;

  const flush = () => {
    if (buffer === null || bufferWi === null) return;
    nodes.push(
      <span
        key={`w-${bufferWi}`}
        className="nn-hero-word"
        style={{ "--wi": bufferWi } as CSSProperties}
      >
        {buffer}
      </span>,
    );
    buffer = null;
    bufferWi = null;
  };

  for (const { segment, isWordLike } of segmenter.segment(text)) {
    if (isWordLike) {
      if (foldNext && buffer !== null) {
        buffer += segment;
        foldNext = false;
      } else {
        flush();
        buffer = segment;
        bufferWi = wordIndex++;
      }
    } else if (segment === "\u2011" && buffer !== null) {
      buffer += segment;
      foldNext = true;
    } else if (/^\s+$/.test(segment)) {
      flush();
      foldNext = false;
      nodes.push(segment);
    } else if (buffer !== null) {
      /* Non-whitespace punctuation (".", ","): attach to the current word
         span so it stays on the same line — otherwise inline-block word
         boundaries let a bare period wrap to a line of its own. */
      buffer += segment;
    } else {
      nodes.push(segment);
    }
  }
  flush();
  return { nodes, wordsConsumed: wordIndex - startIndex };
}

export function HeroTitle({ main, accent }: HeroTitleProps) {
  const mainPart = splitPhrase(main, 0);
  const accentPart = splitPhrase(accent, mainPart.wordsConsumed);
  return (
    <h1 className="nn-hero-split-title">
      {mainPart.nodes}
      <span className="nn-hero-split-title-accent">{accentPart.nodes}</span>
    </h1>
  );
}
