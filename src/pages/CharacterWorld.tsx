import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CharacterDisplay } from "@/components/CharacterDisplay";
import { XPBar } from "@/components/XPBar";
import { StreakBadge } from "@/components/StreakBadge";
import { CHARACTER_STAGES } from "@/lib/gameData";
import { useGameState } from "@/lib/useGameState";
import { ArrowLeft, Lock } from "lucide-react";

export default function CharacterWorld() {
  const navigate = useNavigate();
  const { currentStage, xp, xpProgress, nextStage } = useGameState();

  return (
    <div className="min-h-screen bg-background p-6 max-w-lg mx-auto">
      <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors mb-6 flex items-center gap-2">
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-body">Zurück</span>
      </button>

      <h1 className="font-display text-2xl font-bold text-foreground mb-6">Charakter-Welt</h1>

      <div className="glass-card p-8 mb-6">
        <CharacterDisplay stage={currentStage} size="lg" />
        <div className="mt-6">
          <XPBar currentXP={xp} progress={xpProgress} nextLevelXP={nextStage?.requiredXP} />
        </div>
      </div>

      <h2 className="font-display text-lg font-bold text-foreground mb-4">Evolutionsstufen</h2>
      <div className="space-y-3">
        {CHARACTER_STAGES.map((stage, i) => {
          const unlocked = xp >= stage.requiredXP;
          return (
            <motion.div
              key={stage.level}
              className={`glass-card p-4 flex items-center gap-4 ${!unlocked ? "opacity-50" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: unlocked ? 1 : 0.5, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                {unlocked ? stage.emoji : <Lock className="w-5 h-5 text-muted-foreground" />}
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-foreground text-sm">{stage.name}</p>
                <p className="text-xs text-muted-foreground">{stage.requiredXP} XP</p>
              </div>
              {currentStage.level === stage.level && (
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Aktuell
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
