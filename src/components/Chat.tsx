import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { answerShako } from "../data/shakoInfo";

type Msg = { who: "ai" | "user"; text: string };

const SUGGESTIONS = [
  "What has Shako directed?",
  "Tell me about his Ogiek documentary",
  "What are his tech skills?",
  "What's his aviation ambition?",
  "Is he open to work?",
];

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      who: "ai",
      text: "Hi! I'm Shako's assistant. Ask me anything about his broadcast experience, tech projects, or what he's looking for next.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, typing]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { who: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { who: "ai", text: answerShako(q) }]);
    }, 700 + Math.random() * 500);
  };

  return (
    <section id="chat" className="bg-[var(--panel)] py-24 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--coral)] mb-3">
            AI Assistant
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">Ask Shako</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[var(--ink)] overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
            <span className="w-2 h-2 rounded-full bg-[var(--coral)] pulse-dot" />
            <span className="text-sm font-semibold">Shako's Assistant</span>
            <span className="ml-auto text-xs text-[var(--muted)] hidden sm:block">
              Ask me anything about Shako
            </span>
          </div>

          <div
            ref={scrollRef}
            className="min-h-[320px] max-h-[420px] overflow-y-auto p-5 flex flex-col gap-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 max-w-[85%] ${
                  m.who === "user" ? "self-end flex-row-reverse" : "self-start"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    m.who === "ai"
                      ? "bg-[var(--coral)] text-[#0b0c10]"
                      : "bg-white/10 text-[var(--cream)]"
                  }`}
                >
                  {m.who === "ai" ? "S" : "You"}
                </div>
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.who === "ai"
                      ? "bg-[var(--panel-2)] border border-white/10"
                      : "bg-[var(--coral)] text-[#0b0c10]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-3 max-w-[85%] self-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-[var(--coral)] text-[#0b0c10]">
                  S
                </div>
                <div className="px-4 py-3 rounded-2xl bg-[var(--panel-2)] border border-white/10 flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] bounce-dot" style={{ animationDelay: "0s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] bounce-dot" style={{ animationDelay: "0.2s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] bounce-dot" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 px-5 py-3 border-t border-white/10">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-[var(--muted)] hover:border-[var(--coral)] hover:text-[var(--coral)] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center border-t border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask about Shako's work, skills, or experience..."
              className="flex-1 bg-transparent outline-none px-5 py-4 text-sm placeholder:text-[var(--muted)]"
            />
            <button
              onClick={() => send(input)}
              className="px-5 py-4 text-[var(--coral)] hover:text-[var(--cream)] transition-colors"
              aria-label="Send"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
