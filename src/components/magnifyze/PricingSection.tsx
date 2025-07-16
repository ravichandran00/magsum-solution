
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';

const plans = [
  {
    name: "Starter",
    price: "$997",
    period: "per month",
    description: "For small businesses looking to optimize their operations",
    features: [
      "Business Health Check",
      "Quarterly Strategy Sessions",
      "Market Analysis",
      "Growth Recommendations",
      "Email Support"
    ],
    isPopular: false,
    buttonText: "Get Started"
  },
  {
    name: "Growth",
    price: "$2,497",
    period: "per month",
    description: "For growing businesses ready to scale strategically",
    features: [
      "Everything in Starter",
      "Monthly Strategy Sessions",
      "Virtual CMO or CRO",
      "Implementation Support",
      "Dedicated Business Advisor",
      "Priority Support"
    ],
    isPopular: true,
    buttonText: "Choose Growth"
  },
  {
    name: "Enterprise",
    price: "$4,997",
    period: "per month",
    description: "For established businesses seeking comprehensive support",
    features: [
      "Everything in Growth",
      "Weekly Strategy Meetings",
      "Full Virtual CXO Suite",
      "Custom Analytics Dashboard",
      "Full Implementation Support",
      "Team Training Sessions",
      "24/7 Priority Support"
    ],
    isPopular: false,
    buttonText: "Contact Us"
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Flexible Plans"
          title="Subscription Plans"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden ${
                  plan.isPopular 
                    ? 'border-magsum-purple shadow-lg relative' 
                    : 'border-gray-200 shadow-sm'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-magsum-purple text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <Button 
                    variant={plan.isPopular ? "default" : "outline"} 
                    className={`w-full mb-6 ${
                      plan.isPopular 
                        ? 'bg-magsum-purple hover:bg-purple-800' 
                        : 'border-magsum-purple text-magsum-purple hover:bg-magsum-purple hover:text-white'
                    }`}
                  >
                    <Link to="/contact">{plan.buttonText}</Link>
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
