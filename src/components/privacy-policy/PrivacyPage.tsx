import React from "react";

const PrivacyPage: React.FC = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy</h1>
                    </div>
                    <div>
                        <p className="text-lg text-gray-700">Magsum Solutions Private Limited values your privacy. This policy explains how we collect, use, and protect your data.
                        </p>
                        <div className="mt-5 mb-5 terms-and-condition">

                            <h5 className="font-bold text-xl mt-25 mb-5">1. Information We Collect</h5>
                            <ul className="list-disc pl-10">
                                <li>Personal data (name, email, phone) during form submissions</li>
                                <li>Business information during consultations or onboarding  </li>
                                <li>Website usage data via analytics tools </li>
                            </ul>

                            <h5 className="font-bold text-xl mt-25 mb-5">2. How We Use Information</h5>
                            <ul className="list-disc pl-10">
                                <li>To provide and improve our services</li>
                                <li>To communicate with you about inquiries, offers, or updates</li>
                                <li>To personalize user experience </li>
                            </ul>

                            <h5 className="font-bold text-xl mt-25 mb-5">3. Data Sharing</h5>
                            <p>We do not sell or rent your data. We may share your information only:</p>
                             <ul className="list-disc pl-10">
                                <li>With trusted service partners under confidentiality</li>
                                <li>When legally required (e.g., court orders)</li>
                              </ul>

                            <h5 className="font-bold text-xl mt-25 mb-5">4. Cookies</h5>
                            <p>We use cookies for website functionality, analytics, and improving user experience. You can manage or disable cookies in your browser settings.</p>

                            <h5 className="font-bold text-xl mt-25 mb-5">5. Third-Party Links</h5>
                            <p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>

                            <h5 className="font-bold text-xl mt-25 mb-5">6. Data Security</h5>
                            <p>We follow industry-standard practices to protect your data from unauthorized access or misuse.</p>

                            <h5 className="font-bold text-xl mt-25 mb-5">7. Your Rights</h5>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-10">
                                <li>Request access or correction of your data</li>
                                <li>Opt out of communication</li>
                                <li>Request deletion of your data (where applicable)</li>
                            </ul>

                            <h5 className="font-bold text-xl mt-25 mb-5">8. Updates to This Policy</h5>
                            <p>We may update this policy from time to time. The latest version will always be published on our website.  
                            </p>
                        
                            <h5 className="font-bold text-xl mt-25 mb-5">9. Contact</h5>
                            <p>For data privacy inquiries:</p>
                            <a href="mailto:privacy@magsumsolutions.com">privacy@magsumsolutions.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPage;