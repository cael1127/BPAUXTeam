import React from 'react';
import { ExternalLink, Star, Award, Globe, Video } from 'lucide-react';
import { sponsors, getAllSponsors, getSponsorsByTier } from '../../data/sponsors';

const SponsorsSection = () => {
  const allSponsors = getAllSponsors();

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly supported by industry leaders in gaming, technology, and entertainment.
          </p>
        </div>

        {/* Platinum Partners */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsors.tiers.title}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.tiers.sponsors.map((sponsor, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${sponsor.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{sponsor.logo}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{sponsor.name}</h4>
                <p className="text-purple-600 font-semibold mb-4">{sponsor.description}</p>
                <p className="text-gray-600 text-sm mb-6">{sponsor.category}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsors.gold.title}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.gold.sponsors.map((sponsor, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${sponsor.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{sponsor.logo}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{sponsor.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{sponsor.description}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Partners */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsors.silver.title}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.silver.sponsors.map((sponsor, index) => (
              <div key={index} className="group bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transform hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${sponsor.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-xl">{sponsor.logo}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{sponsor.name}</h4>
                <p className="text-gray-600 text-xs">{sponsor.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsors.media.title}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.media.sponsors.map((sponsor, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${sponsor.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{sponsor.logo}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{sponsor.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{sponsor.description}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  Visit Site
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h3>
            <p className="text-lg text-gray-600">Why our partners choose to work with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-gray-600">Access to our international audience of esports fans and gaming enthusiasts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Exposure</h4>
              <p className="text-gray-600">High-visibility placement across all our digital platforms and live events</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Brand Association</h4>
              <p className="text-gray-600">Align your brand with the pinnacle of competitive gaming excellence</p>
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-xl mb-8 text-white/90">
            Join industry leaders in supporting the future of esports
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300">
              Download Partnership Kit
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
