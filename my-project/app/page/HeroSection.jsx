import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white min-h-screen flex items-center">
      {/* Optional subtle top gradient decoration - can be removed if not needed */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-indigo-50 to-transparent opacity-40 pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-10">
        {/* Announcement Badge - Hidden on mobile */}
        <div className="hidden sm:flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
            Announcing our next round of funding.{' '}
            <a href="#" className="ml-2 font-semibold text-indigo-600 hover:text-indigo-500">
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Data to enrich your <span className="text-indigo-600">online business</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
            Elit sunt amet fugiat veniam occaecat.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="w-full sm:w-auto rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
            >
              Get started
            </a>
            <a
              href="#"
              className="w-full sm:w-auto text-base font-semibold text-gray-700 hover:text-indigo-600 transition flex items-center justify-center"
            >
              Learn more <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;