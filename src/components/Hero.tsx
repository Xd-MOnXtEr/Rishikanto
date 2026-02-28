import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel p-8 md:p-12 rounded-2xl max-w-4xl w-full"
      >
        <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl mb-6 tracking-wider text-parchment hover-vein-pop cursor-default transition-all duration-300">
          You're the <span className="text-[#3a5a40]">Zoro</span> to my <span className="text-[#c1121f]">Luffy</span>.
        </h1>
        
        <motion.p 
          className="font-marker text-xl md:text-2xl lg:text-3xl text-parchment/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          (Mostly because you have absolutely zero sense of direction and I eat all your food).
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          whileHover={{ scale: 1.05, rotate: [-2, 2, -2, 0], width: '120%' }}
          whileTap={{ scale: 0.95 }}
          className="relative group overflow-hidden bg-[#c1121f] text-parchment font-bebas text-3xl px-10 py-5 rounded-xl border-4 border-[#2c1b0d] shadow-[4px_4px_0px_#2c1b0d] transition-all duration-300 mx-auto"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 group-hover:hidden">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Expose Our Bounties
          </span>
          <span className="relative z-10 hidden items-center justify-center gap-3 group-hover:flex whitespace-nowrap">
            GOMU GOMU NO... CLICK!
          </span>
          {/* Meat barrel texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjYzExMjFmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjYTAwZjFhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-30 mix-blend-multiply"></div>
        </motion.button>
      </motion.div>
    </section>
  );
}
