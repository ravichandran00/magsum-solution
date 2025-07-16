
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-cal text-xl font-bold mb-4 text-magsum-purple">Magsum</h3>
            <p className="text-gray-300 mb-4">Making business success achievable and scalable for entrepreneurs worldwide.</p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/magnifyze" className="text-gray-300 hover:text-white transition-colors">Magnifyze</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/magnifyze" className="text-gray-300 hover:text-white transition-colors">Magnifyze</Link></li>
              <li><Link to="/proneurz" className="text-gray-300 hover:text-white transition-colors">Proneurz</Link></li>
              <li><Link to="/virtual-cxo" className="text-gray-300 hover:text-white transition-colors">Virtual CXO</Link></li>
              <li><Link to="/magnifyze" className="text-gray-300 hover:text-white transition-colors">Strategy Consulting</Link></li>
               <li><Link to="/advisory-panel" className="text-gray-300 hover:text-white transition-colors">Advisory Panel</Link></li>
                 <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-gray-300">C59g, Bandra Kurla Complex, Bandra East,Mumbai, Maharashtra – 400051, India</p>
            <p className="text-gray-300 mt-2">hello@magsumsolutions.com</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-block bg-magsum-purple text-white px-4 py-2 rounded hover:bg-magsum-purple/90 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Magsum Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 w-full">
             <ul className="w-full flex justify-center space-between space-x-6">
                <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>                  
           </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
