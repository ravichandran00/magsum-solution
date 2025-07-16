
import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            About Magsum Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering entrepreneurs with a structured and expert-backed approach to business building and scaling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
