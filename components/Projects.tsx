import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-stone-900 text-stone-50 relative overflow-hidden">
      {/* Background Grid Lines (Dark Mode) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 container mx-auto opacity-10">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <Reveal>
               <div className="flex items-center gap-3 mb-4">
                 <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                 <span className="font-mono text-xs text-stone-400">03 / PORTFOLIO</span>
               </div>
               <h2 className="font-serif text-5xl md:text-7xl">Selected Works</h2>
            </Reveal>
          </div>
          <div className="mt-8 md:mt-0">
            <Reveal delay={0.2}>
              <a href="#" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors cursor-hover">
                View All Projects
                <span className="block h-[1px] w-8 bg-stone-600 group-hover:w-16 group-hover:bg-white transition-all duration-300"></span>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px] md:auto-rows-[450px]">
          {PROJECTS.map((project, index) => {
            // Determine span classes based on 'size'
            let spanClass = "";
            if (project.size === 'wide') spanClass = "md:col-span-2";
            if (project.size === 'tall') spanClass = "md:row-span-2";

            return (
              <div key={project.id} className={`group relative bg-stone-800 overflow-hidden cursor-hover ${spanClass}`}>
                <Reveal delay={index * 0.1} width="100%" key={`reveal-${project.id}`}>
                  <div className="w-full h-full relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="w-full h-full"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </motion.div>
                    
                    {/* Overlay info */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[10px] text-white/70 border border-white/20 px-2 py-1 uppercase">{project.category}</span>
                        <span className="font-mono text-[10px] text-white/70">REF: 00{project.id}</span>
                      </div>
                      
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <h3 className="text-3xl font-serif text-white mb-2">{project.title}</h3>
                         <div className="h-[1px] w-0 group-hover:w-full bg-orange-500 transition-all duration-700 delay-100"></div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};