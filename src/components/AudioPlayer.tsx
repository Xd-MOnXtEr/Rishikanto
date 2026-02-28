import React, { useEffect, useRef, useState } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Attempt to autoplay
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set a reasonable background volume
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          // Autoplay was prevented by the browser. 
          // We will rely on the first user interaction to start it.
          console.log("Autoplay prevented. Waiting for user interaction.");
          setIsPlaying(false);
        });
      }
    }
    
    // Add a global click listener to start audio if autoplay failed initially
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(e => console.error("Audio play failed:", e));
      }
      // Remove listener after first interaction
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the global click listener
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="https://image2url.com/r2/default/audio/1772295029471-d38abc4e-cbbe-4368-bf5b-ed6951837f9c.mp3" 
        loop 
      />
      <button 
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-[#2c1b0d] text-[#f4e4bc] w-12 h-12 rounded-full border-2 border-[#f4e4bc] shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center text-xl hover:scale-110 transition-transform"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
}
