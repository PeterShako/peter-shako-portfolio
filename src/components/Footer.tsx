export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-white/10 py-8 px-5 text-center">
      <p className="text-xs text-[var(--muted)]">
        © 2026 Peter Shako · Nairobi, Kenya ·{" "}
        <a
          href="https://github.com/PeterShako"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--coral)] transition-colors"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/peter-shako-07335a315/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--coral)] transition-colors"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
