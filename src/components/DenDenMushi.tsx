import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DenDenMushi() {
  const [isRinging, setIsRinging] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleAnswer = () => {
    if (!isRinging) return;
    setIsRinging(false);
    setIsOpen(true);
  };

  return (
    <section className="relative min-h-[60vh] py-24 px-4 md:px-12 z-10 flex flex-col items-center justify-center">
      <motion.h2 
        className="font-bebas text-5xl md:text-7xl text-center mb-12 text-parchment drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Incoming Call...
      </motion.h2>

      <div className="relative flex flex-col items-center">
        {/* Speech Bubble */}
        <AnimatePresence>
          {isRinging && (
            <motion.div 
              className="absolute -top-20 bg-white text-black font-marker px-6 py-3 rounded-2xl border-4 border-black z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
            >
              <p className="animate-pulse">Pururururu... Pururururu...</p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-[16px] border-l-transparent border-r-transparent border-t-black"></div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[12px] border-l-transparent border-r-transparent border-t-white"></div>
            </motion.div>
          )}

          {isOpen && (
            <motion.div 
              className="absolute -top-40 md:-top-32 bg-white text-black font-marker px-6 py-4 rounded-2xl border-4 border-black z-20 max-w-xs md:max-w-md text-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <p className="text-xl md:text-2xl text-[#c1121f]">
                "WHAT DO YOU MEAN YOU LOST THE SHIP?! IT HAS A GIANT SUNFLOWER LION HEAD! HOW DO YOU LOSE THAT?!"
              </p>
              <p className="text-sm text-gray-500 mt-2">- Nami (Probably)</p>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-[16px] border-l-transparent border-r-transparent border-t-black"></div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[12px] border-l-transparent border-r-transparent border-t-white"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Den Den Mushi SVG */}
        <motion.div 
          className="relative w-48 h-48 cursor-pointer mt-8"
          onClick={handleAnswer}
          animate={isRinging ? {
            rotate: [-2, 2, -2, 2, 0],
            y: [-2, 2, -2, 2, 0]
          } : {}}
          transition={isRinging ? { repeat: Infinity, duration: 0.5 } : {}}
          whileHover={isRinging ? { scale: 1.05 } : {}}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            {/* Shell */}
            <path d="M 20 80 Q 20 30 50 30 Q 80 30 80 80 Z" fill="#4a90e2" stroke="#2c1b0d" strokeWidth="3" />
            <path d="M 30 80 Q 30 45 50 45 Q 70 45 70 80" fill="none" stroke="#2c1b0d" strokeWidth="3" />
            <path d="M 40 80 Q 40 60 50 60 Q 60 60 60 80" fill="none" stroke="#2c1b0d" strokeWidth="3" />
            
            {/* Body */}
            <path d="M 10 80 L 90 80 Q 95 80 95 85 Q 95 90 90 90 L 10 90 Q 5 90 5 85 Q 5 80 10 80 Z" fill="#f5cb5c" stroke="#2c1b0d" strokeWidth="3" />
            
            {/* Head */}
            <circle cx="85" cy="65" r="12" fill="#f5cb5c" stroke="#2c1b0d" strokeWidth="3" />
            
            {/* Eyes */}
            <g transform={isOpen ? "translate(0, -5)" : ""}>
              <line x1="80" y1="55" x2="75" y2="40" stroke="#2c1b0d" strokeWidth="3" strokeLinecap="round" />
              <line x1="90" y1="55" x2="95" y2="40" stroke="#2c1b0d" strokeWidth="3" strokeLinecap="round" />
              <circle cx="75" cy="40" r="4" fill="white" stroke="#2c1b0d" strokeWidth="2" />
              <circle cx="95" cy="40" r="4" fill="white" stroke="#2c1b0d" strokeWidth="2" />
              {/* Pupils */}
              <circle cx={isOpen ? "75" : "76"} cy={isOpen ? "40" : "41"} r="1.5" fill="#2c1b0d" />
              <circle cx={isOpen ? "95" : "94"} cy={isOpen ? "40" : "41"} r="1.5" fill="#2c1b0d" />
            </g>

            {/* Mouth */}
            {isOpen ? (
              <path d="M 78 68 Q 85 78 92 68 Z" fill="#c1121f" stroke="#2c1b0d" strokeWidth="2" />
            ) : (
              <path d="M 80 70 Q 85 70 90 70" fill="none" stroke="#2c1b0d" strokeWidth="2" />
            )}

            {/* Receiver (Phone part) */}
            <g transform={isOpen ? "translate(-30, -10) rotate(-45 50 20)" : "translate(0, 0)"} className="transition-transform duration-300">
              <path d="M 35 30 L 65 30 Q 70 30 70 25 L 70 20 Q 70 15 65 15 L 35 15 Q 30 15 30 20 L 30 25 Q 30 30 35 30 Z" fill="#e07a5f" stroke="#2c1b0d" strokeWidth="2" />
              <circle cx="30" cy="22.5" r="8" fill="#3d405b" stroke="#2c1b0d" strokeWidth="2" />
              <circle cx="70" cy="22.5" r="8" fill="#3d405b" stroke="#2c1b0d" strokeWidth="2" />
            </g>
          </svg>
        </motion.div>

        {isRinging && (
          <p className="mt-4 font-bebas text-xl text-parchment tracking-widest animate-pulse">
            CLICK TO ANSWER
          </p>
        )}
      </div>
    </section>
  );
}
