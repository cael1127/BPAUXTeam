import React from 'react';
import { MapPin, Phone, Mail, Twitter, Instagram, Youtube, Twitch, MessageCircle } from 'lucide-react';

const Footer = () => {
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
  };

  const quickLinks = [
    { name: 'Games', id: 'games' },
    { name: 'Teams', id: 'rosters' },
    { name: 'Watch Live', id: 'livestreams' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Tickets', id: 'ticketing' },
    { name: 'Venue', id: 'venue' },
    { name: 'Mobile App', id: 'mobile-app' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitch, href: '#', label: 'Twitch' },
    { icon: MessageCircle, href: '#', label: 'Discord' }
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <img 
                    src="/logos/UXLogo.png" 
                    alt="NSCS Logo" 
                    className="h-10 w-auto mr-3"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    NSCS 2026
                  </span>
                </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The ultimate esports championship featuring the world's best teams in Valorant, Rocket League, and Super Smash Bros Ultimate.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Event Information</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                Nashville, TN
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 text-purple-400">📅</span>
                May 6-10, 2026
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 text-purple-400">🎮</span>
                3 Featured Games
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 text-purple-400">👥</span>
                52 Competing Teams
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 text-purple-400">💰</span>
                $1M+ Prize Pool
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                (615) 555-1400
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                info@nscs2026.com
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 text-purple-400">🌐</span>
                nscs2026.com
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-r-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300">
                    Subscribe
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2026 National Esports Championship Series. All rights reserved.</p>
              <p className="mt-1">BPA UX Design Competition Entry - User Experience Design Team</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


