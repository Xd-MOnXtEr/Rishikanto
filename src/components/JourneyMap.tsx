import React from 'react';
import { motion } from 'motion/react';

const islands = [
  { 
    id: 1,
    name: "Dawn Island (The Beginning)", 
    desc: "The day we met and instantly realized we shared a single brain cell. A dangerous alliance was formed.",
    icon: "🌅"
  },
  { 
    id: 2,
    name: "Syrup Village of Lies", 
    desc: "That time we lied to our parents to hang out and almost got caught. Legendary stealth mission (failed).",
    icon: "🤥"
  },
  { 
    id: 3,
    name: "Water 7 (The Great Argument)", 
    desc: "We fought over something incredibly stupid, didn't talk for 2 days, then forgot why we were mad.",
    icon: "🌊"
  },
  { 
    id: 4,
    name: "Sabaody Archipelago", 
    desc: "The great separation when we went to different schools/cities, but still stayed absolute menaces.",
    icon: "🫧"
  }
];

export default function JourneyMap() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-12 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="font-bebas text-5xl md:text-7xl text-center mb-16 text-parchment drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Grand Line of Our Friendship
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-[#2c1b0d] border-x border-[#f4e4bc]/30 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {islands.map((island, index) => (
              <motion.div 
                key={island.id}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
              >
                {/* Content */}
                <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-20 md:pl-0`}>
                  <div className="glass-panel p-6 rounded-2xl relative group hover:scale-105 transition-transform duration-300 cursor-default">
                    <h3 className="font-bebas text-3xl text-[#f4e4bc] mb-2 group-hover:text-[#ffdd00] transition-colors">
                      {island.name}
                    </h3>
                    <p className="font-marker text-lg text-parchment/80">
                      {island.desc}
                    </p>
                    {/* Log Pose Pointer */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-[#f4e4bc] ${index % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
                  </div>
                </div>

                {/* Center Icon / Island Marker */}
                <div className="absolute left-0 md:relative md:left-auto w-16 h-16 bg-[#f4e4bc] rounded-full border-4 border-[#2c1b0d] flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(244,228,188,0.5)] z-10 shrink-0">
                  {island.icon}
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
