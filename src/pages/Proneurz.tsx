
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProneurzHero from '@/components/proneurz/ProneurzHero';
import HowItWorks from '@/components/proneurz/HowItWorks';
import ProneurzServices from '@/components/proneurz/ProneurzServices';
import StartupMarketplace from '@/components/proneurz/StartupMarketplace';
import ProneurzCta from '@/components/proneurz/ProneurzCta';

const Proneurz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProneurzHero />
        <HowItWorks />
        <ProneurzServices />
        <StartupMarketplace />
        <ProneurzCta />
      </main>
      <Footer />
    </div>
  );
};

export default Proneurz;
