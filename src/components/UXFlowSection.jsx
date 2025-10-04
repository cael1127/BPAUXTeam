import React from 'react';
import { ChevronRight, Zap, Star } from 'lucide-react';

const UXFlowSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">D. UI/UX Flow for Web and Mobile</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive user journeys with detailed transitions, animations, and feedback systems for both desktop and mobile platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Desktop User Flow</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Homepage</h3>
                  <p className="text-gray-600">Hero section with upcoming matches, featured teams, and quick access to live stream</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tournament Info</h3>
                  <p className="text-gray-600">Detailed schedule, venue information, and game-specific rules</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Live Stream</h3>
                  <p className="text-gray-600">Embedded player with real-time chat, match statistics overlay</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ticket Purchase</h3>
                  <p className="text-gray-600">Secure checkout with seat selection, multiple payment options</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile User Flow</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bottom Navigation</h3>
                  <p className="text-gray-600">Five-tab navigation for core features with active state indicators</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Push Notifications</h3>
                  <p className="text-gray-600">Real-time alerts for match starts, results, and breaking news</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Offline Mode</h3>
                  <p className="text-gray-600">Cached content for stats, brackets, and team info when offline</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gesture Navigation</h3>
                  <p className="text-gray-600">Swipe gestures for quick navigation between related screens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed User Journey Maps */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detailed User Journey Maps</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Casual Fan Journey</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                  <span className="text-sm">Discovers event via social media</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                  <span className="text-sm">Visits landing page for event info</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                  <span className="text-sm">Downloads mobile app for updates</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                  <span className="text-sm">Engages with live chat during matches</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitive Player Journey</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                  <span className="text-sm">Registers for tournament</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                  <span className="text-sm">Studies opponent statistics</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                  <span className="text-sm">Tracks bracket progression</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                  <span className="text-sm">Reviews match replays</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transitions & Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Micro-interactions</h3>
              <p className="text-gray-600 text-sm">Button hover states, loading indicators, and success feedback</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• 0.2s ease-in-out transitions</li>
                <li>• Scale transforms on hover</li>
                <li>• Color state changes</li>
              </ul>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Page Transitions</h3>
              <p className="text-gray-600 text-sm">Smooth slide animations between screens with directional cues</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Slide-in from right (0.3s)</li>
                <li>• Fade transitions for modals</li>
                <li>• Staggered content loading</li>
              </ul>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Feedback Systems</h3>
              <p className="text-gray-600 text-sm">Toast notifications, error states, and confirmation dialogs</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• Toast: 3s auto-dismiss</li>
                <li>• Error: Red with shake animation</li>
                <li>• Success: Green with checkmark</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXFlowSection;


