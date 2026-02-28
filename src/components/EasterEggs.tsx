import React from 'react';
import { motion } from 'motion/react';

export default function EasterEggs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sanji's badly drawn wanted poster */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-44 bg-[#f4e4bc] shadow-lg transform -rotate-12 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-full border-2 border-[#2c1b0d] p-2 flex flex-col items-center">
          <h3 className="font-bebas text-xs text-[#2c1b0d] mb-1">WANTED</h3>
          <div className="w-full h-20 border border-[#2c1b0d] flex items-center justify-center relative overflow-hidden">
            {/* Badly drawn Sanji face */}
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#2c1b0d] fill-none" strokeWidth="2">
              <circle cx="50" cy="50" r="30" />
              <path d="M 35 45 Q 40 40 45 45" />
              <path d="M 55 45 Q 60 40 65 45" />
              <circle cx="40" cy="50" r="2" fill="#2c1b0d" />
              <circle cx="60" cy="50" r="2" fill="#2c1b0d" />
              <path d="M 45 60 Q 50 65 55 60" />
              <path d="M 30 30 Q 50 10 70 30" /> {/* Hair */}
              <path d="M 60 60 L 70 65" strokeWidth="3" /> {/* Cigarette */}
            </svg>
          </div>
          <h3 className="font-bebas text-xs text-[#2c1b0d] mt-1">DEAD OR ALIVE</h3>
          <h3 className="font-bebas text-sm text-[#2c1b0d]">SANJI</h3>
        </div>
        {/* Torn effect */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-tavern-dark transform translate-y-4 rotate-6"></div>
      </motion.div>

      {/* Chopper peeking out */}
      <motion.div 
        className="absolute bottom-40 right-10 w-24 h-24"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, type: 'spring', stiffness: 50 }}
      >
        <div className="relative w-full h-full">
          {/* Chopper body (hiding wrong way) */}
          <div className="absolute top-0 right-0 w-16 h-20 bg-[#d4a373] rounded-full border-2 border-[#2c1b0d]"></div>
          {/* Hat */}
          <div className="absolute -top-4 right-2 w-20 h-10 bg-[#e07a5f] rounded-t-full border-2 border-[#2c1b0d]"></div>
          <div className="absolute top-2 right-0 w-24 h-4 bg-[#e07a5f] rounded-full border-2 border-[#2c1b0d]"></div>
          {/* Antlers */}
          <div className="absolute -top-8 right-12 w-4 h-12 bg-[#8b5a2b] rounded-full border-2 border-[#2c1b0d] transform -rotate-45"></div>
          <div className="absolute -top-8 right-0 w-4 h-12 bg-[#8b5a2b] rounded-full border-2 border-[#2c1b0d] transform rotate-45"></div>
        </div>
      </motion.div>

      {/* Sleeping Den Den Mushi */}
      <div className="absolute bottom-10 left-20 w-16 h-16 opacity-50">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Shell */}
          <path d="M 20 80 Q 20 40 50 40 Q 80 40 80 80 Z" fill="#a0c4ff" stroke="#2c1b0d" strokeWidth="3" />
          <path d="M 30 80 Q 30 50 50 50 Q 70 50 70 80" fill="none" stroke="#2c1b0d" strokeWidth="3" />
          <path d="M 40 80 Q 40 60 50 60 Q 60 60 60 80" fill="none" stroke="#2c1b0d" strokeWidth="3" />
          {/* Body */}
          <path d="M 10 80 L 90 80 Q 95 80 95 85 Q 95 90 90 90 L 10 90 Q 5 90 5 85 Q 5 80 10 80 Z" fill="#ffd6a5" stroke="#2c1b0d" strokeWidth="3" />
          {/* Head */}
          <circle cx="85" cy="70" r="10" fill="#ffd6a5" stroke="#2c1b0d" strokeWidth="3" />
          {/* Eyes (closed) */}
          <path d="M 80 68 Q 85 72 90 68" fill="none" stroke="#2c1b0d" strokeWidth="2" />
          {/* Zzz */}
          <text x="70" y="40" fontFamily="Permanent Marker" fontSize="16" fill="#f4e4bc" className="animate-pulse">Z</text>
          <text x="85" y="30" fontFamily="Permanent Marker" fontSize="12" fill="#f4e4bc" className="animate-pulse" style={{ animationDelay: '0.5s' }}>z</text>
          <text x="95" y="20" fontFamily="Permanent Marker" fontSize="8" fill="#f4e4bc" className="animate-pulse" style={{ animationDelay: '1s' }}>z</text>
        </svg>
      </div>
    </div>
  );
}
