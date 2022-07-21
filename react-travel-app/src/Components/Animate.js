import { motion, AnimatePresence } from "framer-motion"

const Animate = ({isVisible}) => {
    return (
        <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
    )
};

export default Animate;