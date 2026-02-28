import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function HakiClash() {
  const [hakiLevel, setHakiLevel] = useState(0);
  const [isClashing, setIsClashing] = useState(false);
  const [isMaxed, setIsMaxed] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startClash = () => {
    if (isMaxed) return;
    setIsClashing(true);
    
    intervalRef.current = setInterval(() => {
      setHakiLevel((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsMaxed(true);
          setIsClashing(false);
          return 100;
        }
        return prev + 2; // Increase speed
      });
    }, 50);
  };

  const stopClash = () => {
    if (isMaxed) return;
    setIsClashing(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Drop back down if not maxed
    const dropInterval = setInterval(() => {
      setHakiLevel((prev) => {
        if (prev <= 0) {
          clearInterval(dropInterval);
          return 0;
        }
        return prev - 5;
      });
    }, 30);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className={`relative min-h-screen py-24 px-4 md:px-12 z-10 flex flex-col items-center justify-center transition-colors duration-500 ${isMaxed ? 'bg-black' : 'bg-transparent'}`}>
      
      {/* Background Lightning Effect when maxed */}
      <AnimatePresence>
        {isMaxed && (
          <motion.div 
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Red/Black Lightning Flashes */}
            <motion.div 
              className="absolute inset-0 bg-[#c1121f] mix-blend-overlay"
              animate={{ opacity: [0, 0.8, 0, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            />
            <div className="absolute top-1/4 left-1/4 w-1 h-64 bg-white rotate-45 shadow-[0_0_20px_#c1121f] blur-[1px]"></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-96 bg-white -rotate-12 shadow-[0_0_30px_#c1121f] blur-[2px]"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1 h-48 bg-white rotate-90 shadow-[0_0_15px_#c1121f] blur-[1px]"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        <motion.h2 
          className={`font-bebas text-5xl md:text-7xl text-center mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transition-colors duration-300 ${isMaxed ? 'text-[#c1121f]' : 'text-parchment'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {isMaxed ? "CONQUEROR'S HAKI UNLEASHED" : "Test Your Willpower"}
        </motion.h2>

        {!isMaxed ? (
          <p className="font-marker text-xl text-parchment/90 mb-12 text-center drop-shadow-md">
            Hold the button to charge your Haki. Let's see if you have the disposition of a King (or if you're just a scrub).
          </p>
        ) : (
          <motion.div 
            className="glass-panel p-8 rounded-2xl border-4 border-[#c1121f] mb-12 text-center bg-black/80 shadow-[0_0_50px_rgba(193,18,31,0.5)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <p className="font-marker text-2xl md:text-3xl text-white leading-relaxed">
              "Okay, fine. Maybe you aren't completely useless after all. But I'm still the Captain."
            </p>
          </motion.div>
        )}

        {/* Progress Bar Container */}
        <div className="w-full h-12 bg-[#2c1b0d] rounded-full border-4 border-[#f4e4bc] overflow-hidden mb-12 relative shadow-2xl">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#c1121f] to-[#ff0000]"
            style={{ width: `${hakiLevel}%` }}
            animate={isClashing ? {
              boxShadow: ["0 0 10px #c1121f", "0 0 30px #ff0000", "0 0 10px #c1121f"]
            } : {}}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center font-bebas text-2xl text-white mix-blend-difference">
            {Math.floor(hakiLevel)}%
          </div>
        </div>

        {/* Interaction Button */}
        {!isMaxed && (
          <motion.button
            onMouseDown={startClash}
            onMouseUp={stopClash}
            onMouseLeave={stopClash}
            onTouchStart={startClash}
            onTouchEnd={stopClash}
            className="relative overflow-hidden bg-[#2c1b0d] text-[#f4e4bc] font-bebas text-4xl px-16 py-8 rounded-full border-4 border-[#f4e4bc] shadow-[0_0_20px_rgba(0,0,0,0.5)] select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isClashing ? {
              x: [-2, 2, -2, 2, 0],
              y: [-1, 1, -1, 1, 0]
            } : {}}
            transition={isClashing ? { repeat: Infinity, duration: 0.1 } : {}}
          >
            <span className="relative z-10 pointer-events-none">
              {isClashing ? "HOLDING..." : "HOLD TO CLASH"}
            </span>
            {/* Inner glow when clashing */}
            {isClashing && (
              <div className="absolute inset-0 bg-[#c1121f]/30 blur-md pointer-events-none"></div>
            )}
          </motion.button>
        )}
      </div>
    </section>
  );
}
