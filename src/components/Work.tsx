import { useState } from "react";
import { VIDEOS, TAB_LABELS } from "../data/videos";
import { FaPlay, FaXmark } from "react-icons/fa6";

export default function Work() {
  const tabs = Object.keys(TAB_LABELS);
  const [active, setActive] = useState(tabs[0]);
  const [modal, setModal] = useState<{ id: string; role: string } | null>(null);

  const videos = VIDEOS[active] || [];

  return (
    <section id="work" className="bg-[var(--panel)] py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--coral)] mb-3">
            Broadcast Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">UNC TV — Published Work</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-1 border-b border-white/10 mb-8">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`text-xs font-semibold tracking-[0.1em] uppercase px-4 py-3 border-b-2 transition-colors ${
                active === t
                  ? "text-[var(--coral)] border-[var(--coral)]"
                  : "text-[var(--muted)] border-transparent hover:text-[var(--cream)]"
              }`}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((v, idx) => (
            <button
              key={v.id + idx}
              onClick={() => setModal({ id: v.id, role: TAB_LABELS[active] })}
              className="group text-left rounded-xl overflow-hidden border border-white/10 bg-[var(--ink)] hover:border-[var(--coral)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <FaPlay className="text-3xl text-white" />
                </div>
                <span className="absolute top-2 right-2 bg-[var(--coral)] text-[#0b0c10] text-[10px] font-bold px-2 py-0.5 rounded">
                  YT
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--coral)]">
                  {TAB_LABELS[active]}
                </span>
                <span className="text-[11px] text-[var(--muted)]">↗ YouTube</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-3xl bg-[var(--panel)] border border-white/10 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[var(--coral)]">
                {modal.role}
              </span>
              <button
                onClick={() => setModal(null)}
                className="text-[var(--muted)] hover:text-[var(--cream)]"
              >
                <FaXmark />
              </button>
            </div>
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${modal.id}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
