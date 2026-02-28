/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import AnimeBackground from './components/AnimeBackground';
import EasterEggs from './components/EasterEggs';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Dynamics from './components/Dynamics';
import DisasterAnecdote from './components/DisasterAnecdote';
import JourneyMap from './components/JourneyMap';
import DevilFruit from './components/DevilFruit';
import DenDenMushi from './components/DenDenMushi';
import HakiClash from './components/HakiClash';
import BountyBoard from './components/BountyBoard';
import Kanpai from './components/Kanpai';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen text-parchment relative overflow-x-hidden selection:bg-luffy-red selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#c1121f] origin-left z-50"
        style={{ scaleX }}
      />
      {/* Mini Merry Ship on Progress Bar */}
      <motion.div
        className="fixed top-2 z-50 text-2xl"
        style={{ 
          x: useSpring(useTransform(scrollYProgress, [0, 1], ['0vw', '100vw']), { stiffness: 100, damping: 30 }),
          translateX: '-50%'
        }}
      >
        ⛵
      </motion.div>

      <AudioPlayer />
      <AnimeBackground />
      <EasterEggs />
      <Hero />
      <DenDenMushi />
      <Gallery />
      <JourneyMap />
      <Dynamics />
      <DisasterAnecdote />
      <HakiClash />
      <DevilFruit />
      <BountyBoard />
      <Kanpai />
    </main>
  );
}






