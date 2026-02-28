import React from 'react';
import { motion } from 'motion/react';

export default function AnimeBackground() {
  return (
    <div className="fixed inset-0 z-[-2] bg-gradient-to-b from-[#4facfe] to-[#00f2fe] overflow-hidden">
      {/* Anime Sun */}
      <div className="absolute top-10 right-10 md:top-20 md:right-32 w-32 h-32 md:w-48 md:h-48 bg-[#ffdd00] rounded-full shadow-[0_0_80px_#ffdd00] animate-pulse"></div>
      
      {/* Manga Action Lines Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-conic-gradient(from_0deg,transparent_0deg_15deg,#ffffff_15deg_30deg)] animate-[spin_120s_linear_infinite] origin-center"></div>

      {/* Moving Clouds */}
      <motion.div 
        className="absolute top-20 left-0 w-[200vw] h-32 flex gap-32 opacity-90"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      >
        {[...Array(12)].map((_, i) => (
          <svg key={i} width="200" height="80" viewBox="0 0 200 80" fill="white" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            <path d="M30 60 Q30 30 60 30 Q75 0 120 0 Q165 0 180 30 Q210 30 210 60 Z" />
          </svg>
        ))}
      </motion.div>

      {/* Ocean Waves at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 overflow-hidden flex items-end">
        <motion.svg 
          className="absolute bottom-0 w-[200vw] h-full min-w-[200vw]" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 320"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <path fill="#0077b6" fillOpacity="0.8" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,197.3C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </motion.svg>
        <motion.svg 
          className="absolute bottom-0 w-[200vw] h-5/6 min-w-[200vw]" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 320"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <path fill="#023e8a" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,170.7C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </motion.svg>
      </div>
    </div>
  );
}
