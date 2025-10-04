import React from 'react';
import { Twitter, Twitch, Youtube, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitch className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            National Sports Championship Series © 2026 | BPA UX Design Competition Entry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


