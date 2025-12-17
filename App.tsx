import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageLines } from './components/ui/PageLines';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-500 selection:text-white">
      <CustomCursor />
      <PageLines />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;