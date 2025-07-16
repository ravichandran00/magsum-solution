
import React from 'react';
import SectionTitle from '@/components/ui/section-title';

const industries = [
  "Manufacturing", 
  "Retail", 
  "Healthcare", 
  "Financial Services", 
  "Tech Startups", 
  "Educational Institutions"
];

const IndustrySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Who We Serve"
          title="Industries We Serve"
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            We bring specialized expertise across a wide range of industries,
            customizing our approach to each sector's unique challenges and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center border border-gray-100 hover:border-magsum-purple/50 transition-colors">
              <p className="font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
