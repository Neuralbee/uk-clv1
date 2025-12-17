import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';
import { Ruler, Pencil, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  ruler: <Ruler className="w-6 h-6" />,
  pencil: <Pencil className="w-6 h-6" />,
  clipboard: <ClipboardCheck className="w-6 h-6" />
};

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-stone-100 border-t border-stone-200 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-stone-300 pb-8">
           <Reveal width="100%">
            <div className="max-w-xl">
              <span className="font-mono text-xs text-orange-600 mb-2 block">02 / EXPERTISE</span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">Comprehensive<br/>Design Solutions.</h2>
            </div>
           </Reveal>
           <div className="hidden md:block pb-2">
             <span className="font-mono text-xs text-stone-400">SCROLL FOR DETAILS ↓</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-stone-300">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div 
                className="group p-10 md:p-14 bg-stone-100 border-r border-b border-stone-300 hover:bg-white transition-all duration-500 h-full flex flex-col items-start cursor-hover relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Pattern on Hover */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] transition-opacity duration-300" 
                     style={{ opacity: hoveredIndex === index ? 0.08 : 0 }}
                />

                <div className="w-full flex justify-between items-start mb-12">
                  <div className="p-3 bg-stone-200 rounded-sm text-stone-800 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <span className="font-mono text-xs text-stone-300 group-hover:text-stone-900 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif mb-6 text-stone-900 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                
                <p className="text-stone-500 font-sans leading-relaxed text-sm mb-8 group-hover:text-stone-700 transition-colors">
                  {service.description}
                </p>

                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};