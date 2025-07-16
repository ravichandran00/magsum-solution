
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SectionTitle from '@/components/ui/section-title';

const experts = [
  {
    name: "Sarah Johnson",
    role: "Financial Strategy",
    image: "",
    initials: "SJ"
  },
  {
    name: "David Lee",
    role: "Technology & Operations",
    image: "",
    initials: "DL"
  },
  {
    name: "Priya Sharma",
    role: "Marketing & Growth",
    image: "",
    initials: "PS"
  },
  {
    name: "Michael Chen",
    role: "Legal & Compliance",
    image: "",
    initials: "MC"
  },
  {
    name: "Emma Watson",
    role: "Business Analytics",
    image: "",
    initials: "EW"
  },
  {
    name: "Rajiv Patel",
    role: "Investment Advisory",
    image: "",
    initials: "RP"
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Meet The Team"
          title="Our Advisory Panel"
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Magsum Solutions brings together global experts across finance, technology, legal, 
            operations, marketing, and more to provide comprehensive guidance for your business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {experts.map((expert, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                {expert.image && <AvatarImage src={expert.image} />}
                <AvatarFallback className="bg-magsum-purple text-white text-xl">{expert.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-magsum-purple">{expert.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
