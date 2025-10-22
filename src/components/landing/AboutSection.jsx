import React from 'react';
import { Trophy, Users, DollarSign, Calendar, MapPin, Target, Zap, Star } from 'lucide-react';
import { getTotalPrizePool, getTotalTeams } from '../../data/games';

const AboutSection = () => {
  const totalPrizePool = getTotalPrizePool();
  const totalTeams = getTotalTeams();

  const stats = [
    {
      icon: Trophy,
      value: '$1M+',
      label: 'Prize Pool',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      value: totalTeams.toString(),
      label: 'Competing Teams',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      value: '5',
      label: 'Days of Action',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      value: '3',
      label: 'Featured Games',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'World-Class Competition',
      description: 'Featuring the best esports teams from around the globe competing for the ultimate championship title.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'State-of-the-art venue with professional-grade equipment and high-speed internet for optimal gameplay.'
    },
    {
      icon: Star,
      title: 'Unforgettable Experience',
      description: 'Immersive fan experience with meet & greets, exclusive merchandise, and behind-the-scenes access.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Ultimate <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Esports Championship</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in Nashville for the most prestigious esports event of 2026, featuring the world's top teams competing across three major titles for a share of over $1 million in prizes.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To showcase the pinnacle of competitive gaming while bringing together the global esports community for an unforgettable celebration of skill, strategy, and sportsmanship. We're committed to elevating esports to new heights and providing players and fans with the ultimate championship experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white rounded-full shadow-sm">
                <span className="text-purple-600 font-semibold">Professional Standards</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-sm">
                <span className="text-pink-600 font-semibold">Global Community</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-sm">
                <span className="text-blue-600 font-semibold">Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Nashville */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Nashville?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Music City provides the perfect backdrop for this historic esports championship. With its world-class convention facilities, vibrant entertainment scene, and central location, Nashville offers an unparalleled experience for competitors and fans alike.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  State-of-the-art Music City Center venue
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Central location with easy access from major cities
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Vibrant downtown with world-class dining and entertainment
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Excellent transportation and accommodation options
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-700">Nashville, Tennessee</p>
                  <p className="text-gray-600">Music City Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Championship Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
