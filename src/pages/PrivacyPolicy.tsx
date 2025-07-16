import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Privacy from "@/components/privacy-policy/PrivacyPage";


const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
      <Privacy/>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;