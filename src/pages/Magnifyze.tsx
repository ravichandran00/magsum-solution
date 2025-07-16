
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MagnifyzeHero from '@/components/magnifyze/MagnifyzeHero';
import FrameworkSection from '@/components/magnifyze/FrameworkSection';
import ServicesSection from '@/components/magnifyze/ServicesSection';
import CxoSection from '@/components/magnifyze/CxoSection';
import IndustrySection from '@/components/magnifyze/IndustrySection';
import PricingSection from '@/components/magnifyze/PricingSection';
import CtaSection from '@/components/home/CtaSection';
import PricingTable from '@/components/pricing/PricingTable';
import FeatureTable from '@/components/pricing/FeatureTable';
import HowMagnifyzework from '@/components/magnifyze/HowMagnifyzework';
import GainSection from '@/components/magnifyze/GainSection';
import GetStartedCard from '@/components/magnifyze/GetStartedCard';


const Magnifyze: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <MagnifyzeHero />
        {/* <FrameworkSection /> */}
        <HowMagnifyzework/>
        <GainSection/>
        <GetStartedCard/>
        <ServicesSection />
        <CxoSection />
        <IndustrySection />
        <PricingTable/> 
        <FeatureTable/>      
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Magnifyze;
