import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If date passed, show 0s
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {Object.keys(timeLeft).map((interval) => (
        <motion.div
          key={interval}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg border-2 border-pink-100 min-w-[80px]"
        >
          <span className="text-3xl md:text-4xl font-bold text-purple-600">
            {timeLeft[interval] || "0"}
          </span>
          <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold mt-1">
            {interval}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
