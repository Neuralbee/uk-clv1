import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900 text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-900/50 z-10" /> {/* Increased overlay opacity for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/30 z-10" />
        <motion.video 
          style={{ y }}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-100" // Increased opacity
        >
          {/* Slower, more stable architectural shot */}
          <source src="https://videos.pexels.com/video-files/3252033/3252033-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </motion.video>
      </div>

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

      {/* Content Container */}
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center items-center md:items-start">
        
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-6xl w-full"
        >
          {/* Location Tag */}
          <div className="flex items-center gap-4 mb-6 md:mb-10 overflow-hidden">
             <motion.div 
               initial={{ width: 0 }} 
               animate={{ width: 40 }} 
               transition={{ delay: 0.2, duration: 0.8 }} 
               className="h-[2px] bg-orange-500"
             />
             <span className="font-mono text-xs tracking-[0.3em] uppercase text-stone-300">
               Pinner & Greater London
             </span>
          </div>
          
          {/* Big Title - Fixed Line Height overlap */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] mb-8 leading-[1.0] md:leading-[0.9] tracking-tight text-white">
            <span className="block">Visionary</span>
            <span className="italic font-light text-white/90 ml-4 md:ml-32 block">Spaces.</span>
          </h1>
          
          {/* Description & Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mt-12 md:pl-2">
            <p className="font-sans text-stone-300 max-w-md leading-relaxed text-sm md:text-base border-l-2 border-orange-500/50 pl-6">
              We guide you through the complexities of planning and design to transform your property into a masterpiece of modern living.
            </p>
            
            <button className="group relative overflow-hidden flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 rounded-sm cursor-hover">
              <span className="uppercase tracking-widest text-xs font-bold relative z-10">Start Project</span>
              <Play className="w-3 h-3 fill-current group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
          </div>
        </motion.div>

        {/* Technical Meta - Moved to Bottom Left to fix overlap */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-12 font-mono text-[10px] text-stone-500 tracking-widest hidden md:block"
        >
          <div className="flex flex-col gap-1 border-l border-stone-700 pl-4">
            <span className="text-orange-500">COORDINATES</span>
            <span>LAT: 51.5929° N</span>
            <span>LNG: 0.3804° W</span>
            <span className="mt-2 text-stone-400">EST. 2010</span>
          </div>
        </motion.div>

        {/* Scroll Indicator - Bottom Right */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-4"
        >
          <span className="writing-vertical-rl font-mono text-[10px] tracking-widest text-stone-400 uppercase rotate-180">Scroll to Explore</span>
          <div className="h-24 w-[1px] bg-white/10 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-orange-500"
              animate={{ top: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};