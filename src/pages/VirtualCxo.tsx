import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import VirtualCTA from "@/components/virtual-cxo/VirtualCTA";
import VirtualCxoHero from "@/components/virtual-cxo/VirtualCxoHero";
import VirtualService from "@/components/virtual-cxo/VirtualService";
import VirtualWho from "@/components/virtual-cxo/VirtualWho";
import VirtualWhyChoose from "@/components/virtual-cxo/VirtualWhyChoose";
import React from "react";

const VirtualCxo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <VirtualCxoHero />
        <VirtualService/>
        <VirtualWhyChoose/>
        <VirtualWho/>

        <VirtualCTA/>
      </main>
      <Footer />
    </div>
  );
};

export default VirtualCxo;
