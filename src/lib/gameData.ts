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

// ═══════════════════════════════════════════════════════
// LATIN QUESTIONS — Fact-checked for Gymnasium 5-7
// ═══════════════════════════════════════════════════════

export const LATIN_QUESTIONS: Question[] = [
  // --- Vokabeln (Wortschatz) ---
  { id: "l1", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'amicus'?", options: ["Feind", "Freund", "Lehrer", "König"], correctAnswer: "Freund", hint: "Denke an das französische Wort 'ami' 🙂", difficulty: 1 },
  { id: "l6", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'laudare'?", options: ["laufen", "loben", "lesen", "lernen"], correctAnswer: "loben", hint: "Denke an 'Lob' auf Deutsch!", difficulty: 1 },
  { id: "l8", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'aqua'?", options: ["Feuer", "Luft", "Wasser", "Erde"], correctAnswer: "Wasser", hint: "Denke an 'Aquarium' 🐟", difficulty: 1 },
  { id: "l10", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'terra'?", options: ["Stern", "Erde/Land", "Meer", "Himmel"], correctAnswer: "Erde/Land", hint: "Denke an 'Terrasse' oder 'Terrain'", difficulty: 1 },
  { id: "l13", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'schola'?", options: ["Schüler", "Lehrer", "Schule", "Buch"], correctAnswer: "Schule", hint: "Fast wie im Deutschen! 📚", difficulty: 1 },
  { id: "l15", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'magnus, -a, -um'?", options: ["klein", "schnell", "groß", "schön"], correctAnswer: "groß", hint: "Denke an 'Magnum' (etwas Großes)", difficulty: 1 },
  { id: "l17", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'via'?", options: ["Leben", "Weg/Straße", "Kraft", "Wahrheit"], correctAnswer: "Weg/Straße", hint: "Im Italienischen heißt die Straße auch 'via'", difficulty: 1 },
  { id: "l22", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'nauta'?", options: ["Natur", "Seemann", "Nacht", "Nation"], correctAnswer: "Seemann", hint: "Denke an 'Nautik' ⛵", difficulty: 1 },
  { id: "l23", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'dominus'?", options: ["Haus", "Herr", "Diener", "Tempel"], correctAnswer: "Herr", hint: "Denke an 'dominant'", difficulty: 1 },
  { id: "l24", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'filius'?", options: ["Tochter", "Vater", "Sohn", "Bruder"], correctAnswer: "Sohn", hint: "Denke an 'filial' (kindlich)", difficulty: 1 },
  { id: "l25", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'pater'?", options: ["Mutter", "Vater", "Bruder", "Onkel"], correctAnswer: "Vater", hint: "Wie im Deutschen: 'Pater' im Kloster", difficulty: 1 },
  { id: "l26", subject: "latin", type: "multiple_choice", question: "Was bedeutet 'bellum'?", options: ["schön", "Krieg", "Glocke", "Tier"], correctAnswer: "Krieg", hint: "Nicht verwechseln mit ital. 'bello' (schön)!", difficulty: 1 },

  // --- Deklination & Grammatik ---
  { id: "l2", subject: "latin", type: "multiple_choice", question: "Welcher Kasus ist 'dominum'?", options: ["Nominativ", "Genitiv", "Akkusativ", "Dativ"], correctAnswer: "Akkusativ", hint: "Die Endung '-um' bei der o-Deklination = Akkusativ Singular", difficulty: 1 },
  { id: "l3", subject: "latin", type: "multiple_choice", question: "'Puella' gehört zur...", options: ["a-Deklination", "o-Deklination", "konsonantischen Deklination", "u-Deklination"], correctAnswer: "a-Deklination", hint: "Schau dir die Endung '-a' an 🙂", difficulty: 1 },
  { id: "l5", subject: "latin", type: "multiple_choice", question: "Wie lautet der Genitiv Singular von 'servus'?", options: ["servo", "servi", "servum", "servis"], correctAnswer: "servi", hint: "o-Deklination: Genitiv Singular endet auf '-i'", difficulty: 2 },
  { id: "l9", subject: "latin", type: "multiple_choice", question: "Welche Endung hat der Dativ Singular der a-Deklination?", options: ["-am", "-ae", "-a", "-as"], correctAnswer: "-ae", hint: "Genitiv und Dativ Singular der a-Deklination sind gleich: '-ae'", difficulty: 2 },
  { id: "l14", subject: "latin", type: "multiple_choice", question: "Welcher Kasus antwortet auf die Frage 'Wessen?'", options: ["Nominativ", "Genitiv", "Dativ", "Akkusativ"], correctAnswer: "Genitiv", hint: "Der Kasus des Besitzes", difficulty: 1 },
  { id: "l18", subject: "latin", type: "multiple_choice", question: "Wie heißt der Ablativ Singular von 'dominus'?", options: ["dominum", "domino", "domini", "dominis"], correctAnswer: "domino", hint: "o-Deklination: Ablativ Singular endet auf '-o'", difficulty: 2 },
  { id: "l21", subject: "latin", type: "multiple_choice", question: "Wie lautet der Nominativ Plural von 'puella'?", options: ["puellae", "puellas", "puellam", "puellis"], correctAnswer: "puellae", hint: "a-Deklination: Nominativ Plural = '-ae'", difficulty: 1 },

  // --- Konjugation ---
  { id: "l12", subject: "latin", type: "multiple_choice", question: "Wie lautet die 1. Person Singular Präsens von 'amare'?", options: ["amas", "amo", "amat", "amant"], correctAnswer: "amo", hint: "Die 1. Person Singular Präsens endet auf '-o'", difficulty: 1 },
  { id: "l27", subject: "latin", type: "multiple_choice", question: "Wie lautet die 3. Person Plural Präsens von 'vocare' (rufen)?", options: ["vocat", "vocamus", "vocatis", "vocant"], correctAnswer: "vocant", hint: "3. Person Plural der a-Konjugation: Stamm + '-ant'", difficulty: 2 },

  // --- Übersetzung ---
  { id: "l4", subject: "latin", type: "translate", question: "Übersetze: 'Magister discipulos docet.'", options: ["Der Schüler lehrt den Lehrer.", "Der Lehrer unterrichtet die Schüler.", "Die Schüler lernen alleine.", "Der Lehrer schläft."], correctAnswer: "Der Lehrer unterrichtet die Schüler.", hint: "magister = Lehrer, discipulos = Schüler (Akk. Pl.), docet = lehrt", difficulty: 2 },
  { id: "l7", subject: "latin", type: "translate", question: "Übersetze: 'Roma magna est.'", options: ["Rom ist groß.", "Der Römer ist stark.", "Rom war groß.", "Die Römer sind groß."], correctAnswer: "Rom ist groß.", hint: "magna = groß, est = ist (Präsens!)", difficulty: 1 },
  { id: "l11", subject: "latin", type: "translate", question: "Übersetze: 'Puer in horto ludit.'", options: ["Das Mädchen spielt im Garten.", "Der Junge spielt im Garten.", "Der Junge arbeitet im Garten.", "Der Junge schläft im Garten."], correctAnswer: "Der Junge spielt im Garten.", hint: "puer = Junge, ludere = spielen, hortus = Garten", difficulty: 2 },
  { id: "l16", subject: "latin", type: "translate", question: "Übersetze: 'Ancilla cenam parat.'", options: ["Die Herrin kocht das Essen.", "Die Magd bereitet das Essen vor.", "Die Magd isst zu Abend.", "Die Sklavin kauft Essen."], correctAnswer: "Die Magd bereitet das Essen vor.", hint: "ancilla = Magd, cena = Mahlzeit, parare = vorbereiten", difficulty: 2 },
  { id: "l20", subject: "latin", type: "translate", question: "Übersetze: 'Senator in foro ambulat.'", options: ["Der Senator geht auf dem Forum spazieren.", "Der Senator sitzt im Forum.", "Der Senator spricht im Forum.", "Der Senator schläft im Forum."], correctAnswer: "Der Senator geht auf dem Forum spazieren.", hint: "ambulare = gehen/spazieren (wie 'Ambulanz')", difficulty: 2 },
  { id: "l19", subject: "latin", type: "multiple_choice", question: "Was kann 'liber' bedeuten?", options: ["frei (Adjektiv) oder Buch (Substantiv)", "nur Buch", "nur frei", "Kinder"], correctAnswer: "frei (Adjektiv) oder Buch (Substantiv)", hint: "'liber, libera, liberum' = frei; 'liber, librī' = Buch", difficulty: 2 },
];

// ═══════════════════════════════════════════════════════
// MATH QUESTIONS — Fact-checked for Gymnasium 5-7
// ═══════════════════════════════════════════════════════

export const MATH_QUESTIONS: Question[] = [
  // --- Bruchrechnung ---
  { id: "m1", subject: "math", type: "multiple_choice", question: "Was ist 3/4 + 1/4?", options: ["1/2", "1", "4/8", "3/4"], correctAnswer: "1", hint: "Gleiche Nenner → Zähler addieren: 3+1 = 4, also 4/4 = 1", difficulty: 1 },
  { id: "m3", subject: "math", type: "multiple_choice", question: "Was ist 0,25 als Bruch?", options: ["1/2", "1/3", "1/4", "1/5"], correctAnswer: "1/4", hint: "0,25 = 25/100 = 1/4", difficulty: 1 },
  { id: "m6", subject: "math", type: "multiple_choice", question: "Was ist 2/3 × 3/4?", options: ["6/12", "1/2", "5/7", "2/4"], correctAnswer: "1/2", hint: "2×3=6, 3×4=12 → 6/12 = 1/2", difficulty: 2 },
  { id: "m12", subject: "math", type: "multiple_choice", question: "Was ist 1/2 + 1/3?", options: ["2/5", "5/6", "1/5", "3/6"], correctAnswer: "5/6", hint: "Gemeinsamer Nenner 6: 3/6 + 2/6 = 5/6", difficulty: 2 },
  { id: "m15", subject: "math", type: "multiple_choice", question: "Was ist 3/5 als Dezimalzahl?", options: ["0,35", "0,5", "0,6", "0,75"], correctAnswer: "0,6", hint: "3 ÷ 5 = 0,6", difficulty: 1 },
  { id: "m19", subject: "math", type: "multiple_choice", question: "Was ist 3/4 − 1/2?", options: ["1/4", "1/2", "2/4", "1/8"], correctAnswer: "1/4", hint: "Gleicher Nenner: 3/4 − 2/4 = 1/4", difficulty: 2 },

  // --- Gleichungen ---
  { id: "m2", subject: "math", type: "multiple_choice", question: "Löse: 2x + 6 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 8"], correctAnswer: "x = 4", hint: "14 − 6 = 8, dann 8 ÷ 2 = 4", difficulty: 2 },
  { id: "m11", subject: "math", type: "multiple_choice", question: "Löse: 5x = 35", options: ["x = 5", "x = 6", "x = 7", "x = 8"], correctAnswer: "x = 7", hint: "35 ÷ 5 = 7", difficulty: 1 },
  { id: "m16", subject: "math", type: "multiple_choice", question: "Löse: x/4 = 9", options: ["x = 13", "x = 27", "x = 36", "x = 45"], correctAnswer: "x = 36", hint: "Beide Seiten × 4: x = 9 × 4 = 36", difficulty: 2 },
  { id: "m22", subject: "math", type: "multiple_choice", question: "Löse: 3x − 5 = 10", options: ["x = 3", "x = 5", "x = 7", "x = 15"], correctAnswer: "x = 5", hint: "10 + 5 = 15, dann 15 ÷ 3 = 5", difficulty: 2 },

  // --- Prozent & Verhältnisse ---
  { id: "m4", subject: "math", type: "multiple_choice", question: "Wie viel Prozent sind 3 von 12?", options: ["20%", "25%", "30%", "33%"], correctAnswer: "25%", hint: "3 ÷ 12 = 0,25 → 25%", difficulty: 2 },
  { id: "m9", subject: "math", type: "multiple_choice", question: "Wie viel ist 15% von 200?", options: ["15", "20", "25", "30"], correctAnswer: "30", hint: "200 × 15 ÷ 100 = 30", difficulty: 2 },

  // --- Geometrie ---
  { id: "m5", subject: "math", type: "multiple_choice", question: "Ein Dreieck hat Winkel von 60° und 80°. Wie groß ist der dritte?", options: ["30°", "40°", "50°", "60°"], correctAnswer: "40°", hint: "Winkelsumme im Dreieck = 180°. Also 180 − 60 − 80 = 40°", difficulty: 2 },
  { id: "m10", subject: "math", type: "multiple_choice", question: "Was ist der Umfang eines Quadrats mit Seite 7 cm?", options: ["14 cm", "21 cm", "28 cm", "49 cm"], correctAnswer: "28 cm", hint: "Umfang = 4 × Seite = 4 × 7 = 28", difficulty: 1 },
  { id: "m13", subject: "math", type: "multiple_choice", question: "Wie groß ist die Fläche eines Rechtecks mit 8 cm × 5 cm?", options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"], correctAnswer: "40 cm²", hint: "Fläche = Länge × Breite = 8 × 5 = 40", difficulty: 1 },
  { id: "m17", subject: "math", type: "multiple_choice", question: "Wie viel Grad hat ein rechter Winkel?", options: ["45°", "60°", "90°", "180°"], correctAnswer: "90°", hint: "Denke an die Ecke eines Blattes Papier 📐", difficulty: 1 },
  { id: "m20", subject: "math", type: "multiple_choice", question: "Ein Kreis hat Radius 5 cm. Wie lang ist der Durchmesser?", options: ["5 cm", "10 cm", "15 cm", "25 cm"], correctAnswer: "10 cm", hint: "Durchmesser = 2 × Radius = 2 × 5 = 10", difficulty: 1 },

  // --- Negative Zahlen ---
  { id: "m7", subject: "math", type: "multiple_choice", question: "Berechne: (−3) + 7", options: ["10", "−10", "4", "−4"], correctAnswer: "4", hint: "Von −3 aus 7 Schritte nach rechts = 4", difficulty: 1 },
  { id: "m14", subject: "math", type: "multiple_choice", question: "Berechne: (−4) × (−3)", options: ["−12", "12", "−7", "7"], correctAnswer: "12", hint: "Minus × Minus = Plus! 4 × 3 = 12", difficulty: 2 },

  // --- Potenzen & Wurzeln ---
  { id: "m8", subject: "math", type: "multiple_choice", question: "Was ist 5²?", options: ["10", "20", "25", "50"], correctAnswer: "25", hint: "5² = 5 × 5 = 25", difficulty: 1 },
  { id: "m18", subject: "math", type: "multiple_choice", question: "Was ist √49?", options: ["6", "7", "8", "9"], correctAnswer: "7", hint: "7 × 7 = 49", difficulty: 1 },
  { id: "m21", subject: "math", type: "multiple_choice", question: "Was ist 2³?", options: ["5", "6", "8", "9"], correctAnswer: "8", hint: "2 × 2 × 2 = 8", difficulty: 1 },
  { id: "m23", subject: "math", type: "multiple_choice", question: "Was ist √144?", options: ["11", "12", "13", "14"], correctAnswer: "12", hint: "12 × 12 = 144", difficulty: 2 },
  { id: "m24", subject: "math", type: "multiple_choice", question: "Was ist 10³?", options: ["30", "100", "1000", "10000"], correctAnswer: "1000", hint: "10 × 10 × 10 = 1000", difficulty: 1 },
];

export function getRandomQuestions(subject: "latin" | "math", count: number, completedIds: string[]): Question[] {
  const pool = subject === "latin" ? LATIN_QUESTIONS : MATH_QUESTIONS;

  // Filter out completed questions; if not enough remain, reset
  let available = pool.filter(q => !completedIds.includes(q.id));
  if (available.length < count) {
    available = [...pool];
  }

  const shuffled = available.sort(() => Math.random() - 0.5);
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
