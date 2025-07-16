import React from "react";
import AdvisoryProfile from "../components/advisory-profile/AdvisoryProfile";
import advisoryMembers from "../data/advisoryMembers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const AdvisoryPanel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AdvisoryProfile/>
      </main>
      <Footer />
    </div>
  );
};

export default AdvisoryPanel;
