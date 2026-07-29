
export type QA = { keywords: string[]; answer: string };

export const SHAKO_QA: QA[] = [
  {
    keywords: ["direct", "director", "directed"],
    answer:
      "Shako has directed 19+ published works at UNC TV since 2022. His biggest directing credit is his capstone documentary, \"The Last Guardians: Climate Displacement and the Chepkitale Ogiek,\" a 7-minute human-interest environmental film shot across 5 locations in Bungoma County.",
  },
  {
    keywords: ["ogiek", "chepkitale", "documentary", "last guardians"],
    answer:
      "\"The Last Guardians\" follows the indigenous Ogiek community of Chepkitale on Mt. Elgon, documenting their traditional land rights against modern climate pressures. Shako managed the full production pipeline over 5 days in April 2026, catalogued 635+ B-roll clips and 26 interviews, then handled multi-node color grading in DaVinci Resolve and audio cleanup in Audition and iZotope RX. It won Best Cinematography, Best Shot, and three more honors at the Vuka Film Festival 2026.",
  },
  {
    keywords: ["tech", "skill", "code", "coding", "program", "developer", "development"],
    answer:
      "Shako writes Python, C, JavaScript, MySQL, and Dart. He runs Arch Linux (manual install) dual-booted with Windows 11 on an ASUS TUF Gaming A15, and he's a certified web developer from eMobilis with HTML, CSS, Django, MySQL, and Bootstrap under his belt. He's also into cybersecurity: network protocols, encryption, and ethical hacking.",
  },
  {
    keywords: ["aviation", "pilot", "fly", "airbus", "plane"],
    answer:
      "Shako's long-term dream is to pilot an Airbus A380-800. He's actively researching self-sponsored flight school routes and reading aviation handbooks on the side.",
  },
  {
    keywords: ["open to work", "hire", "available", "job", "opportunit"],
    answer:
      "Yes, Shako is open to work in media production, post-production, and technical roles that line up with his skills. Best way to reach him is through LinkedIn or GitHub.",
  },
  {
    keywords: ["vuka", "festival", "award", "won"],
    answer:
      "At the Vuka Film Festival 2026, Shako's documentary picked up Best Cinematography (winner), Best Shot (winner), 1st Runner-Up Best Producer, 1st Runner-Up Best Cultural Heritage Preservation, and 2nd Runner-Up Best Documentary. He was also honored as Technical Lead and Festival Organizer for coordinating the whole event.",
  },
  {
    keywords: ["unc tv", "uncTV", "broadcast", "production experience"],
    answer:
      "Shako has been active at UNC TV since 2022, a four-year run. His published roles span Director (19+), Producer (25+), Editor/Color (20+), Camera (25+), Lighting/Sound (3+), and one News Anchor credit. His post toolkit is Premiere Pro, DaVinci Resolve, iZotope RX, CapCut, StoryHero, and TurboScribe.",
  },
  {
    keywords: ["education", "school", "study", "university", "degree", "academic"],
    answer:
      "Shako is a final-year Bachelor of Arts in Broadcast Production student at the University of Nairobi, graduating in 2026. He also completed AI training at Moringa School in early 2026 and holds a Web Development certification from eMobilis.",
  },
  {
    keywords: ["hobby", "hobbies", "interest", "football", "arsenal", "rubik", "gaming", "fpl"],
    answer:
      "Outside of work, Shako's an Arsenal fan who plays Football Manager, FC 26, and Fantasy Premier League (team: Netsix and chill FC). He solves the Rubik's cube in a personal best of 39 seconds, is training toward Muay Thai/MMA/boxing, and is active on Steam and Twitch.",
  },
  {
    keywords: ["who is shako", "about shako", "who is peter", "background"],
    answer:
      "Peter Shako Munialo is a broadcast producer, developer, and award-winning filmmaker based in Nairobi, Kenya. He's spent four years at UNC TV working across directing, producing, editing, camera, and lighting, while also building software on the side. He's driven by the point where visual storytelling meets technical systems.",
  },
];

export const SHAKO_DEFAULT_ANSWER =
  "I don't have that detail on hand, but feel free to reach out to Shako directly on LinkedIn or GitHub, he's happy to answer.";

export function answerShako(question: string): string {
  const q = question.toLowerCase();
  let best: QA | null = null;
  let bestScore = 0;
  for (const qa of SHAKO_QA) {
    const score = qa.keywords.reduce((acc, kw) => (q.includes(kw) ? acc + 1 : acc), 0);
    if (score > bestScore) {
      bestScore = score;
      best = qa;
    }
  }
  return best ? best.answer : SHAKO_DEFAULT_ANSWER;
}
