
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            We Build, Scale, and Transform Businesses That Matter
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Through our flagship solutions Magnifyze (strategy) and Proneurz (startups), 
            we empower businesses with data-driven insights and expert-backed execution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Button size="lg" className="ml-2 bg-magsum-purple hover:bg-magsum-purple/90">
              <Link to="/magnifyze" className="flex items-center">
                Explore Our Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-magsum-purple text-magsum-purple hover:bg-magsum-purple hover:text-white dark:border-magsum-purple dark:text-magsum-purple dark:hover:text-white">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-magsum-blue">Magnifyze</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our comprehensive strategy, analytics, and growth support ecosystem 
              for established businesses looking to scale sustainably and efficiently.
            </p>
            <Link to="/magnifyze" className="inline-block mt-4 text-magsum-purple font-medium hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-magsum-blue">Proneurz</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our expert-guided service that builds revenue-ready startups for entrepreneurs, 
              eliminating the guesswork and accelerating time to market.
            </p>
            <Link to="/proneurz" className="inline-block mt-4 text-magsum-purple font-medium hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-70"></div>
      <div className="hidden lg:block absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-50 dark:bg-purple-900/20 opacity-70"></div>
    </section>
  );
};

export default HeroSection;
