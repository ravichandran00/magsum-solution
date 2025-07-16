
import React from 'react';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProneurzServices: React.FC = () => {
  const services = [
    {
      title: "Business Formation",
      description: "Complete legal setup including registration, compliance, and documentation.",
      icon: ""
    },
    {
      title: "Idea Validation",
      description: "Market research, prototype testing, and concept validation with real customers.",
      icon: ""
    },
    {
      title: "Product Development",
      description: "Full creation of MVPs, platforms, and scalable product architecture.",
      icon: ""
    },
    {
      title: "Investor Access",
      description: "Connections to our network of qualified investors and funding sources.",
      icon: ""
    },
    {
      title: "Operations Setup",
      description: "Development of operational systems, financial models, and business processes.",
      icon: ""
    },
    {
      title: "Marketing Strategy",
      description: "Brand development, marketing plans, and initial customer acquisition strategy.",
      icon: ""
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="What We Offer"
          title="Services Under Proneurz"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow overflow-hidden dark:bg-gray-700">
              <CardHeader className="pb-4">
                <div className="text-3xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProneurzServices;
