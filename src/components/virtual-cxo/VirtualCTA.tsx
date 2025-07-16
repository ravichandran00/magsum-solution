
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

const VirtualCTA: React.FC = () => {

     const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-magsum-gold to-amber-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
           Ready to Elevate Your Leadership?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
           Whether you're managing finances, launching new campaigns, or building tech — get the CXO support you need, when you need it.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
        size="lg"
        variant="secondary"
        className="bg-white text-magsum-gold hover:bg-gray-100"
        onClick={() => setShowPopup(true)}
      >
        <span className="flex items-center">
          Book a CXO Session Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </span>
      </Button>  
       {showPopup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4">
          <div className="relative bg-white rounded-lg max-w-3xl w-full p-6 shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Iframe */}
            <div className="mt-6">
              <iframe
                aria-label="Book a Virtual CXO Session Now"
                frameBorder="0"
                style={{ height: "500px", width: "100%", border: "none" }}
                src="https://forms.zohopublic.in/magsumsolutions1/form/BookaVirtualCXOSessionNow/formperma/YZHAjliZQZ_R8jqlufFJXZiPGGx-1Wv-rxyw8mi3Kws"
              />
            </div>
          </div>
        </div>
      )}        
         </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCTA;
