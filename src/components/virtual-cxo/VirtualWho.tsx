// components/VirtualService.tsx
import React from 'react';
import whoIsImage from '../../assets/who-is-img.jpg'; 





const VirtualWho: React.FC = () => {
  const points = [
    "Startups in growth stage needing expert oversight ",
    "SMEs who can’t afford full-time C-suite hires ",
    "Founders who need strategic direction but want to stay lean ",
    "Teams scaling operations, entering new markets, or preparing for funding ",
    
  ];

  return (
    <section className="mx-auto px-4 md:px-12 py-12 md:py-20 font-body bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 gradient-text">
           Who Is This For?
          </h2>
          <ul className="space-y-2 list-disc list-inside text-lg text-black">
            {points.map((point, index) => (
              <li key={index} className='virtual-ul'>{point}</li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center">
          <img
            src={whoIsImage}
            alt="Virtual CFO Illustration"
            className="max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualWho;
