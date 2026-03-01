import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, Lightbulb } from "lucide-react";
import type { Question } from "@/lib/gameData";

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
}

export function QuestionCard({ question, index, total, onAnswer }: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [answered, setAnswered] = useState(false);

  const isCorrect = selected === question.correctAnswer;
  const SubjectIcon = question.subject === "latin" ? BookOpen : Calculator;

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);

    setTimeout(() => {
      onAnswer(option === question.correctAnswer);
    }, 1200);
  };

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SubjectIcon className={`w-5 h-5 ${question.subject === "latin" ? "text-primary" : "text-secondary"}`} />
          <span className="text-sm font-semibold text-muted-foreground">
            {question.subject === "latin" ? "Latein" : "Mathe"}
          </span>
        </div>
        <span className="text-sm font-body text-muted-foreground">
          {index + 1} / {total}
        </span>
      </div>

      {/* Question */}
      <div className="glass-card p-6 mb-6">
        <h2 className="font-display text-xl font-bold text-foreground leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options?.map((option, i) => {
          let optionStyle = "glass-card";
          if (answered) {
            if (option === question.correctAnswer) {
              optionStyle = "bg-success/15 border border-success/30 rounded-2xl";
            } else if (option === selected && !isCorrect) {
              optionStyle = "bg-destructive/10 border border-destructive/30 rounded-2xl";
            }
          }

          return (
            <motion.button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full p-4 text-left font-body transition-all ${optionStyle} ${!answered ? "hover:scale-[1.01] cursor-pointer" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileTap={!answered ? { scale: 0.98 } : undefined}
            >
              <span className="text-foreground">{option}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {answered && (
          <motion.div
            className={`mt-4 p-4 rounded-2xl text-sm font-body ${isCorrect ? "bg-success/10 text-success" : "bg-warning/10 text-warning-foreground"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {isCorrect
              ? "Perfekt! Weiter so! ⭐"
              : `Nicht ganz – ${question.hint}`}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint button */}
      {!answered && !showHint && (
        <button
          onClick={() => setShowHint(true)}
          className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mx-auto"
        >
          <Lightbulb className="w-4 h-4" />
          Tipp anzeigen
        </button>
      )}
      {!answered && showHint && (
        <motion.p
          className="mt-4 text-sm text-muted-foreground text-center italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          💡 {question.hint}
        </motion.p>
      )}
    </motion.div>
  );
}
