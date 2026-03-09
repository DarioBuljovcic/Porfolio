"use client";

type ScrollToTopButtonProps = {
  className?: string;
};

export default function ScrollToTopButton({ className }: ScrollToTopButtonProps) {
  function handleClick() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      <i className="fas fa-arrow-up" /> Nazad na vrh
    </button>
  );
}
