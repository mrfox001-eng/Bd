import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full z-20 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-4 border-pink-100"
    >
      <div className="flex gap-4 mb-6">
        {["💖", "💜", "💙"].map((emoji, i) => (
          <motion.div
            key={i}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="text-4xl"
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-purple-600 mb-2">Loading something special...</h2>
      <div className="flex gap-2 mt-4 text-2xl">
        <span>🎂</span><span>✨</span><span>🎁</span><span>🎈</span>
      </div>
    </motion.div>
  );
}
