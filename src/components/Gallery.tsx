import React from 'react';
import { motion } from 'motion/react';

const polaroids = [
  {
    id: 1,
    src: "https://image2url.com/r2/default/images/1772293531256-dd0c8fc3-c5c2-4494-93b2-eaf890a51351.jpg",
    caption: "That time you got lost on a straight road.",
    rotate: -6,
    delay: 0.1
  },
  {
    id: 2,
    src: "https://image2url.com/r2/default/images/1772293728792-afc7bb1a-1e8d-4057-95c9-4d0cba8a299e.png",
    caption: "Proof that I am the captain.",
    rotate: 12,
    delay: 0.2
  },
  {
    id: 3,
    src: "https://image2url.com/r2/default/images/1772294079231-a9b6ead0-b1ed-431b-82c6-d3cd2ba08396.jpg",
    caption: "Sleeping through a literal disaster.",
    rotate: -10,
    delay: 0.3
  },
  {
    id: 4,
    src: "https://image2url.com/r2/default/images/1772297257057-efaf03fa-3f4b-4b9f-a5f0-509fe0bb9a21.jpg",
    caption: "When you tried to cook and almost killed us.",
    rotate: 8,
    delay: 0.4
  },
  {
    id: 5,
    src: "https://image2url.com/r2/default/images/1772294133520-943a769b-8b6b-4cb2-b284-ecd83999e04a.jpg",
    caption: "Our combined brain cells at work (0).",
    rotate: -4,
    delay: 0.5
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative min-h-screen py-24 px-4 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-bebas text-5xl md:text-7xl text-center mb-16 text-parchment drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Evidence Room
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {polaroids.map((item) => (
            <motion.div
              key={item.id}
              className="polaroid-card relative bg-[#f4e4bc] p-4 pb-12 shadow-2xl cursor-pointer overflow-hidden border-2 border-[#2c1b0d]"
              initial={{ opacity: 0, scale: 0.8, rotate: item.rotate * 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: item.rotate }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0, 
                zIndex: 50,
                transition: { duration: 0.2 }
              }}
            >
              {/* Pin */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c1121f] shadow-md border border-[#2c1b0d] z-20">
                <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white/50"></div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-square bg-[#2c1b0d] mb-4 overflow-hidden border border-[#2c1b0d]/20">
                <img 
                  src={item.src} 
                  alt={item.caption}
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <p className="font-marker text-[#2c1b0d] text-lg text-center leading-tight">
                {item.caption}
              </p>

              {/* Sword Slash Effect */}
              <div className="sword-slash-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
