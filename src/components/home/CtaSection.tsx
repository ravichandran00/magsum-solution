
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-magsum-blue to-magsum-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Let's work together to build, scale, and transform your business with our expert-backed strategies and solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-magsum-purple hover:bg-gray-100"
            >
              <Link to="/magnifyze" className="flex items-center">
                Explore Our Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="secondary" 
              className="bg-white text-magsum-purple hover:bg-gray-100"
            >
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
