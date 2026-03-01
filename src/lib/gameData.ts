export interface Question {
  id: string;
  subject: "latin" | "math";
  type: "multiple_choice" | "fill_blank" | "order" | "translate";
  question: string;
  options?: string[];
  correctAnswer: string;
  hint: string;
  difficulty: number;
}

export interface CharacterStage {
  level: number;
  name: string;
  emoji: string;
  description: string;
  requiredXP: number;
}

export const CHARACTER_STAGES: CharacterStage[] = [
  { level: 1, name: "Magisches Ei", emoji: "🥚", description: "Ein geheimnisvolles Ei voller Potential", requiredXP: 0 },
  { level: 2, name: "Funkelnder Keim", emoji: "✨", description: "Erste magische Funken erscheinen", requiredXP: 100 },
  { level: 3, name: "Kleiner Schüler", emoji: "🐣", description: "Ein neugieriger Lernling erwacht", requiredXP: 250 },
  { level: 4, name: "Wissenswanderer", emoji: "🦊", description: "Auf dem Weg durch die Bibliothek", requiredXP: 500 },
  { level: 5, name: "Magisches Wesen", emoji: "🐉", description: "Erste magische Kräfte entfalten sich", requiredXP: 800 },
  { level: 6, name: "Runenleser", emoji: "📖", description: "Kann alte Runen entziffern", requiredXP: 1200 },
  { level: 7, name: "Zauberlehrling", emoji: "🧙", description: "Beherrscht einfache Zaubersprüche", requiredXP: 1700 },
  { level: 8, name: "Weiser Gelehrter", emoji: "🦉", description: "Tiefes Wissen über Sprache und Zahlen", requiredXP: 2300 },
  { level: 9, name: "Meistermagier", emoji: "⭐", description: "Fast am Ziel der Meisterschaft", requiredXP: 3000 },
  { level: 10, name: "Lateinischer Wächter", emoji: "🏛️", description: "Hüter des antiken Wissens", requiredXP: 4000 },
];

export const LATIN_QUESTIONS: Question[] = [
  {
    id: "l1", subject: "latin", type: "multiple_choice",
    question: "Was bedeutet 'amicus'?",
    options: ["Feind", "Freund", "Lehrer", "König"],
    correctAnswer: "Freund",
    hint: "Denke an das Wort 'amical' 🙂", difficulty: 1,
  },
  {
    id: "l2", subject: "latin", type: "multiple_choice",
    question: "Welcher Kasus ist 'dominum'?",
    options: ["Nominativ", "Genitiv", "Akkusativ", "Dativ"],
    correctAnswer: "Akkusativ",
    hint: "Die Endung '-um' ist ein wichtiger Hinweis!", difficulty: 1,
  },
  {
    id: "l3", subject: "latin", type: "multiple_choice",
    question: "'Puella' gehört zur...",
    options: ["a-Deklination", "o-Deklination", "konsonantischen Deklination", "u-Deklination"],
    correctAnswer: "a-Deklination",
    hint: "Schau dir die Endung '-a' an 🙂", difficulty: 1,
  },
  {
    id: "l4", subject: "latin", type: "translate",
    question: "Was bedeutet 'Magister discipulos docet'?",
    options: ["Der Schüler lehrt den Lehrer", "Der Lehrer unterrichtet die Schüler", "Die Schüler lernen alleine", "Der Lehrer schläft"],
    correctAnswer: "Der Lehrer unterrichtet die Schüler",
    hint: "Magister = Lehrer, docet = lehrt", difficulty: 2,
  },
  {
    id: "l5", subject: "latin", type: "multiple_choice",
    question: "Wie lautet der Genitiv Singular von 'servus'?",
    options: ["servo", "servi", "servum", "servis"],
    correctAnswer: "servi",
    hint: "Die o-Deklination hat im Genitiv die Endung '-i'", difficulty: 2,
  },
  {
    id: "l6", subject: "latin", type: "multiple_choice",
    question: "'Laudo' bedeutet...",
    options: ["ich laufe", "ich lobe", "ich lese", "ich lerne"],
    correctAnswer: "ich lobe",
    hint: "Denke an 'Lob' auf Deutsch!", difficulty: 1,
  },
  {
    id: "l7", subject: "latin", type: "translate",
    question: "Übersetze: 'Roma magna est.'",
    options: ["Rom ist groß.", "Der Römer ist stark.", "Rom war groß.", "Die Römer sind groß."],
    correctAnswer: "Rom ist groß.",
    hint: "magna = groß, est = ist", difficulty: 1,
  },
];

export const MATH_QUESTIONS: Question[] = [
  {
    id: "m1", subject: "math", type: "multiple_choice",
    question: "Was ist 3/4 + 1/4?",
    options: ["1/2", "1", "4/8", "3/4"],
    correctAnswer: "1",
    hint: "Gleiche Nenner – einfach die Zähler addieren! 🙂", difficulty: 1,
  },
  {
    id: "m2", subject: "math", type: "multiple_choice",
    question: "Löse: 2x + 6 = 14",
    options: ["x = 3", "x = 4", "x = 5", "x = 8"],
    correctAnswer: "x = 4",
    hint: "Erst -6, dann durch 2 teilen", difficulty: 2,
  },
  {
    id: "m3", subject: "math", type: "multiple_choice",
    question: "Was ist 0,25 als Bruch?",
    options: ["1/2", "1/3", "1/4", "1/5"],
    correctAnswer: "1/4",
    hint: "25 von 100 – vereinfache! 🙂", difficulty: 1,
  },
  {
    id: "m4", subject: "math", type: "multiple_choice",
    question: "Wie viel Prozent sind 3 von 12?",
    options: ["20%", "25%", "30%", "33%"],
    correctAnswer: "25%",
    hint: "3 ÷ 12 = ? Dann mal 100", difficulty: 2,
  },
  {
    id: "m5", subject: "math", type: "multiple_choice",
    question: "Ein Dreieck hat Winkel von 60° und 80°. Wie groß ist der dritte Winkel?",
    options: ["30°", "40°", "50°", "60°"],
    correctAnswer: "40°",
    hint: "Alle Winkel zusammen = 180°", difficulty: 2,
  },
  {
    id: "m6", subject: "math", type: "multiple_choice",
    question: "Was ist 2/3 × 3/4?",
    options: ["6/12", "1/2", "5/7", "2/4"],
    correctAnswer: "1/2",
    hint: "Zähler × Zähler, Nenner × Nenner, dann kürzen!", difficulty: 2,
  },
  {
    id: "m7", subject: "math", type: "multiple_choice",
    question: "Berechne: (-3) + 7",
    options: ["10", "-10", "4", "-4"],
    correctAnswer: "4",
    hint: "Vom negativen Bereich 7 Schritte nach rechts", difficulty: 1,
  },
];

export function getRandomQuestions(subject: "latin" | "math", count: number): Question[] {
  const pool = subject === "latin" ? LATIN_QUESTIONS : MATH_QUESTIONS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getCharacterStage(xp: number): CharacterStage {
  let stage = CHARACTER_STAGES[0];
  for (const s of CHARACTER_STAGES) {
    if (xp >= s.requiredXP) stage = s;
    else break;
  }
  return stage;
}

export function getNextStage(xp: number): CharacterStage | null {
  const current = getCharacterStage(xp);
  const idx = CHARACTER_STAGES.findIndex(s => s.level === current.level);
  return idx < CHARACTER_STAGES.length - 1 ? CHARACTER_STAGES[idx + 1] : null;
}

export const XP_PER_CORRECT = 10;
export const XP_DAILY_BONUS = 30;
