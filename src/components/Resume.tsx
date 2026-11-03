const TIMELINE = [
  {
    year: "2022 — Present",
    title: "UNC TV — Producer / Director / Editor / Camera",
    desc: "Four-year run across live and recorded production: 19+ directing, 25+ producing, 20+ editing, 25+ camera credits.",
  },
  {
    year: "2022 — 2026",
    title: "University of Nairobi",
    desc: "Bachelor of Arts, Broadcast Production (final year, graduating September 2026).",
  },
  {
    year: "2025",
    title: "eMobilis",
    desc: "Certified Web Developer — HTML, CSS, Django, MySQL, JavaScript, Bootstrap.",
  },
  {
    year: "Early 2026",
    title: "Moringa School",
    desc: "AI training program.",
  },
  {
    year: "June 2026",
    title: "Vuka Film Festival — 5 Honors",
    desc: "Best Cinematography, Best Shot, 1st RU Best Producer, 1st RU Cultural Heritage, 2nd RU Best Documentary. Also Technical Lead & Festival Organizer.",
  },
  {
    year: "July 2026",
    title: "BBC Camera Operator",
    desc: "Served as the BBC camera operator for the Future of Journalism Festival that took place at the University of Nairobi.",
  },
  {
    year: "September - October 2026",
    title: "FreezeFrame Productions - Editor / Camera Operator",
    desc: "Served as the editor and camera operator for FreezeFrame Productions, a production company that specializes in creating high-quality video content for clients.",
  },

];

export default function Resume() {
  return (
    <section id="resume" className="bg-[var(--ink)] py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--coral)] mb-3">
            Curriculum Vitae
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">My Resume</h2>
        </div>

        <div className="relative pl-8 border-l border-white/10 space-y-10 mb-14">
          {TIMELINE.map((t) => (
            <div key={t.title} className="relative">
              <span className="absolute -left-[38px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--coral)] ring-4 ring-[var(--ink)]" />
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--coral)] mb-1">
                {t.year}
              </p>
              <h3 className="font-display text-lg mb-1.5">{t.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl mb-2">Peter Shako — CV</h3>
            <p className="text-sm text-[var(--muted)] max-w-md">
              Broadcast Producer, Director, Editor, and Developer. University
              of Nairobi final-year student with four years of live
              production experience at UNC TV.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[var(--coral)] text-[#0b0c10] text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[var(--coral-2)] transition-colors"
            >
              View PDF
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-full border border-white/20 text-xs font-semibold tracking-[0.1em] uppercase hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
