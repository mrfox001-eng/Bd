import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function BirthdayCelebration() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCard = () => {
    setIsOpen(true);
    // Trigger confetti burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#9370DB', '#FFD700', '#87CEEB']
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center z-10 w-full max-w-lg px-4"
    >
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 font-serif">
        Happy Birthday!
      </h1>
      <div className="text-3xl mb-8 animate-bounce">🎂 🌟 💜</div>
      
      <h2 className="text-2xl font-bold text-pink-600 mb-8 font-handwriting">
        To My Cutiepie
      </h2>

      <div className="relative h-96 w-full perspective-1000">
        <motion.div
          className="w-full h-full relative preserve-3d transition-all duration-1000 cursor-pointer"
          animate={{ rotateY: isOpen ? 180 : 0 }}
          onClick={handleOpenCard}
        >
          {/* Front of Card */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-xl border-4 border-pink-200 flex flex-col items-center justify-center p-8">
            <Gift className="w-20 h-20 text-pink-500 mb-6 animate-pulse" />
            <p className="text-xl font-bold text-purple-600">Tap to open your card</p>
            <div className="mt-4 text-pink-400">🎁</div>
          </div>

          {/* Back of Card (Inside) */}
          <div 
            className="absolute w-full h-full backface-hidden bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl shadow-xl border-4 border-purple-200 p-8 flex flex-col items-center justify-center rotate-y-180 overflow-y-auto"
            style={{ transform: "rotateY(180deg)" }}
          >
             <Heart className="w-10 h-10 text-red-500 mb-4 animate-beat" fill="currentColor" />
            <p className="text-gray-700 leading-relaxed font-medium text-lg">
              "Just wanted to remind you—you're my favorite person. My days are better, smiles are wider, and life is sweeter because of you. I hope your birthday is full of love, magic, and everything that makes you smile."
            </p>
            <p className="mt-4 text-purple-600 font-bold font-handwriting text-xl">
              - Forever Yours 💖
            </p>
          </div>
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        delay={1}
        className="mt-8 text-purple-800 font-medium max-w-md mx-auto"
      >
        May every wish you make today come true. You deserve the world, and I'll always be here to remind you of that.
      </motion.p>
      
      <p className="mt-4 text-pink-600 font-bold text-sm">
        Let's always stay like this... together, forever 🫶
      </p>
    </motion.div>
  );
}
