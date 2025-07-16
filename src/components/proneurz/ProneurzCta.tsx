
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProneurzCta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-magsum-gold to-amber-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Skip The Startup Phase?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Get a revenue-generating business without the early-stage struggles. Browse our marketplace or join our buyer list to be notified of new opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-magsum-gold hover:bg-gray-100"
            >
              <Link to="/" className="flex items-center">
                View Available Startups
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="secondary" 
              className="bg-white text-magsum-gold hover:bg-gray-100"
            >
              <Link to="/">Join the Buyer List</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProneurzCta;
