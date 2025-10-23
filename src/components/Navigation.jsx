import React from 'react';
import { Gamepad2, Menu, X, Ticket, Play, Users } from 'lucide-react';

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigationItems = [
    { name: 'Games', id: 'games' },
    { name: 'Teams', id: 'rosters' },
    { name: 'Watch Live', id: 'livestreams' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Tickets', id: 'ticketing' },
    { name: 'Venue', id: 'venue' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      // Scroll to the very top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-gray-900 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex-shrink-0 flex items-center group cursor-pointer"
            >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 hover-glow">
                  <Gamepad2 className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                  NSCS
                </span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden group text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('livestreams')}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch
            </button>
                <button
                  onClick={() => scrollToSection('ticketing')}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 flex items-center"
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  Tickets
                </button>
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
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 transform hover:scale-105 hover:translate-x-2 animate-fade-in text-gray-300 hover:bg-gray-700 hover:text-white"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </button>
            ))}
                <div className="pt-4 border-t border-gray-700">
                  <button
                    onClick={() => scrollToSection('ticketing')}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center mb-2"
                  >
                    <Ticket className="w-4 h-4 mr-2" />
                    Buy Tickets
                  </button>
              <button
                onClick={() => scrollToSection('livestreams')}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Live
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;


