import React from 'react';

const PrototypeSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">F. Prototype Plan (Tool & Deliverables)</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive prototyping strategy with specific tool recommendations, deliverable specifications, and asset licensing for BPA competition submission
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Tools</h2>
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Figma</h3>
                  <p className="text-gray-600 text-sm">
                    Primary choice for collaborative design, prototyping, and design system management. 
                    Excellent for creating interactive prototypes with auto-layout and component libraries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">XD</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adobe XD</h3>
                  <p className="text-gray-600 text-sm">
                    Strong alternative with excellent prototyping capabilities and integration with 
                    Adobe Creative Cloud. Good for motion design and micro-interactions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Moqups</h3>
                  <p className="text-gray-600 text-sm">
                    Lightweight option for quick wireframing and basic prototyping. 
                    Good for early-stage concept validation and stakeholder feedback.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Wondershare Mockitt</h3>
                  <p className="text-gray-600 text-sm">
                    Professional prototyping tool with advanced animation capabilities. 
                    Excellent for creating high-fidelity interactive prototypes with realistic transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Deliverables</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-semibold text-gray-900 mb-2">Interactive Prototype</h3>
                <p className="text-gray-600 text-sm">
                  Clickable prototype demonstrating all key user flows for both desktop and mobile
                </p>
                <p className="text-xs text-purple-600 mt-1">Format: Figma Prototype Link</p>
              </div>
              
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-semibold text-gray-900 mb-2">Design System Documentation</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive style guide with color palette, typography, components, and usage guidelines
                </p>
                <p className="text-xs text-blue-600 mt-1">Format: Figma Design Library</p>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-semibold text-gray-900 mb-2">PNG Artboards</h3>
                <p className="text-gray-600 text-sm">
                  High-resolution screenshots of all key screens for presentation and documentation
                </p>
                <p className="text-xs text-green-600 mt-1">Format: PNG files (1920x1080, 375x667)</p>
              </div>
              
              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-semibold text-gray-900 mb-2">Works Cited</h3>
                <p className="text-gray-600 text-sm">
                  Complete documentation of all assets, icons, and references used in the design
                </p>
                <p className="text-xs text-yellow-600 mt-1">Format: PDF Document</p>
              </div>
              
              <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-semibold text-gray-900 mb-2">Social Media Artboards</h3>
                <p className="text-gray-600 text-sm">
                  Twitch/YouTube Gaming banners, post layouts, and promotional content
                </p>
                <p className="text-xs text-indigo-600 mt-1">Format: PNG files (1920x1080, 1280x720)</p>
              </div>
              
              <div className="p-4 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-semibold text-gray-900 mb-2">Mobile App Screens</h3>
                <p className="text-gray-600 text-sm">
                  All 5+ mobile screens: Live Scores, Player Stats, Match Replays, Bracket Updates, Community Chat
                </p>
                <p className="text-xs text-pink-600 mt-1">Format: PNG files (375x667, 414x896)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Asset Licensing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Icons</h3>
              <p className="text-gray-600 text-sm">
                Lucide React Icons - MIT License<br />
                Custom icons created in Figma - Original work
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Images</h3>
              <p className="text-gray-600 text-sm">
                Placeholder images from placehold.co - Free for commercial use<br />
                Tournament venue photos - Licensed from Getty Images
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Typography</h3>
              <p className="text-gray-600 text-sm">
                Inter Font - Open Font License (OFL)<br />
                Available via Google Fonts
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Code</h3>
              <p className="text-gray-600 text-sm">
                React framework - MIT License<br />
                Tailwind CSS - MIT License
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeSection;


