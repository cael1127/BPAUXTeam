import React from 'react';
import { Trophy, Star, MapPin, Zap, Users, Target, Crown, Gamepad2 } from 'lucide-react';

const OptionalEnhancementsSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Optional Enhancements (Creativity Points)</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative features and concepts that demonstrate creativity and forward-thinking design for competitive advantage
          </p>
        </div>

        {/* Live Interactive Bracket Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Live Interactive Bracket Display</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Concept Overview</h3>
              <p className="text-gray-600 mb-4">
                A real-time, interactive tournament bracket that updates automatically as matches progress. 
                Users can zoom, pan, and click on matches for detailed information.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Real-time match updates with live scores</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Interactive zoom and pan functionality</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Prediction system with fan voting</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Mobile-optimized touch interactions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500 mb-4">Interactive Bracket Mockup</div>
              <div className="space-y-2">
                <div className="h-4 bg-purple-600 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-blue-600 rounded w-1/2 mx-auto"></div>
                <div className="h-4 bg-green-600 rounded w-2/3 mx-auto"></div>
                <div className="h-4 bg-yellow-600 rounded w-1/3 mx-auto"></div>
              </div>
              <p className="text-xs text-gray-500 mt-4">Visual representation of tournament progression</p>
            </div>
          </div>
        </div>

        {/* Gamified Fan Points System */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Gamified "Fan Points" System</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Features</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive points system that rewards fans for engagement, predictions, and social interaction 
                throughout the tournament experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Prediction Points</h4>
                  <p className="text-xs text-gray-600">Correct match predictions earn points</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Social Points</h4>
                  <p className="text-xs text-gray-600">Sharing and commenting activities</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Attendance Points</h4>
                  <p className="text-xs text-gray-600">Live event participation rewards</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Achievement Badges</h4>
                  <p className="text-xs text-gray-600">Special milestones and unlocks</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500 mb-4">Fan Points Dashboard</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm">Total Points</span>
                  <span className="font-bold text-purple-600">2,847</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm">Current Rank</span>
                  <span className="font-bold text-blue-600">#23</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm">Next Badge</span>
                  <span className="font-bold text-green-600">153 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Esports Arena Map View */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3D Esports Arena Map View</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Immersive Experience</h3>
              <p className="text-gray-600 mb-4">
                A 3D interactive map of the Nashville venue allowing spectators to explore seating, 
                amenities, and get real-time information about their surroundings.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>360° venue exploration with zoom controls</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Real-time seat availability and pricing</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>AR integration for mobile users</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Accessibility information for each section</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500 mb-4">3D Arena Visualization</div>
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full opacity-50"></div>
                </div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Interactive 3D venue with clickable sections</p>
            </div>
          </div>
        </div>

        {/* Additional Creative Features */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Additional Creative Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered Match Predictions</h3>
              <p className="text-sm opacity-90">Machine learning algorithms analyze player stats and historical data</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Content Feed</h3>
              <p className="text-sm opacity-90">Customized content based on favorite teams and games</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Virtual Meet & Greets</h3>
              <p className="text-sm opacity-90">Exclusive fan experiences with professional players</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalEnhancementsSection;
