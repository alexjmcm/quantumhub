import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Atom, BookOpen, Users, Menu as MenuIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <Atom className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-white font-bold text-xl">QuantumHub</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/#learn" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Learn
                </Link>
                <Link to="/#code" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <Code className="w-4 h-4 mr-1" />
                  Code
                </Link>
                <Link to="/#community" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Community
                </Link>
                <Link to="/#tools" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <MenuIcon className="w-4 h-4 mr-1" />
                  Tools
                </Link>
                <Link to="/playground" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <Code className="w-4 h-4 mr-1" />
                  Playground
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                to="/get-started"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/#learn"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Learn
            </Link>
            <Link
              to="/#code"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <Code className="w-5 h-5 mr-2" />
              Code
            </Link>
            <Link
              to="/#community"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Community
            </Link>
            <Link
              to="/#tools"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <MenuIcon className="w-5 h-5 mr-2" />
              Tools
            </Link>
            <Link
              to="/playground"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <Code className="w-5 h-5 mr-2" />
              Playground
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <Link
                to="/get-started"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;