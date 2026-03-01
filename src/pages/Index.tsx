import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CharacterDisplay } from "@/components/CharacterDisplay";
import { XPBar } from "@/components/XPBar";
import { StreakBadge } from "@/components/StreakBadge";
import { MissionCard } from "@/components/MissionCard";
import { useGameState } from "@/lib/useGameState";
import { Sparkles, User } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const {
    xp, streak, todayCompleted, correctToday, totalToday,
    currentStage, nextStage, xpProgress,
  } = useGameState();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Lernquest
            </h1>
            <p className="text-sm text-muted-foreground font-body mt-0.5">
              Dein tägliches Abenteuer
            </p>
          </div>
          <StreakBadge streak={streak} />
        </motion.div>

        {/* Character */}
        <motion.button
          onClick={() => navigate("/character")}
          className="glass-card w-full p-6 flex items-center gap-5 hover:scale-[1.01] transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileTap={{ scale: 0.98 }}
        >
          <CharacterDisplay stage={currentStage} size="sm" showInfo={false} />
          <div className="flex-1 text-left">
            <p className="font-display font-bold text-foreground">{currentStage.name}</p>
            <p className="text-xs text-muted-foreground mb-2">Stufe {currentStage.level}</p>
            <XPBar currentXP={xp} progress={xpProgress} nextLevelXP={nextStage?.requiredXP} />
          </div>
        </motion.button>

        {/* Daily Mission */}
        <div>
          <h2 className="font-display text-lg font-bold text-foreground mb-3">Mission</h2>
          <MissionCard
            completed={todayCompleted}
            correctToday={correctToday}
            totalToday={totalToday}
            onStart={() => navigate("/learn")}
          />
        </div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card p-4 text-center">
            <p className="text-2xl font-display font-bold text-primary">{xp}</p>
            <p className="text-xs text-muted-foreground">XP Gesamt</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-2xl font-display font-bold text-secondary">{currentStage.level}</p>
            <p className="text-xs text-muted-foreground">Stufe</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-2xl font-display font-bold text-accent-foreground">{streak}</p>
            <p className="text-xs text-muted-foreground">Streak</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
