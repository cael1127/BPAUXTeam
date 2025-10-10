import React from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navigationItems = ['Branding', 'Personas', 'Architecture', 'UX Flow', 'Accessibility', 'Prototype', 'Presentation', 'Enhancements'];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 hover-glow">
                <Gamepad2 className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                NSCS
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase().replace(' ', ''))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                    activeSection === item.toLowerCase().replace(' ', '') 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {activeSection !== item.toLowerCase().replace(' ', '') && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 focus:outline-none transform hover:scale-110"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden animate-slide-in-left">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 bg-opacity-95 backdrop-blur-sm">
            {navigationItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase().replace(' ', ''));
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 transform hover:scale-105 hover:translate-x-2 animate-fade-in ${
                  activeSection === item.toLowerCase().replace(' ', '') 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;


