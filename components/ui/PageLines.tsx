import React from 'react';

export const PageLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 container mx-auto">
      <div className="w-[1px] h-full bg-stone-300/20"></div>
      <div className="w-[1px] h-full bg-stone-300/20 hidden md:block"></div>
      <div className="w-[1px] h-full bg-stone-300/20 hidden md:block"></div>
      <div className="w-[1px] h-full bg-stone-300/20"></div>
    </div>
  );
};