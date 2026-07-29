import { useState } from "react";
import { PHOTOS } from "../data/photos";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const show = (i: number) => setIndex(((i % PHOTOS.length) + PHOTOS.length) % PHOTOS.length);

  return (
    <section id="photos" className="bg-[var(--ink)] py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--coral)] mb-3">
            Gallery
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">Behind the Lens</h2>
        </div>

        <div className="columns-2 sm:columns-3 gap-3 [&>*]:mb-3">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="relative break-inside-avoid rounded-lg overflow-hidden cursor-pointer group border border-white/10"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full block group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-white/90">{p.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-2xl text-[var(--muted)] hover:text-white"
            onClick={() => setIndex(null)}
          >
            <FaXmark />
          </button>
          <button
            className="absolute left-3 sm:left-8 text-3xl text-[var(--muted)] hover:text-[var(--coral)] p-3"
            onClick={(e) => {
              e.stopPropagation();
              show(index - 1);
            }}
          >
            <FaChevronLeft />
          </button>
          <img
            src={PHOTOS[index].src}
            alt={PHOTOS[index].caption}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-3 sm:right-8 text-3xl text-[var(--muted)] hover:text-[var(--coral)] p-3"
            onClick={(e) => {
              e.stopPropagation();
              show(index + 1);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
