import React from 'react';
import { Reveal } from './ui/Reveal';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 pt-24 pb-12 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl text-white mb-6">SSK Architects</h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Designing the future of London living with precision, elegance, and integrity.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <a href="tel:07962223141" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3" /> 07962 223141
              </a>
              <a href="mailto:info@sskarchitects.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3" /> info@sskarchitects.com
              </a>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 shrink-0" /> 
                <span>Pinner & Surrounding Areas<br/>Greater London</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Accredited By</h4>
            <div className="grid grid-cols-2 gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
               {/* Placeholders for logos since real ones aren't provided as SVGs */}
               <div className="bg-stone-800 h-12 flex items-center justify-center border border-stone-700">RIBA</div>
               <div className="bg-stone-800 h-12 flex items-center justify-center border border-stone-700">CIAT</div>
               <div className="bg-stone-800 h-12 flex items-center justify-center border border-stone-700">ARB</div>
               <div className="bg-stone-800 h-12 flex items-center justify-center border border-stone-700">Houzz</div>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} SSK Architects Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">London, UK</p>
        </div>
      </div>
    </footer>
  );
};