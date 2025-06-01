import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent to solid header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Calendar className={`h-8 w-8 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>EventFinder</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className={`nav-link ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-400 transition`}>Home</a>
          <a href="#events" className={`nav-link ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-400 transition`}>Events</a>
          <a href="#contact" className={`nav-link ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-400 transition`}>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#" 
            className="text-blue-900 text-lg py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="#events" 
            className="text-blue-900 text-lg py-2 border-b border-gray-100"
            onClick={closeMenu}
          >
            Events
          </a>
          <a 
            href="#contact" 
            className="text-blue-900 text-lg py-2"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;