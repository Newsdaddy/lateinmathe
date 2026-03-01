import { Flame } from "lucide-react";
import { motion } from "framer-motion";

interface StreakBadgeProps {
  streak: number;
}

export function StreakBadge({ streak }: StreakBadgeProps) {
  if (streak === 0) return null;

  return (
    <motion.div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warning/15 text-warning-foreground font-display font-bold text-sm glow-streak"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Flame className="w-4 h-4 text-warning" />
      {streak} Tage Streak
    </motion.div>
  );
}
