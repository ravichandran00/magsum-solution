import React from "react";
import TermsComp from "@/components/terms/TermsComp";
import CtaSection from "@/components/home/CtaSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
      <TermsComp/>
      <CtaSection/>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
