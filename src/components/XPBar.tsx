import { motion } from "framer-motion";

interface XPBarProps {
  currentXP: number;
  progress: number;
  nextLevelXP?: number;
}

export function XPBar({ currentXP, progress, nextLevelXP }: XPBarProps) {
  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-sm font-body">
        <span className="font-semibold text-primary">{currentXP} XP</span>
        {nextLevelXP && (
          <span className="text-muted-foreground">Nächste Stufe: {nextLevelXP} XP</span>
        )}
      </div>
      <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
