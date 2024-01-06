import React from 'react';

const HomeIntro = () => {
  return (
    <div
      id="intro"
      data-testid="intro"
      className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 pb-16 pt-20 lg:pt-32 text-center bg-cover bg-center"
      style={{ backgroundImage: `url('/GM-Gen.jpeg')` }}
    >
      <h1 className="mx-auto max-w-4xl font-bold text-6xl tracking-tighter text-white sm:text-8xl">
        Building Excellence, Inside and Out – Your Roof to Floor Specialists.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tighter text-white">
        Choose GM General Contracting for unmatched expertise in roofing, interior, and exterior contracting. We guarantee quality, efficiency, and comprehensive solutions for all your building needs!
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
      </div>
    </div>
  );
};

export default HomeIntro;
