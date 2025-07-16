import React from "react";
import MAgsum from "../../assets/magnifyze-img-sticky.jpg";
const HowMagnifyzeworkStatic = () => {
  const darkMode = false; // Toggle manually if needed

  const uspItems = [
    {
      title: "Smart Automation",
      description:
        "Eliminate repetitive tasks with intelligent automation that adapts to your workflow.",
      icons: ["⚙️"], // Placeholder; you can replace with SVG or a component
    },
    {
      title: "Real-Time Insights",
      description:
        "Get up-to-the-minute analytics to drive better decisions and performance.",
      icons: ["📊"],
    },
    {
      title: "Seamless Integration",
      description:
        "Easily connect with your favorite tools and platforms for smooth operations.",
      icons: ["🔗"],
    },
     {
      title: "Seamless Integration",
      description:
        "Easily connect with your favorite tools and platforms for smooth operations.",
      icons: ["🔗"],
    },
     {
      title: "Seamless Integration",
      description:
        "Easily connect with your favorite tools and platforms for smooth operations.",
      icons: ["🔗"],
    },
  ];

  return (
    <section
      className={`flex flex-col items-center px-4 sm:px-8 md:px-[80px] py-12 md:py-[120px] max-w-[1440px] mx-auto font-body transition-all duration-300 ${
        darkMode ? "bg-darkteal-800 text-white" : "bg-darkteal-50 text-black"
      }`}
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 text-center max-w-[680px] mb-8 sm:mb-12">
        <h2
          className={`font-body text-2xl sm:text-2xl md:text-4xl font-semibold   leading-tight ${
            darkMode ? "gradient-text" : "gradient-text"
          }`}
        >
          How Magnifyze Works
        </h2>
        <p
          className={`text-sm sm:text-base md:text-lg ${
            darkMode ? "text-secondary-invert" : "text-onyx-400"
          }`}
        >
          Discover how our platform streamlines your workflow with simplicity
          and efficiency.
        </p>
      </div>

      {/* Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* Left: Image */}
        <div className="md:sticky md:top-[100px] md:self-start">
          <img
            src={MAgsum }
            alt="USP Illustration"
            className="rounded-xl w-full h-auto object-cover max-h-[600px]"
          />
        </div>

        {/* Right: USP Items */}
        <div className="flex flex-col gap-4 max-w-full md:max-w-[586px] overflow-y-auto pr-1 sm:pr-2 scroll-smooth scroll-py-4">
          {uspItems.map((item, index) => (
            <div
              key={index}
              className={`p-4 sm:p-5 rounded-xl space-y-2 transition-shadow ${
                darkMode
                  ? "bg-darkteal-700 hover:shadow-zinc-700"
                  : "bg-white hover:shadow-md"
              }`}
            >
              {/* Icon Hex Background */}
              <div className="relative w-[64px] h-[76px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="76"
                  viewBox="0 0 64 76"
                  fill="none"
                  className="absolute inset-0"
                >
                  <path
                    d="M32 0L0 13V38C0 55.5 14.3269 69.7244 32 76C49.6731 69.7244 64 55.5 64 38V13L32 0Z"
                    className={darkMode ? "fill-[#00282D]" : "fill-[#F2F6F7]"}
                  />
                </svg>
                <div className="relative z-10 text-white text-xl">
                  {item.icons[0]}
                </div>
              </div>

              <p
                className={`font-medium text-base sm:text-lg ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {item.title}
              </p>
              <p
                className={`text-sm sm:text-base ${
                  darkMode ? "text-white" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowMagnifyzeworkStatic;
