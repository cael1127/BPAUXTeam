import React from 'react';
import { ChevronRight } from 'lucide-react';
import { mobileScreens } from '../data/mobileScreens';

const ArchitectureSection = ({ activeMobileScreen, setActiveMobileScreen }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">C. Information Architecture</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed wireframes, user flows, and information hierarchy for desktop and mobile experiences
          </p>
        </div>

        {/* Wireframes Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Desktop Wireframes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Landing Page Wireframe</h3>
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300">
                <div className="space-y-3">
                  <div className="h-8 bg-purple-600 rounded"></div>
                  <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-16 bg-gray-300 rounded"></div>
                    <div className="h-16 bg-gray-300 rounded"></div>
                    <div className="h-16 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Hero section, navigation, featured content, CTA buttons</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Live Stream Page Wireframe</h3>
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300">
                <div className="space-y-3">
                  <div className="h-32 bg-gray-400 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-blue-600 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-400 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-400 rounded w-1/4"></div>
                  </div>
                  <div className="h-24 bg-gray-300 rounded"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">Video player, controls, chat sidebar, match info</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Desktop Information Hierarchy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Navigation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Home</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Tournament Info</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Live Stream</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Tickets</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Teams</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Stats</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Secondary Content</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> News & Updates</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Venue Information</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> FAQ</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Contact</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Live Stream Integration</h4>
                  <p className="text-gray-600 text-sm">Embedded Twitch/YouTube player with real-time chat</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Interactive Bracket</h4>
                  <p className="text-gray-600 text-sm">Dynamic tournament bracket with match results and predictions</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Team Rosters</h4>
                  <p className="text-gray-600 text-sm">Detailed player profiles with stats and social links</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Ticket System</h4>
                  <p className="text-gray-600 text-sm">Secure purchase flow with seat selection and QR codes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mobile Information Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {mobileScreens.map((screen, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${index === 0 ? 'from-purple-100 to-pink-100' : 
                         index === 1 ? 'from-blue-100 to-cyan-100' :
                         index === 2 ? 'from-green-100 to-emerald-100' :
                         index === 3 ? 'from-yellow-100 to-orange-100' : 'from-red-100 to-pink-100'}
                         p-4 rounded-xl text-center cursor-pointer transition-transform hover:scale-105`}
                onClick={() => setActiveMobileScreen(index)}
              >
                <screen.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium text-gray-900">{screen.name}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              {mobileScreens[activeMobileScreen].name} Screen Details
            </h3>
            <div className="text-center">
              <div className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Mobile Screen Mockup</span>
              </div>
              <p className="text-gray-600">
                {activeMobileScreen === 0 && "Real-time scores with push notifications for match updates"}
                {activeMobileScreen === 1 && "Individual player statistics with performance analytics"}
                {activeMobileScreen === 2 && "On-demand match replays with highlight reels"}
                {activeMobileScreen === 3 && "Interactive tournament bracket with live updates"}
                {activeMobileScreen === 4 && "Community chat with team-specific channels and emoji reactions"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSection;


