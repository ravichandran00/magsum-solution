
import React from 'react';
import SectionTitle from '@/components/ui/section-title';

const steps = [
  {
    number: 1,
    title: "Data Collection",
    description: "Gathering comprehensive business data from your operations, customers, competitors, and market."
  },
  {
    number: 2,
    title: "Data Analysis",
    description: "Processing information to identify patterns, opportunities, threats, and actionable insights."
  },
  {
    number: 3,
    title: "Insight & Forecasting",
    description: "Converting analysis into meaningful business insights and predictive models for future scenarios."
  },
  {
    number: 4,
    title: "Strategic Planning",
    description: "Developing comprehensive strategies and action plans based on data-driven insights."
  },
  {
    number: 5,
    title: "Implementation",
    description: "Executing the strategic plan with expert guidance and resource optimization."
  },
  {
    number: 6,
    title: "Monitoring & Optimization",
    description: "Continuous tracking of performance metrics with agile adjustments for maximum results."
  }
];

const FrameworkSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Approach"
          title="The Magnifyze 6-Step Framework"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-magsum-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
