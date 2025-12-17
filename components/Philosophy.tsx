import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-stone-50 text-stone-900 overflow-hidden relative">
      {/* Decorative large text */}
      <div className="absolute top-20 right-0 font-serif text-[12rem] md:text-[20rem] leading-none text-stone-100 select-none pointer-events-none -z-10 opacity-60">
        SSK
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          
          <div className="w-full md:w-1/2 relative group cursor-hover">
             <Reveal width="100%">
              <div className="aspect-[3/4] relative">
                 <div className="absolute top-4 left-4 right-4 bottom-4 border border-stone-800 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-95 group-hover:scale-100"></div>
                 <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                  alt="Architectural Detail" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-stone-900 text-stone-50 p-6 shadow-2xl z-30 max-w-[200px]"
                  whileHover={{ y: -5 }}
                >
                  <div className="font-mono text-[10px] text-orange-500 mb-2">FOUNDATION</div>
                  <p className="font-serif italic text-xl leading-tight">"Form follows function."</p>
                </motion.div>
              </div>
            </Reveal>
          </div>

          <div className="w-full md:w-1/2">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-orange-600">01</span>
                <div className="h-[1px] w-12 bg-orange-600"></div>
                <h2 className="text-xs font-mono font-bold tracking-widest text-stone-500 uppercase">The Philosophy</h2>
              </div>
            </Reveal>
            
            <Reveal>
              <h3 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-10">
                Design that respects <span className="italic text-stone-400">tradition</span>, while embracing the <span className="italic text-stone-400">future</span>.
              </h3>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="space-y-8 text-stone-600 font-sans leading-relaxed text-sm md:text-base md:pl-16 border-l border-stone-200 ml-2">
                <p>
                  Choosing an architect you can count on doesn't have to be difficult. Through our years of experience, we understand that taking on a new building or planning project can be time-consuming and expensive.
                </p>
                <p>
                  This is why we guide you through the entire process in a straightforward way, helping to minimize your time spent. We capture the vision of your project and deliver your dream property at a competitive price.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="w-2 h-2 bg-stone-900"></div>
                  <p className="text-stone-900 font-medium font-mono text-xs uppercase tracking-wider">
                    Full Service Architecture
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};