"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "funding", label: "Funding" },
  { id: "ownership", label: "Ownership" },
  { id: "investors", label: "Investors" },
  { id: "leadership", label: "Leadership" },
  { id: "products", label: "Products" },
];

export default function CompanyTabs() {
  const [active, setActive] = useState("overview");
  const [stuck, setStuck] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-140px 0px -60% 0px",
        threshold: 0,
      }
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);

      if (section) observer.observe(section);
    });

    const onScroll = () => {
      if (!wrapperRef.current) return;

      const top = wrapperRef.current.getBoundingClientRect().top;

      setStuck(top <= 64);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 95,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <div
      ref={wrapperRef}
      className={clsx(
        "sticky top-16 z-50 transition-all duration-300",
        stuck
          ? "rounded-none border-b border-white/10 bg-black/45 backdrop-blur-2xl shadow-2xl"
          : "mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl overflow-x-auto scrollbar-hide justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={clsx(
              "relative shrink-0 px-6 py-4 text-sm font-semibold transition cursor-pointer",
              active === tab.id
                ? stuck
                  ? "text-white"
                  : "text-pink-600"
                : stuck
                ? "text-white/70 hover:text-white"
                : "text-gray-500 hover:text-black"
            )}
          >
            {tab.label}

            <span
              className={clsx(
                "absolute bottom-0 left-0 h-[2px] w-full transition-all",
                active === tab.id
                  ? "bg-pink-500"
                  : "bg-transparent"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}