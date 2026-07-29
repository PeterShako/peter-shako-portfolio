export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 overflow-hidden"
    >
      {/* Background: movie set */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Movie set"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b0c10]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/50 to-[#0b0c10]/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-16">
        <div className="float-slow w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-[var(--coral)] to-[var(--coral-2)] shadow-[0_0_40px_rgba(255,90,95,0.35)]">
          <img
            src="/images/profile.jpg"
            alt="Peter Shako"
            className="w-full h-full rounded-full object-cover border-4 border-[#0b0c10]"
          />
        </div>

        <p className="mt-6 text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
          Nairobi, Kenya
        </p>

        <h1 className="mt-3 font-display text-4xl sm:text-6xl md:text-7xl">
          <span className="text-[var(--coral)]">Peter</span> Shako
        </h1>

        <p className="mt-4 max-w-xl text-sm sm:text-base text-[var(--muted)] font-light leading-relaxed">
          A Creative Producer, Director &amp; Full-Stack Developer building
          stories on set and systems in code. Four years at UNC TV, one
          award-winning documentary, and a growing line of software.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="px-7 py-3 rounded-full bg-[var(--coral)] text-[#0b0c10] text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[var(--coral-2)] transition-colors"
          >
            View My Work
          </a>
          <a
            href="#chat"
            className="px-7 py-3 rounded-full border border-white/25 text-[var(--cream)] text-xs font-semibold tracking-[0.1em] uppercase hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
          >
            Ask Me Anything
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] hover:text-[var(--coral)] transition-colors"
      >
        Scroll Down
        <span className="w-px h-8 bg-current opacity-60" />
      </a>
    </section>
  );
}
