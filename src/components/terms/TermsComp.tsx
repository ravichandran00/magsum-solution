import React from "react";


const TermsComp: React.FC = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 gradient-text">Terms & Conditions</h1>
                    </div>
                    <div> 
                        <p className="text-lg text-gray-700">Welcome to Magsum Solutions Private Limited. By using our website, platforms (Proneurz, Magnifyze), or any related services, you agree to the following terms and conditions:</p>
                        <div className="mt-5 mb-5 terms-and-condition">

                        <h5 className="font-bold text-xl mt-25 mb-5">1. Acceptance of Terms</h5>
                        <p>By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions.</p>

                         <h5 className="font-bold text-xl mt-25 mb-5">2. Services Offereds</h5>
                        <p >Magsum Solutions offers:</p>
                        <ul className="list-disc pl-10">
                            <li>Business intelligence & analytics through <strong>Magnifyze</strong></li>
                            <li>Revenue-ready startups via <strong>Proneurz</strong></li>
                            <li>Virtual CXO and advisory services
We reserve the right to modify,<br/> discontinue, or enhance any service without prior notice.
</li>
                        </ul>

                         <h5 className="font-bold text-xl mt-25 mb-5">3. Eligibilitys</h5>
                        <p>You must be at least 18 years old and capable of entering into a binding contract under applicable laws.</p>

                         <h5 className="font-bold text-xl mt-25 mb-5">4. User Responsibilities</h5>
                        <p>You agree not to misuse the website, copy content, disrupt services, or violate intellectual property laws.</p> 

                        <h5 className="font-bold text-xl mt-25 mb-5">5. Intellectual Property</h5>
                        <p>All logos, content, and technology are owned by Magsum Solutions. Use without permission is prohibited.</p> 

                        <h5 className="font-bold text-xl mt-25 mb-5">6. Payment Terms</h5>
                        <p>If you subscribe to any of our paid services (e.g., Magnifyze plans or Proneurz startup purchases), all payments are subject to our invoicing and refund policies.</p> 

                        <h5 className="font-bold text-xl mt-25 mb-5">7. Advisory Panel Participation</h5>
                        <p>Business advisors listed on our platform agree to represent themselves truthfully and follow the non-disclosure terms applied to client interactions.</p> 

                        <h5 className="font-bold text-xl mt-25 mb-5">8. Termination</h5>
                        <p>We reserve the right to suspend or terminate services for violation of these terms.
</p> 
                        <h5 className="font-bold text-xl mt-25 mb-5">9. Governing Law</h5>
                        <p>These terms shall be governed by the laws of the Republic of India. Any disputes will be resolved in Mumbai jurisdiction.</p> 

                        <h5 className="font-bold text-xl mt-25 mb-5">10. Contact</h5>
                        <p>For queries or disputes:</p> 
                        <a href="mailto:info@magsumsolutions.com"> info@magsumsolutions.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default TermsComp;