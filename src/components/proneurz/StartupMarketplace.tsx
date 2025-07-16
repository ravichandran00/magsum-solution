
import React from 'react';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const StartupMarketplace: React.FC = () => {
  // Example startups for demonstration purposes
  const startups = [
    {
      name: "EcoDelivery",
      category: "Logistics",
      status: "in-development",
      description: "Sustainable last-mile delivery service using electric vehicles and optimized routes.",
      progress: 65
    },
    {
      name: "HealthTrack",
      category: "Healthcare",
      status: "ready",
      description: "Personal health monitoring platform with subscription-based revenue model.",
      revenue: "$5,000/month",
      price: "$120,000"
    },
    {
      name: "LocalEats",
      category: "Food Tech",
      status: "sold",
      description: "Digital platform connecting local food producers directly with consumers.",
      soldFor: "$180,000"
    },
    {
      name: "MetaLearn",
      category: "EdTech",
      status: "in-development",
      description: "AI-powered educational platform focused on personalized learning paths.",
      progress: 40
    },
    {
      name: "SmartRent",
      category: "Real Estate",
      status: "ready",
      description: "Property management system with tenant portal and automated payments.",
      revenue: "$8,500/month",
      price: "$220,000"
    },
    {
      name: "FitQuest",
      category: "Fitness",
      status: "sold",
      description: "Gamified fitness app with subscription model and corporate partnerships.",
      soldFor: "$250,000"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'in-development':
        return <Badge className="bg-blue-500 hover:bg-blue-600">In Development</Badge>;
      case 'ready':
        return <Badge className="bg-green-500 hover:bg-green-600">Ready to Sell</Badge>;
      case 'sold':
        return <Badge className="bg-gray-500 hover:bg-gray-600">Sold</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Startup Marketplace"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {startups.map((startup, index) => (
            <Card key={index} className="border border-gray-100 dark:border-gray-700 shadow hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold">{startup.name}</CardTitle>
                  {getStatusBadge(startup.status)}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{startup.category}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{startup.description}</p>
                {startup.status === 'in-development' && (
                  <div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${startup.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{startup.progress}% Complete</p>
                  </div>
                )}
                {startup.status === 'ready' && (
                  <div className="space-y-2">
                    <p className="font-medium">Monthly Revenue: <span className="text-green-500">{startup.revenue}</span></p>
                    <p className="font-semibold">Price: {startup.price}</p>
                  </div>
                )}
                {startup.status === 'sold' && (
                  <p className="text-gray-500 dark:text-gray-400">Successfully sold for {startup.soldFor}</p>
                )}
              </CardContent>
              <CardFooter>
                {startup.status === 'ready' && (
                  <Button className="w-full">Request Details</Button>
                )}
                {startup.status === 'in-development' && (
                  <Button variant="outline" className="w-full">Join Waitlist</Button>
                )}
                {startup.status === 'sold' && (
                  <Button variant="outline" className="w-full" disabled>No Longer Available</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupMarketplace;
