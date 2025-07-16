import React from 'react';
import '../pricing/Pricingtable.css'

const PricingTable: React.FC = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-10 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w mx-auto">
                    <div className="container">
                        <div className="text-center py-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Prestige Pricing</h1>
                            <p className="text-lg text-text-light mb-8">Choose the perfect plan for your needs</p>
                        </div>

                        <div className="pricing-cards">

                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <div className="card-content">
                                            <div className="card-header">
                                                <h2>Basic</h2>
                                                <div className="price">$2,000 <span className="currency">/</span><span className="period">mo</span></div>
                                            </div>
                                            <ul className="features">
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">5 Projects</span>
                                                        <span className="feature-description">Perfect for small teams</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">10GB Storage</span>
                                                        <span className="feature-description">Enough for basic needs</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Basic Support</span>
                                                        <span className="feature-description">Email support within 24h</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Email Notifications</span>
                                                        <span className="feature-description">Stay updated with alerts</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <button className="select-plan">Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="card-content">
                                            <h3>Basic Growth Package</h3>
                                            <p>Ideal for small businesses and startup projects</p>
                                            <button className="select-plan">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="popular-badge">Most Popular</div>
                                <div className="card-inner">
                                    <div className="card-front">
                                        <div className="card-content">
                                            <div className="card-header">
                                                <h2>Pro</h2>
                                                <div className="price">$3,500 <span className="currency">/</span><span className="period">mo</span></div>
                                            </div>
                                            <ul className="features">
                                                <li className="featured">
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">20 Projects</span>
                                                        <span className="feature-description">Perfect for growing teams</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">50GB Storage</span>
                                                        <span className="feature-description">Advanced storage solutions</span>
                                                    </div>
                                                </li>
                                                <li className="featured">
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Priority Support</span>
                                                        <span className="feature-description">24/7 dedicated support</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Advanced Analytics</span>
                                                        <span className="feature-description">Detailed insights and reports</span>
                                                    </div>
                                                </li>
                                                <li className="featured">
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">API Access</span>
                                                        <span className="feature-description">Full API integration</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <button className="select-plan">Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="card-content">
                                            <h3>Advanced Strategy Suite</h3>
                                            <p>Professional solutions for growing businesses</p>
                                            <button className="select-plan">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <div className="card-content">
                                            <div className="card-header">
                                                <h2>Enterprise</h2>
                                                <div className="price">$5,000 <span className="currency">/</span><span className="period">mo</span></div>
                                            </div>
                                            <ul className="features">
                                                <li className="featured">
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Unlimited Projects</span>
                                                        <span className="feature-description">Scale without limits</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">200GB Storage</span>
                                                        <span className="feature-description">Enterprise-grade storage</span>
                                                    </div>
                                                </li>
                                                <li className="featured">
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">24/7 Support</span>
                                                        <span className="feature-description">Dedicated support team</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Custom Integrations</span>
                                                        <span className="feature-description">Tailored to your needs</span>
                                                    </div>
                                                </li>
                                                <li className="featured">
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Advanced Security</span>
                                                        <span className="feature-description">Enterprise-grade protection</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="feature-icon">✓</span>
                                                    <div className="feature-content">
                                                        <span className="feature-title">Custom Training</span>
                                                        <span className="feature-description">Team onboarding included</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <button className="select-plan">Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="card-content">
                                            <h3>Enterprise CXO Support</h3>
                                            <p>Custom solutions for large organizations</p>
                                            <button className="select-plan">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingTable;