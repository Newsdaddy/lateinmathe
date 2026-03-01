import { motion } from "framer-motion";
import { CharacterDisplay } from "./CharacterDisplay";
import type { CharacterStage } from "@/lib/gameData";

interface LevelUpOverlayProps {
  stage: CharacterStage;
  onContinue: () => void;
}

export function LevelUpOverlay({ stage, onContinue }: LevelUpOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="glass-card p-10 text-center max-w-sm mx-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <motion.p
          className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ✨ Evolution! ✨
        </motion.p>

        <CharacterDisplay stage={stage} size="lg" />

        <motion.p
          className="mt-4 text-muted-foreground text-sm font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {stage.description}
        </motion.p>

        <motion.button
          className="mt-6 px-8 py-3 rounded-full bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity"
          onClick={onContinue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          Weiter!
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
