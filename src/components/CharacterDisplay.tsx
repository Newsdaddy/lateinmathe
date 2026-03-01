import { motion } from "framer-motion";
import type { CharacterStage } from "@/lib/gameData";

interface CharacterDisplayProps {
  stage: CharacterStage;
  size?: "sm" | "md" | "lg";
  showInfo?: boolean;
  animate?: boolean;
}

const sizes = {
  sm: "text-4xl w-16 h-16",
  md: "text-6xl w-24 h-24",
  lg: "text-8xl w-36 h-36",
};

export function CharacterDisplay({ stage, size = "md", showInfo = true, animate = true }: CharacterDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className={`${sizes[size]} flex items-center justify-center rounded-full bg-primary/10 glow-primary`}
        animate={animate ? { y: [0, -8, 0] } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span role="img" aria-label={stage.name}>{stage.emoji}</span>
      </motion.div>
      {showInfo && (
        <div className="text-center">
          <p className="font-display font-bold text-foreground">{stage.name}</p>
          <p className="text-sm text-muted-foreground">Stufe {stage.level}</p>
        </div>
      )}
    </div>
  );
}
