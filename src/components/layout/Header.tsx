
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from '../../assets/MAGSUM_LOGO.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-white/90 dark:bg-magsum-dark/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 py-3 md:px-4 flex justify-between items-center">
       <Link to="/">
       <img src={logo} alt="Logo" width={150} height={150} /></Link>
        {/* <Link to="/" className="flex items-center">
          <span className="font-cal font-bold text-xl md:text-2xl text-magsum-purple">
            Magsum
            <span className="text-magsum-purple">Solutions</span>
          </span>
        </Link> */}
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/"
            className={`font-medium transition-colors hover:text-magsum-purple 
            ${location.pathname === '/' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className={`font-medium transition-colors hover:text-magsum-purple 
            ${location.pathname === '/about' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            About Us
          </Link>
          <Link 
            to="/magnifyze"
            className={`font-medium transition-colors hover:text-magsum-purple 
            ${location.pathname === '/magnifyze' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Magnifyze
          </Link>
          <Link 
            to="/proneurz"
            className={`font-medium transition-colors hover:text-magsum-purple 
            ${location.pathname === '/proneurz' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Proneurz
          </Link>
          <Link 
            to="/virtual-cxo"
            className={`font-medium transition-colors hover:text-magsum-purple 
            ${location.pathname === '/virtual-cxo' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Virtual CXO
          </Link>
          <Link 
            to="/contact"
            className={`font-medium transition-colors hover:text-magsum-purple 
            ${location.pathname === '/contact' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Contact
          </Link>
          <Button variant="default" className="ml-2 bg-magsum-purple hover:bg-magsum-purple/90">
            <Link to="/contact">Book Consultation</Link>
          </Button>
           <Button variant="default" className="ml-2 bg-magsum-purple hover:bg-magsum-purple/90" onClick={() => setShowModal(true)}>
         Apply as an Advisor
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-magsum-purple"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-magsum-dark shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800
              ${location.pathname === '/' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800
              ${location.pathname === '/about' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
            >
              About Us
            </Link>
            <Link 
              to="/magnifyze" 
              onClick={closeMenu}
              className={`px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800
              ${location.pathname === '/magnifyze' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Magnifyze
            </Link>
              <Link 
            to="/proneurz"
             onClick={closeMenu}
            className={`px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 
            ${location.pathname === '/proneurz' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Proneurz
          </Link>
          <Link 
            to="/virtual-cxo"
             onClick={closeMenu}
            className={`px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 
            ${location.pathname === '/virtual-cxo' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Virtual CXO
          </Link>
          <Link 
            to="/contact"
             onClick={closeMenu}
            className={`px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 
            ${location.pathname === '/contact' ? 'text-magsum-purple' : 'text-gray-700 dark:text-gray-300'}`}
          >
            Contact
          </Link>
            <div className="px-6 py-3">
              <Button variant="default" className="w-full bg-magsum-purple hover:bg-magsum-purple/90">
                <Link to="/contact" onClick={closeMenu}>Book Consultation</Link>
              </Button>              
            </div>
             <div className="px-6 py-3">
              <Button variant="default" className="w-full bg-magsum-purple hover:bg-magsum-purple/90" onClick={() => setShowModal(true)}>
               Apply as an Advisor
              </Button>
              
            </div>
          </nav>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 ">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative mx-1">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">Become an Advisor</h2>
            <p className="text-gray-600 mb-4">
              We’re excited to hear from you! Fill out your details and let’s explore how you can contribute your expertise to our team.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-magsum-purple text-white px-4 py-2 rounded hover:bg-magsum-purple/90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
