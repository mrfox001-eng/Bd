"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "../components/countdown";
import BirthdayCelebration from "../components/birthday-celebration";
import Confetti from "../components/confetti";
import FloatingHearts from "../components/floating-hearts";
import Loader from "../components/loader";
import { MoveRight, PartyPopper } from "lucide-react";

export default function Home() {
  const [isBirthday, setIsBirthday] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showForYouBtn, setShowForYouBtn] = useState(false);

  // You can set this to a future date to test the countdown logic
  // For the demo, we assume the date has passed or is today
  const targetDate = new Date("2025-04-25T00:00:00"); 

  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowForYouBtn(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const startCelebration = () => {
    setIsBirthday(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.play().catch((e) => console.log("Audio play failed", e));
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 overflow-hidden flex flex-col items-center justify-center relative">
      {/* Background Audio */}
      <audio ref={audioRef} src="/birthday-song.mp3" loop />

      <FloatingHearts />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : !isBirthday ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center z-10 w-full max-w-md px-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 font-serif">
              Your Special Day is Almost Here 💖
            </h1>
            
            <Countdown targetDate={targetDate} />

            <div className="mt-12 space-y-6">
              <p className="text-lg text-purple-600 font-medium bg-white/50 py-3 px-6 rounded-full shadow-sm backdrop-blur-sm">
                Just a little more... A small gift for my favorite person
              </p>
              
              {showForYouBtn && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startCelebration}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-gentle"
                >
                  <PartyPopper className="w-6 h-6" />
                  For you
                  <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          <BirthdayCelebration key="celebration" />
        )}
      </AnimatePresence>

      {isBirthday && <Confetti />}
    </div>
  );
}
