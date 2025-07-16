import FaqSection from '@/components/Faq/FaqSection'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'

const Faq:React.FC = () => {
  return (
    <>
    <Header/>
     <main className="flex-grow">
    <FaqSection/>
    </main>
    <Footer/>
    </>
  );
}

export default Faq;