import React from "react";

const INFO = [
  { label: "Name", value: "Peter Shako Munialo" },
  { label: "Location", value: "Nairobi, Kenya" },
  { label: "Experience", value: "4 Years (UNC TV)" },
  { label: "Education", value: "B.A. Broadcast Production" },
  { label: "Availability", value: "Open to Work" },
  { label: "Ambition", value: "Airbus A380 Pilot" },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--panel)] py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 max-w-md mx-auto">
            <img
              src="/images/about.jpg"
              alt="Shako on a film set"
              className="w-full h-[480px] object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -right-2 md:right-6 w-28 h-28 rounded-2xl border-2 border-[var(--coral)]/60 -z-10" />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--coral)] mb-3">
            Discover
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">About Me</h2>
          <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base">
            I'm a broadcast producer, developer, and award-winning filmmaker
            driven by the intersection of visual storytelling and software
            engineering. My journey at the{" "}
            <span className="text-[var(--cream)]">University of Nairobi</span>{" "}
            has been defined by a four-year commitment to{" "}
            <span className="text-[var(--cream)]">UNC TV</span>, anchoring
            myself in high-pressure media environments while honing my craft
            as a visual storyteller.
          </p>
          <p className="mt-4 text-[var(--muted)] leading-relaxed text-sm sm:text-base">
            Beyond the lens, I'm a builder of systems. I run{" "}
            <span className="text-[var(--cream)]">Arch Linux</span>, write{" "}
            <span className="text-[var(--cream)]">Python</span> and{" "}
            <span className="text-[var(--cream)]">Javascript</span>, and design
            efficient technical workflows. My documentary work was recently
            recognized at the{" "}
            <span className="text-[var(--cream)]">Vuka Film Festival 2026</span>
            , earning Best Cinematography and Best Shot.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border border-white/10 rounded-xl p-6">
            {INFO.map((i) => (
              <div key={i.label}>
                <span className="text-[var(--muted)] text-xs uppercase tracking-wide">
                  {i.label}:{" "}
                </span>
                <span className="text-[var(--cream)] text-sm font-medium">
                  {i.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-full bg-[var(--coral)] text-[#0b0c10] text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[var(--coral-2)] transition-colors"
            >
              Download CV
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/PeterShako"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-white/20 text-xs font-semibold tracking-[0.1em] uppercase hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/peter-shako-07335a315/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-white/20 text-xs font-semibold tracking-[0.1em] uppercase hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
