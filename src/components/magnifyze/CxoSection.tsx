
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';

const cxoRoles = [
  {
    title: "Virtual CFO",
    description: "Financial strategy, cash flow management, investment planning, and budgeting.",
  },
  {
    title: "Virtual CTO",
    description: "Technology roadmapping, digital transformation, and IT infrastructure guidance.",
  },
  {
    title: "Virtual CMO",
    description: "Marketing strategy, brand development, customer acquisition, and retention planning.",
  },
  {
    title: "Virtual CRO",
    description: "Revenue optimization, sales strategy, and customer lifetime value maximization.",
  },
  {
    title: "Virtual CGO",
    description: "Growth strategy, market expansion, and scaling operations efficiently.",
  },
];

const CxoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Executive Expertise"
          title="Virtual CXO Services"
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Access leadership expertise without the cost of hiring full-time executives. 
            Our virtual CXO services are included in Growth & Enterprise subscription plans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cxoRoles.map((role, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-xl text-magsum-blue">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CxoSection;
