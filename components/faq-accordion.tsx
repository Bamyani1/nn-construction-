"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data";

interface FaqAccordionProps {
  items: Faq[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={item.q}
            className="nn-faq"
            aria-expanded={open}
            onClick={() => setOpenIndex(open ? -1 : idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpenIndex(open ? -1 : idx);
              }
            }}
          >
            <div className="nn-faq-row">
              <span className="nn-faq-q">{item.q}</span>
              <span className="nn-faq-toggle">{open ? "−" : "+"}</span>
            </div>
            <div className="nn-faq-a">{item.a}</div>
          </div>
        );
      })}
    </>
  );
}
