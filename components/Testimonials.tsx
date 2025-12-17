import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './ui/Reveal';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-stone-800">Google</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <h2 className="font-serif text-4xl text-stone-900">Client Voices</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.id} delay={index * 0.1}>
              <div className="bg-white p-8 md:p-10 shadow-sm border border-stone-100 h-full flex flex-col relative mt-6 md:mt-0">
                <div className="absolute -top-6 left-8 bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-serif text-2xl rounded-full">
                  "
                </div>
                <div className="pt-4 mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 font-sans italic leading-relaxed mb-6">
                    {t.text}
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-stone-100">
                  <p className="font-bold text-stone-900 uppercase tracking-wide text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs mt-1">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};