import React from "react";

const teamMembers = [
  {
    name: "Dr. Arjun Menon",
    designation: "Chief Medical Advisor",
    description: "Expert in clinical strategy and healthcare innovation.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ms. Priya Sharma",
    designation: "Financial Advisor",
    description: "Specializes in investment planning and risk assessment.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Rakesh Nair",
    designation: "Technology Consultant",
    description: "Advises on enterprise tech and digital transformation.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Dr. Meera Iyer",
    designation: "Research Advisor",
    description: "Guides R&D efforts in pharmaceuticals and biotech.",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Mr. Anil Kapoor",
    designation: "Legal Advisor",
    description: "Provides strategic legal counsel and compliance.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Ms. Sunita Rao",
    designation: "Marketing Strategist",
    description: "Leads brand positioning and market outreach.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const AdvisoryProfile = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-10 relative overflow-hidden">
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
     
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(59,130,246,0.5)]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium">{member.designation}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default AdvisoryProfile;
