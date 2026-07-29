import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#photos", label: "Gallery" },
  { href: "#github", label: "Code" },
  { href: "#resume", label: "Resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10" : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#hero" className="font-display text-xl tracking-wide">
          <span className="text-[var(--cream)]">Peter Shako</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--muted)] hover:text-[var(--coral)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#chat"
          className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full border border-[var(--coral)] text-[var(--coral)] hover:bg-[var(--coral)] hover:text-[#0b0c10] transition-colors"
        >
          Contact Me
        </a>

        <button
          className="lg:hidden text-2xl text-[var(--cream)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0b0c10]/98 border-t border-white/10 px-5 py-4">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium tracking-[0.1em] uppercase text-[var(--muted)] hover:text-[var(--coral)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#chat"
                onClick={() => setOpen(false)}
                className="inline-block text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full border border-[var(--coral)] text-[var(--coral)]"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
