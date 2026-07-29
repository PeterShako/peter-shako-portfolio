import { useEffect, useState } from "react";
import { FaStar, FaCodeFork, FaArrowUpRightFromSquare } from "react-icons/fa6";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Lua: "#000080",
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/PeterShako/repos?sort=updated&per_page=6")
      .then((r) => {
        if (!r.ok) throw new Error("bad response");
        return r.json();
      })
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="bg-[var(--panel)] py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--coral)] mb-3">
            Code
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">GitHub Projects</h2>
        </div>

        {error && (
          <p className="text-center text-sm text-[var(--muted)]">
            Could not load repositories.{" "}
            <a
              href="https://github.com/PeterShako"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--coral)]"
            >
              View on GitHub →
            </a>
          </p>
        )}

        {!error && !repos && (
          <p className="text-center text-sm text-[var(--muted)]">Loading repositories…</p>
        )}

        {!error && repos && repos.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((r) => (
              <a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className="group border border-white/10 rounded-xl p-6 bg-[var(--ink)] hover:border-[var(--coral)]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg text-[var(--coral)]">{r.name}</h3>
                  <FaArrowUpRightFromSquare className="text-[var(--muted)] group-hover:text-[var(--coral)] shrink-0 mt-1" />
                </div>
                <p className="text-sm text-[var(--muted)] mt-2 flex-1 leading-relaxed">
                  {r.description || "No description provided."}
                </p>
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10 text-xs text-[var(--muted)]">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ background: LANG_COLORS[r.language || ""] || "#8b949e" }}
                    />
                    {r.language || "N/A"}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStar /> {r.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeFork /> {r.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://github.com/PeterShako"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-xs font-semibold tracking-[0.1em] uppercase hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
