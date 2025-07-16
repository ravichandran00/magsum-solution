import React from "react";
import whyChooseImage from "../../assets/why-choose-image.jpg";

const VirtualWhyChoose: React.FC = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${whyChooseImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl w-full px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left image area (hidden on small devices) */}
       

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Why Choose Magsum’s Virtual CXOs?
          </h1>
          <ul className="space-y-2 list-disc list-inside text-lg text-white">
            <li>On-demand, no long-term cost commitments </li>

            <li>Top-tier talent matched to your business needs </li>

            <li>Flexible engagement (monthly or project-based)</li>

            <li>Backed by Magsum’s business intelligence ecosystem </li>

            <li>
              Free access for clients of Magnifyze or Proneurz subscription
              plans
            </li>
          </ul>
        </div>
         <div className="hidden md:block md:w-1/2">
          {/* empty space for layout symmetry, or you can optionally show image here */}
        </div>
      </div>
    </section>
  );
};

export default VirtualWhyChoose;
