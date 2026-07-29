import { FaClapperboard, FaPalette, FaCode, FaInstagram, FaCalendar, FaCamera } from "react-icons/fa6";

    const SERVICES = [
  {
    icon: FaClapperboard,
    title: "Production",
    desc: "Directing, producing, camera operation, lighting & sound, and live news anchoring across broadcast and documentary formats.",
    tags: ["Directing", "Producing", "Camera", "Lighting & Sound", "News Anchoring"],
  },
  {
    icon: FaPalette,
    title: "Post-Production",
    desc: "Editing, color grading and audio finishing that takes raw footage to festival-ready cuts.",
    tags: ["Premiere Pro", "DaVinci Resolve", "Color Grading", "iZotope RX", "Motion Graphics"],
  },
  {
    icon: FaCamera,
    title: "Photography",
    desc: "Capturing striking visual stories, behind-the-scenes moments, and festival-ready stills with an eye for composition.",
    tags: ["Still Photography", "Composition", "Lighting", "Visual Storytelling", "Editing"],
  },
  {
    icon: FaInstagram,
    title: "Social Media Management",
    desc: "Curating and editing digital content to build engagement, optimize reach, and manage online presence.",
    tags: ["Content Strategy", "Video Editing", "Audience Engagement", "Platform Growth"],
  },
  {
    icon: FaCode,
    title: "Development",
    desc: "Software built on a Linux-first workflow, from scripting utilities to full web apps.",
    tags: ["Python", "JavaScript", "HTML / CSS / Django", "Linux / Arch", "Cybersecurity"],
  },
  {
    icon: FaCalendar,
    title: "Technical Lead & Festival Organization",
    desc: "Coordinating technical pipelines, managing live streams, and organizing film festival showcases.",
    tags: ["Event Coordination", "Live Streaming", "Technical Direction", "Festival Management"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--ink)] py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--coral)] mb-3">
            What I Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">My Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group border border-white/10 rounded-2xl p-8 bg-[var(--panel)] hover:border-[var(--coral)]/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-[var(--coral)]/40 text-[var(--coral)] text-2xl mb-6 group-hover:bg-[var(--coral)] group-hover:text-[#0b0c10] transition-colors">
                <s.icon />
              </div>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
