"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = document.querySelectorAll<HTMLElement>(
      "main > section, main > .servicearea, main > .process",
    );
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => reveal.observe(section));
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--scroll-progress",
        String(max > 0 ? window.scrollY / max : 0),
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    document.body.classList.add("is-ready");
    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", updateProgress);
      document.body.classList.remove("is-ready");
    };
  }, []);

  return (
    <>
      <div
        className="page-loader"
        role="status"
        aria-label="Carregando portfólio"
      >
        <span>MD.</span>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </>
  );
}
