
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from '@/components/ui/section-title';

const faqItems = [
  {
    question: "What makes Magsum Solutions different from other consulting firms?",
    answer: "Magsum Solutions combines data-driven strategy with expert execution, offering a subscription-based model that makes premium business consulting accessible and flexible. We focus on tangible outcomes with our structured frameworks that eliminate guesswork and accelerate business growth."
  },
  {
    question: "How does the subscription model work?",
    answer: "Our subscription plans are designed to fit different business stages and needs. Each plan includes a set of core services with varying intensity and scope. You can start with a basic plan and upgrade as your business grows, ensuring you only pay for what you need at each stage of your journey."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with a wide range of businesses, from early-stage startups to established SMEs across various industries including Manufacturing, Retail, Healthcare, Financial Services, Technology, and Education. Our approach is customizable to suit the specific dynamics of your industry."
  },
  {
    question: "What is a Virtual CXO and how can it benefit my business?",
    answer: "Our Virtual CXO service provides you with experienced C-level expertise (CFO, CTO, CMO, etc.) without the cost of hiring a full-time executive. These experts work with your team on a part-time basis, bringing strategic leadership and specialized knowledge to help your business overcome challenges and seize opportunities."
  },
  {
    question: "How long does it typically take to see results?",
    answer: "While every business is unique, our clients typically start seeing initial improvements within 30-60 days of working with us. Significant transformational results often emerge within 3-6 months as our strategies and implementations take hold. We establish clear metrics and milestones from the start to track progress."
  }
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Frequently Asked Questions"
          title="Common Questions"
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
