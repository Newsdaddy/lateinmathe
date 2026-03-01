import { motion } from "framer-motion";
import { BookOpen, Calculator, ChevronRight, CheckCircle2 } from "lucide-react";

interface MissionCardProps {
  completed: boolean;
  correctToday: number;
  totalToday: number;
  onStart: () => void;
}

export function MissionCard({ completed, correctToday, totalToday, onStart }: MissionCardProps) {
  return (
    <motion.button
      onClick={completed ? undefined : onStart}
      className={`glass-card w-full p-6 text-left transition-all ${completed ? "opacity-80" : "cursor-pointer hover:scale-[1.02]"}`}
      whileTap={completed ? undefined : { scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {completed ? (
              <CheckCircle2 className="w-5 h-5 text-success" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-primary" />
            )}
            <h3 className="font-display text-lg font-bold text-foreground">
              {completed ? "Mission abgeschlossen! 🎉" : "Heutige Mission"}
            </h3>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>5 Latein</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calculator className="w-4 h-4 text-secondary" />
              <span>5 Mathe</span>
            </div>
          </div>
          {completed && totalToday > 0 && (
            <p className="text-sm text-success mt-2 font-semibold">
              {correctToday}/{totalToday} richtig – Super gemacht!
            </p>
          )}
        </div>
        {!completed && (
          <ChevronRight className="w-6 h-6 text-primary" />
        )}
      </div>
    </motion.button>
  );
}
