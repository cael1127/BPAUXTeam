import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Users, Eye, MessageCircle, Share2, Heart, Settings } from 'lucide-react';

const LivestreamsSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [viewerCount, setViewerCount] = useState(45678);

  const streams = [
    {
      id: 1,
      title: 'Main Stage - Valorant Championship',
      game: 'Valorant',
      viewers: 28456,
      status: 'live',
      thumbnail: '🎯',
      description: 'Team Phoenix vs Velocity Esports - Grand Finals'
    },
    {
      id: 2,
      title: 'Stage 2 - Rocket League Semifinals',
      game: 'Rocket League',
      viewers: 12345,
      status: 'live',
      thumbnail: '🚗',
      description: 'Aerial Assassins vs Velocity Vipers'
    },
    {
      id: 3,
      title: 'Player POV - Elite Warriors',
      game: 'Super Smash Bros',
      viewers: 8765,
      status: 'live',
      thumbnail: '🥊',
      description: 'Elite Warriors vs Combo Kings - Player Perspective'
    },
    {
      id: 4,
      title: 'Commentary Desk',
      game: 'Analysis',
      viewers: 5432,
      status: 'live',
      thumbnail: '🎤',
      description: 'Expert analysis and match breakdowns'
    }
  ];

  const upcomingStreams = [
    {
      time: '2:00 PM',
      match: 'Shadow Strike vs Nexus Gaming',
      game: 'Valorant',
      stage: 'Main Stage'
    },
    {
      time: '4:00 PM',
      match: 'Gravity Defiers vs Sonic Strikers',
      game: 'Rocket League',
      stage: 'Stage 2'
    },
    {
      time: '6:00 PM',
      match: 'Tech Masters vs Spike Squad',
      game: 'Super Smash Bros',
      stage: 'Main Stage'
    }
  ];

  return (
    <section id="livestreams" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Watch <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">Live</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the championship in real-time with multiple viewing options and interactive features.
          </p>
        </div>

        {/* Main Stream Player */}
        <div className="mb-16">
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
            {/* Stream Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold">LIVE</span>
                <span className="text-white/80 ml-4">Main Stage - Valorant Championship</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-white/80">
                  <Eye className="w-4 h-4 mr-1" />
                  {viewerCount.toLocaleString()}
                </div>
                <button className="text-white/80 hover:text-white">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Mockup */}
            <div className="relative aspect-video bg-gradient-to-br from-purple-800 to-pink-800 flex items-center justify-center group">
              {/* Video Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute bottom-8 right-6 w-1 h-1 bg-white rounded-full"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  ) : (
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" />
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Team Phoenix vs Velocity Esports</h3>
                <p className="text-white/80 text-sm sm:text-base">Valorant Championship - Grand Finals</p>
                
                {/* Live Indicator */}
                <div className="mt-4 inline-flex items-center px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE
                </div>
              </div>

              {/* Player Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    ) : (
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    )}
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Stream Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Streams</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streams.map((stream) => (
              <div key={stream.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-colors group">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                  <div className="text-4xl">{stream.thumbnail}</div>
                  <div className="absolute top-2 left-2 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-white text-xs font-semibold">LIVE</span>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center text-white/80 text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {stream.viewers.toLocaleString()}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-1 truncate">{stream.title}</h4>
                  <p className="text-gray-400 text-sm truncate">{stream.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stream Schedule */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Upcoming Streams</h3>
          <div className="space-y-4">
            {upcomingStreams.map((stream, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{stream.time}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{stream.match}</h4>
                    <p className="text-gray-300 text-sm">{stream.game} • {stream.stage}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Watch Party Locations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Watch Party Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Nashville Convention Center', location: 'Main Hall', capacity: '500+ fans' },
              { name: 'Broadway Gaming Lounge', location: 'Downtown Nashville', capacity: '200+ fans' },
              { name: 'Music City Esports Arena', location: 'East Nashville', capacity: '300+ fans' }
            ].map((location, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-2">{location.name}</h4>
                <p className="text-gray-300 text-sm mb-2">{location.location}</p>
                <p className="text-purple-400 font-medium">{location.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivestreamsSection;
