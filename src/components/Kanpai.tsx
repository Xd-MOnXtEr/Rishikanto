import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export default function Kanpai() {
  const [isClinked, setIsClinked] = useState(false);

  const handleClink = () => {
    setIsClinked(true);
    
    // Confetti effect
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f4e4bc', '#c1121f', '#d4b886']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f4e4bc', '#c1121f', '#d4b886']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => setIsClinked(false), 1000);
  };

  return (
    <section className="relative min-h-screen py-24 px-4 md:px-12 z-10 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#3e2723] border-t-8 border-[#2c1b0d] z-0">
        {/* Table texture */}
        <div className="w-full h-full opacity-50 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_20px,rgba(0,0,0,0.2)_20px,rgba(0,0,0,0.2)_22px)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
        <motion.h2 
          className="font-bebas text-6xl md:text-8xl text-center mb-16 text-parchment drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          KANPAI!
        </motion.h2>

        <div className="flex justify-center items-end gap-4 md:gap-12 mb-16 h-64">
          {/* Mug 1 */}
          <motion.div 
            className="w-32 h-40 md:w-48 md:h-56 bg-[#8b5a2b] rounded-b-2xl border-4 border-[#2c1b0d] relative flex flex-col justify-end overflow-hidden"
            animate={isClinked ? { rotate: 15, x: 20, y: -20 } : { rotate: -5, x: -20, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {/* Handle */}
            <div className="absolute top-8 -left-8 w-12 h-24 border-4 border-[#2c1b0d] rounded-l-full bg-transparent z-[-1]"></div>
            {/* Beer */}
            <div className="w-full h-3/4 bg-[#f4a261] border-t-8 border-white/80 relative">
              {/* Foam overflow */}
              <div className="absolute -top-6 left-0 w-full h-8 bg-white/90 rounded-t-full blur-[2px]"></div>
            </div>
            {/* Wood lines */}
            <div className="absolute inset-0 flex justify-evenly pointer-events-none">
              <div className="w-1 h-full bg-[#2c1b0d]/30"></div>
              <div className="w-1 h-full bg-[#2c1b0d]/30"></div>
              <div className="w-1 h-full bg-[#2c1b0d]/30"></div>
            </div>
          </motion.div>

          {/* Mug 2 */}
          <motion.div 
            className="w-32 h-40 md:w-48 md:h-56 bg-[#8b5a2b] rounded-b-2xl border-4 border-[#2c1b0d] relative flex flex-col justify-end overflow-hidden"
            animate={isClinked ? { rotate: -15, x: -20, y: -20 } : { rotate: 5, x: 20, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {/* Handle */}
            <div className="absolute top-8 -right-8 w-12 h-24 border-4 border-[#2c1b0d] rounded-r-full bg-transparent z-[-1]"></div>
            {/* Beer */}
            <div className="w-full h-3/4 bg-[#f4a261] border-t-8 border-white/80 relative">
              {/* Foam overflow */}
              <div className="absolute -top-6 left-0 w-full h-8 bg-white/90 rounded-t-full blur-[2px]"></div>
            </div>
            {/* Wood lines */}
            <div className="absolute inset-0 flex justify-evenly pointer-events-none">
              <div className="w-1 h-full bg-[#2c1b0d]/30"></div>
              <div className="w-1 h-full bg-[#2c1b0d]/30"></div>
              <div className="w-1 h-full bg-[#2c1b0d]/30"></div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={handleClink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#f4e4bc] text-[#2c1b0d] font-bebas text-3xl px-12 py-6 rounded-xl border-4 border-[#2c1b0d] shadow-[6px_6px_0px_#c1121f] hover:shadow-[2px_2px_0px_#c1121f] hover:translate-x-[4px] hover:translate-y-[4px] transition-all mb-16"
        >
          Clink Mugs (Don't Spill It)
        </motion.button>

        <motion.div 
          className="glass-panel p-8 rounded-xl max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-marker text-xl md:text-2xl text-parchment/90 leading-relaxed">
            "I would honestly trade you for a lifetime supply of meat... but until then, get on the ship, loser."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
