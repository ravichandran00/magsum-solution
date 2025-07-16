import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaSearch, FaTimes } from 'react-icons/fa';

// Define question structure
type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  category: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    title: 'Startup',
    category: 'startup',
    items: [
      {
        question: 'What support does Magnifyze offer for early-stage startups?',
        answer:
          'Magnifyze provides strategic guidance, product-market fit validation, MVP development, and mentorship access tailored for startups in their ideation and early growth phases.',
      },
      {
        question: 'Can I get help with pitching to investors?',
        answer:
          'Yes, startup founders can access pitch deck reviews, investor matchmaking, and fundraising strategy sessions via CXO service bookings or through Magnifyze’s advisory partners.',
      },
      {
        question: ' Is there a community or network I can join as a founder?',
        answer:
          ' Absolutely. Magnifyze supports a founder’s network where you can collaborate, share resources, and connect with peers and mentors.',
      },
    ],
  },
  {
    title: 'Magnifyze',
    category: 'magnifyze',
    items: [
      {
        question: 'What is Magnifyze and who is it for?',
        answer:
          'Magnifyze is a startup growth and service platform designed to accelerate early to mid-stage businesses with resources like consulting, development, marketing, and advisory services.',
      },
      {
        question: "Can I track the services I've booked through Magnifyze?",
        answer:
          'Yes, the platform offers a personalized dashboard where you can track booked services, appointments, payment status, and progress updates.',
      },
      {
        question: 'What kind of services are listed under Magnifyze?',
        answer:
          'Services include product development, business strategy, branding, legal advisory, funding prep, and more — curated specifically for founders and SMBs.',
      },
    ],
  },
  {
    title: 'CXO Services',
    category: 'cxo',
    items: [
      {
        question: 'What does "CXO service booking" mean?',
        answer:
          'It refers to booking on-demand strategic sessions with experienced CXOs (like CMO, CTO, CFO, etc.) for expert advice on scaling, fundraising, tech direction, and operations.',
      },
      {
        question: ' How do I book a CXO session?',
        answer:
          ' You can browse available professionals on the CXO marketplace section, view their profiles and expertise, and book a session via Magnifyze or directly through Proneurz (if integrated).',
      },
       {
        question: 'Are the CXO consultants vetted?',
        answer:
          'Yes, all CXO partners undergo a rigorous vetting process to ensure credibility, experience, and alignment with startup needs.',
      },
    ],
  },
  {
    title: 'Proneurz',
    category: 'proneurz',
    items: [
      {
        question: ' What is Proneurz?',
        answer:
          'Proneurz is a marketplace for entrepreneurs to buy and sell businesses, connect with partners, or explore startup acquisition opportunities.',
      },
      {
        question: ' Can I list my startup for sale on Proneurz?',
        answer:
          'Yes, after registration and verification, you can list your startup, including key business metrics, pitch decks, and asking price.',
      },
       {
        question: 'How does Proneurz ensure safe transactions?',
        answer:
          'Proneurz offers escrow services, business vetting, legal documentation support, and advisor matchmaking to ensure transparency and trust in deals.',
      },
      {
        question: 'Who can buy businesses on Proneurz?',
        answer:
          'Investors, acquirers, or entrepreneurs looking to expand their portfolio or enter new markets can explore listings on the platform.',
      },
    ],
  },
];

const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeItems, setActiveItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const categories = ['all', 'startup', 'magnifyze', 'cxo', 'proneurz'];

  const handleToggle = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setActiveItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredData = faqData
    .filter((section) => activeCategory === 'all' || section.category === activeCategory)
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        const lowerQuery = searchQuery.toLowerCase();
        return (
          item.question.toLowerCase().includes(lowerQuery) ||
          item.answer.toLowerCase().includes(lowerQuery)
        );
      }),
    }))
    .filter((section) => section.items.length > 0);

  return (
     <section className="pt-32 pb-20 md:pt-40 md:pb-10 relative overflow-hidden">
            <div className="container mx-auto px-4">
    <div className="faq-container max-w-4xl mx-auto p-6 text-gray-800">
      {/* Header */}
      <div className="faq-header mb-6">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600">
          Find answers to common questions about our products and services
        </p>

        {/* Search */}
        <div className="search-container my-4 relative">
          <div className="search-box flex items-center border px-3 py-2 rounded-md shadow-sm">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="ml-2 text-gray-400 hover:text-red-500"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-btn px-4 py-2 rounded-full text-sm border ${
                activeCategory === cat
                  ? 'bg-magsum-purple text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-content space-y-6">
        {filteredData.map((section) => (
          <div key={section.category} className="faq-category">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {section.items.map((item, index) => {
              const key = `${section.category}-${index}`;
              const isActive = activeItems[key] || false;

              return (
                <div key={key} className="faq-item border-b py-3">
                  <div
                    className="faq-question flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(section.category, index)}
                  >
                    <h3 className="font-medium">{item.question}</h3>
                    <span className="faq-icon text-black-600 ">
                      {isActive ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>

                  {isActive && (
                    <div className="faq-answer mt-2 text-gray-700">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-center text-gray-500">No matching questions found.</p>
        )}
      </div>
    </div>
    </div>
    </section>
  );
};

export default FaqSection;
