import React from 'react';
import { motion } from 'motion/react';

export default function DisasterAnecdote() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-12 z-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="font-bebas text-5xl md:text-7xl text-center mb-12 text-parchment drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Reason #357 Why You're A Disaster
        </motion.h2>

        <motion.div 
          className="glass-panel p-8 md:p-16 rounded-3xl relative"
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm transform rotate-2 shadow-sm"></div>
          <div className="absolute -bottom-4 right-10 w-24 h-8 bg-white/30 backdrop-blur-sm transform -rotate-3 shadow-sm"></div>

          {/* Quote Marks */}
          <div className="absolute top-4 left-4 text-6xl text-[#c1121f] opacity-50 font-bebas">"</div>
          <div className="absolute bottom-4 right-4 text-6xl text-[#c1121f] opacity-50 font-bebas rotate-180">"</div>

          <p className="font-marker text-2xl md:text-4xl text-parchment leading-relaxed text-center relative z-10 drop-shadow-md">
            Remember that time we were using Google Maps, and it literally said "Walk straight for 500 feet," and you somehow managed to take a left turn into a completely different zip code? 
            <br/><br/>
            I still don't understand how you confidently led us into a dead-end alleyway while holding the phone upside down. You are the only person I know who could get lost on a treadmill.
          </p>
          
          <div className="mt-8 text-right">
            <span className="font-bebas text-2xl text-[#c1121f] border-b-2 border-[#c1121f]">
              - The Captain (Who had to save us)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
