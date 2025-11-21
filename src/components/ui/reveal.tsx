import { motion } from "motion/react"


export default function Reveal({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
