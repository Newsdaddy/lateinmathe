import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRandomQuestions, getCharacterStage, type Question, XP_DAILY_BONUS } from "@/lib/gameData";
import { useGameState } from "@/lib/useGameState";
import { QuestionCard } from "@/components/QuestionCard";
import { LevelUpOverlay } from "@/components/LevelUpOverlay";
import { ArrowLeft, Trophy, BookOpen, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LearningSession() {
  const navigate = useNavigate();
  const { addXP, completeDailyMission, currentStage, xp, completedQuestionIds } = useGameState();

  // Build questions: Latin block first, then Math block (never mixed)
  const [latinQuestions] = useState<Question[]>(() =>
    getRandomQuestions("latin", 5, completedQuestionIds)
  );
  const [mathQuestions] = useState<Question[]>(() =>
    getRandomQuestions("math", 5, completedQuestionIds)
  );
  const questions = [...latinQuestions, ...mathQuestions];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showSubjectTransition, setShowSubjectTransition] = useState(false);
  const [prevLevel] = useState(currentStage.level);

  const latinCount = latinQuestions.length;
  const currentSubject = currentIndex < latinCount ? "latin" : "math";
  const subjectIndex = currentSubject === "latin" ? currentIndex : currentIndex - latinCount;
  const subjectTotal = currentSubject === "latin" ? latinCount : mathQuestions.length;

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) setCorrect(c => c + 1);
    addXP(isCorrect, questions[currentIndex].id);

    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        completeDailyMission();
        const stored = JSON.parse(localStorage.getItem("rpg-learn-state") || "{}");
        const newStage = getCharacterStage(stored.xp || 0);
        if (newStage.level > prevLevel) {
          setShowLevelUp(true);
        } else {
          setFinished(true);
        }
      } else if (currentIndex + 1 === latinCount) {
        // Transition from Latin to Math
        setShowSubjectTransition(true);
      } else {
        setCurrentIndex(i => i + 1);
      }
    }, 1500);
  }, [currentIndex, questions, addXP, completeDailyMission, prevLevel, latinCount]);

  const handleTransitionContinue = () => {
    setShowSubjectTransition(false);
    setCurrentIndex(i => i + 1);
  };

  // Subject transition screen
  if (showSubjectTransition) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          className="glass-card p-10 text-center max-w-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Calculator className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Latein geschafft! 🎉
          </h1>
          <p className="text-muted-foreground font-body mb-6">
            Jetzt geht's weiter mit Mathe!
          </p>
          <button
            onClick={handleTransitionContinue}
            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-display font-bold hover:opacity-90 transition-opacity"
          >
            Mathe starten
          </button>
        </motion.div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          className="glass-card p-10 text-center max-w-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Trophy className="w-16 h-16 text-warning mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Mission erledigt! 🎉
          </h1>
          <p className="text-muted-foreground font-body mb-2">
            {correct}/{questions.length} richtig
          </p>
          <p className="text-sm text-primary font-semibold mb-6">
            +{correct * 10 + XP_DAILY_BONUS} XP verdient!
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity"
          >
            Zurück zur Übersicht
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            animate={{ width: `${((currentIndex) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-sm text-muted-foreground font-body">
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Subject indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${
          currentSubject === "latin"
            ? "bg-primary/15 text-primary"
            : "bg-secondary/15 text-secondary"
        }`}>
          {currentSubject === "latin" ? (
            <><BookOpen className="w-4 h-4" /> Latein — {subjectIndex + 1}/{subjectTotal}</>
          ) : (
            <><Calculator className="w-4 h-4" /> Mathe — {subjectIndex + 1}/{subjectTotal}</>
          )}
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={questions[currentIndex].id}
            question={questions[currentIndex]}
            index={subjectIndex}
            total={subjectTotal}
            onAnswer={handleAnswer}
          />
        </AnimatePresence>
      </div>

      {/* Level Up Overlay */}
      <AnimatePresence>
        {showLevelUp && (
          <LevelUpOverlay
            stage={currentStage}
            onContinue={() => {
              setShowLevelUp(false);
              setFinished(true);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
