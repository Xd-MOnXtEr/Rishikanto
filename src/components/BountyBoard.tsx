import React from 'react';
import { motion } from 'motion/react';

export default function BountyBoard() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-12 z-10 flex flex-col items-center justify-center">
      <motion.h2 
        className="font-bebas text-5xl md:text-7xl text-center mb-16 text-parchment drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Bounty Board
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto w-full">
        {/* Poster 1: The Captain */}
        <motion.div 
          className="flex-1 wanted-poster p-6 flex flex-col items-center transform -rotate-2 hover:rotate-0 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bebas text-5xl md:text-6xl text-center mb-4 tracking-widest border-b-4 border-[#2c1b0d] w-full pb-2">
            DEAD OR ALIVE
          </h3>
          
          {/* Image Placeholder */}
          <div className="w-full aspect-[3/4] bg-[#2c1b0d] mb-6 relative border-4 border-[#2c1b0d] overflow-hidden">
            <img 
              src="https://image2url.com/r2/default/images/1772296300968-22e272e1-cb46-4801-a8b9-bd74aa76eff2.png" 
              alt="The Bottomless Pit"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <h4 className="font-bebas text-4xl text-center mb-2">"The Bottomless Pit"</h4>
          <p className="font-bebas text-3xl text-center mb-6 tracking-widest">
            <span className="text-xl">฿</span> 1,500,000,000
          </p>

          <div className="w-full border-t-2 border-[#2c1b0d] pt-4 font-marker text-sm md:text-base leading-relaxed">
            <p><strong className="font-bebas text-xl">Crimes:</strong> Aggressive French-fry theft, Weaponized stupidity, Making the crew pay the bill.</p>
            <p className="mt-2 text-[#c1121f]"><strong className="font-bebas text-xl text-[#2c1b0d]">Warning:</strong> Extremely dangerous when hungry.</p>
          </div>
        </motion.div>

        {/* Poster 2: The First Mate */}
        <motion.div 
          className="flex-1 wanted-poster p-6 flex flex-col items-center transform rotate-3 hover:rotate-0 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-bebas text-5xl md:text-6xl text-center mb-4 tracking-widest border-b-4 border-[#2c1b0d] w-full pb-2">
            DEAD OR ALIVE
          </h3>
          
          {/* Image Placeholder */}
          <div className="w-full aspect-[3/4] bg-[#2c1b0d] mb-6 relative border-4 border-[#2c1b0d] overflow-hidden">
            <img 
              src="https://image2url.com/r2/default/images/1772296374448-487d9ebd-f438-4a8e-9f76-c7005ea530b4.png" 
              alt="The Lost Cause"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <h4 className="font-bebas text-4xl text-center mb-2">"The Lost Cause"</h4>
          <p className="font-bebas text-3xl text-center mb-6 tracking-widest">
            <span className="text-xl">฿</span> 1,111,000,000
          </p>

          <div className="w-full border-t-2 border-[#2c1b0d] pt-4 font-marker text-sm md:text-base leading-relaxed">
            <p><strong className="font-bebas text-xl">Crimes:</strong> Getting lost in straight hallways, Sleeping an illegal amount, Aggressive sighing.</p>
            <p className="mt-2 text-[#3a5a40]"><strong className="font-bebas text-xl text-[#2c1b0d]">Warning:</strong> Under no circumstances should you ask this person for directions.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
