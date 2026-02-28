import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const fruits = [
  { 
    name: "Nemu Nemu no Mi", 
    type: "Paramecia",
    desc: "Allows the user to fall asleep during any important conversation. Awakening: Can make others yawn uncontrollably.", 
    color: "#8b5cf6",
    icon: "💤"
  },
  { 
    name: "Michi Michi no Mi", 
    type: "Logia",
    desc: "Automatically guides the user in the exact opposite direction of their destination. Warning: Side effects include ending up in different anime universes.", 
    color: "#10b981",
    icon: "🧭"
  },
  { 
    name: "Baka Baka no Mi", 
    type: "Zoan",
    desc: "Grants the user the ability to make the worst possible decisions with absolute confidence.", 
    color: "#ef4444",
    icon: "🤪"
  }
];

export default function DevilFruit() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(fruits[0]);

  const handleOpen = () => {
    if (isOpen) return;
    setIsShaking(true);
    
    // Pick a random fruit
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    setSelectedFruit(randomFruit);

    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen py-24 px-4 md:px-12 z-10 flex flex-col items-center justify-center">
      <motion.h2 
        className="font-bebas text-5xl md:text-7xl text-center mb-8 text-parchment drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Devil Fruit Roulette
      </motion.h2>
      <p className="font-marker text-xl text-parchment/90 mb-16 text-center max-w-2xl drop-shadow-md">
        If we found a mysterious chest at sea, this is 100% the useless power you would end up eating.
      </p>

      <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="chest"
              className="cursor-pointer relative"
              onClick={handleOpen}
              animate={isShaking ? {
                x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
                rotate: [-5, 5, -5, 5, -2, 2, 0],
                scale: [1, 1.1, 1.1, 1.1, 1]
              } : {
                y: [0, -10, 0]
              }}
              transition={isShaking ? { duration: 1.5 } : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={!isShaking ? { scale: 1.05 } : {}}
            >
              {/* Treasure Chest SVG */}
              <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <path d="M20 60 L180 60 L190 140 C190 150 180 155 170 155 L30 155 C20 155 10 150 10 140 L20 60 Z" fill="#8B4513" stroke="#2c1b0d" strokeWidth="6"/>
                <path d="M20 60 C20 20 180 20 180 60" fill="#A0522D" stroke="#2c1b0d" strokeWidth="6"/>
                <rect x="85" y="50" width="30" height="40" rx="5" fill="#FFD700" stroke="#2c1b0d" strokeWidth="4"/>
                <circle cx="100" cy="75" r="5" fill="#2c1b0d"/>
                {/* Gold bands */}
                <path d="M50 60 L45 155 M150 60 L155 155" stroke="#FFD700" strokeWidth="8"/>
                <path d="M50 60 C50 30 60 25 60 25 M150 60 C150 30 140 25 140 25" stroke="#FFD700" strokeWidth="8" fill="none"/>
              </svg>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-bebas text-2xl text-parchment tracking-widest bg-[#2c1b0d] px-4 py-1 rounded-full border-2 border-[#f4e4bc]">
                {isShaking ? "OPENING..." : "CLICK TO OPEN"}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="fruit"
              initial={{ scale: 0, y: 50, rotate: -180 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className="flex flex-col items-center w-full"
            >
              {/* The Fruit */}
              <div className="relative w-48 h-48 mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  <path d="M50 90 C20 90 10 60 10 40 C10 20 30 15 50 25 C70 15 90 20 90 40 C90 60 80 90 50 90 Z" fill={selectedFruit.color} stroke="#2c1b0d" strokeWidth="3"/>
                  <path d="M50 25 C45 10 55 5 60 10" fill="none" stroke="#2c1b0d" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M60 10 C65 15 70 5 75 10" fill="none" stroke="#2c1b0d" strokeWidth="4" strokeLinecap="round"/>
                  {/* Swirls */}
                  <path d="M30 40 Q40 30 50 40 T70 40" fill="none" stroke="#2c1b0d" strokeWidth="2" opacity="0.5"/>
                  <path d="M25 60 Q35 50 45 60 T65 60" fill="none" stroke="#2c1b0d" strokeWidth="2" opacity="0.5"/>
                  <path d="M40 75 Q50 65 60 75 T80 75" fill="none" stroke="#2c1b0d" strokeWidth="2" opacity="0.5"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-5xl pb-4">
                  {selectedFruit.icon}
                </div>
              </div>

              {/* Fruit Info Card */}
              <motion.div 
                className="glass-panel w-full p-8 rounded-2xl text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: selectedFruit.color }}></div>
                <h3 className="font-bebas text-4xl mb-2" style={{ color: selectedFruit.color }}>
                  {selectedFruit.name}
                </h3>
                <div className="inline-block bg-[#2c1b0d] text-[#f4e4bc] font-bebas px-3 py-1 rounded-full text-sm mb-4 tracking-widest">
                  {selectedFruit.type} TYPE
                </div>
                <p className="font-marker text-xl text-parchment/90 leading-relaxed">
                  {selectedFruit.desc}
                </p>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="mt-8 font-bebas text-xl bg-[#2c1b0d] text-[#f4e4bc] px-6 py-2 rounded-lg border-2 border-[#f4e4bc] hover:bg-[#f4e4bc] hover:text-[#2c1b0d] transition-colors"
                >
                  Put it back (Too Dangerous)
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
