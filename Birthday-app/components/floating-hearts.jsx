import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          animationDuration: Math.random() * 5 + 5,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cleanup old hearts
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => prev.filter((heart) => Date.now() - heart.id < 10000));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-100px", opacity: 1 }}
          transition={{ duration: heart.animationDuration, ease: "linear" }}
          style={{ left: `${heart.left}%` }}
          className="absolute text-2xl text-pink-300 opacity-50"
        >
          {Math.random() > 0.5 ? "❤️" : "💖"}
        </motion.div>
      ))}
    </div>
  );
}
