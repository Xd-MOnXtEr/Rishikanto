import React from 'react';
import { motion } from 'motion/react';

export default function Dynamics() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-12 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-bebas text-5xl md:text-7xl text-center mb-20 text-parchment drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why We're a Menace
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-stretch justify-center">
          {/* Card 1: The Captain */}
          <motion.div 
            className="flex-1 relative bg-[#2c1b0d]/90 border-4 border-[#c1121f] rounded-2xl p-8 shadow-[0_0_30px_rgba(193,18,31,0.5)]"
            initial={{ x: -200, opacity: 0, rotate: -10 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          >
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#c1121f] rounded-full flex items-center justify-center border-4 border-[#f4e4bc] shadow-lg transform -rotate-12">
              <span className="font-bebas text-4xl text-[#f4e4bc]">CAPTAIN</span>
            </div>
            
            <h3 className="font-bebas text-4xl text-[#c1121f] mb-6 mt-4 border-b-2 border-[#c1121f]/30 pb-2">
              My Traits
            </h3>
            
            <ul className="space-y-6 font-inter text-lg text-[#f4e4bc]/90">
              <li className="flex items-start gap-4">
                <span className="text-[#c1121f] text-2xl">🍖</span>
                <span>Steals your fries when you look away.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#c1121f] text-2xl">⚡</span>
                <span>Makes incredibly reckless decisions with zero planning.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#c1121f] text-2xl">👊</span>
                <span>Will start a fight with a Yonko just for a laugh.</span>
              </li>
            </ul>

            {/* Dust cloud effect on enter */}
            <motion.div 
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#d4b886] rounded-full blur-xl opacity-0"
              whileInView={{ scale: [0.5, 1.5, 2], opacity: [0, 0.6, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* VS Badge */}
          <div className="hidden md:flex items-center justify-center z-20">
            <motion.div 
              className="w-20 h-20 bg-[#f4e4bc] rounded-full border-4 border-[#2c1b0d] flex items-center justify-center shadow-xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
              <span className="font-bebas text-4xl text-[#2c1b0d]">VS</span>
            </motion.div>
          </div>

          {/* Card 2: The Moss-Head */}
          <motion.div 
            className="flex-1 relative bg-[#2c1b0d]/90 border-4 border-[#3a5a40] rounded-2xl p-8 shadow-[0_0_30px_rgba(58,90,64,0.5)]"
            initial={{ x: 200, opacity: 0, rotate: 10 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#3a5a40] rounded-full flex items-center justify-center border-4 border-[#f4e4bc] shadow-lg transform rotate-12">
              <span className="font-bebas text-4xl text-[#f4e4bc]">MATE</span>
            </div>
            
            <h3 className="font-bebas text-4xl text-[#3a5a40] mb-6 mt-4 border-b-2 border-[#3a5a40]/30 pb-2">
              Your Traits
            </h3>
            
            <ul className="space-y-6 font-inter text-lg text-[#f4e4bc]/90">
              <li className="flex items-start gap-4">
                <span className="text-[#3a5a40] text-2xl">🧭</span>
                <span>Requires a babysitter in grocery stores.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#3a5a40] text-2xl">💤</span>
                <span>Sleeps 18 hours a day, even during emergencies.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#3a5a40] text-2xl">⚔️</span>
                <span>Carries the team (barely, but we don't talk about it).</span>
              </li>
            </ul>

            {/* Dust cloud effect on enter */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#d4b886] rounded-full blur-xl opacity-0"
              whileInView={{ scale: [0.5, 1.5, 2], opacity: [0, 0.6, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
