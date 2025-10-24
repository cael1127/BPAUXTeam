import React from 'react';
import { Play, Trophy, Users, Clock, Zap, Target } from 'lucide-react';
import { games } from '../../data/games';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';

const GamesSection = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  const [gameRefs, visibleGames] = useStaggeredAnimation(games, 150);

  return (
    <section 
      id="games" 
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
      aria-labelledby="games-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 scroll-reveal ${isSectionVisible ? 'revealed' : ''}`}
        >
          <h2 
            id="games-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Games</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three of the most competitive esports titles will be showcased, featuring the world's best teams competing for championship glory.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16" role="list" aria-label="Featured games list">
          {games.map((game, index) => (
            <div 
              key={index} 
              className={`group relative scroll-reveal-stagger ${visibleGames.has(index) ? 'revealed' : ''}`}
              ref={el => gameRefs.current[index] = el}
              role="listitem"
              aria-label={`${game.name} game information`}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                {/* Game Header */}
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${game.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <div className="text-4xl sm:text-6xl mb-2 sm:mb-4" role="img" aria-label={`${game.name} game icon`}>{game.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{game.name}</h3>
                    <p className="text-white/90 text-xs sm:text-sm">{game.genre}</p>
                    {/* Icon indicator for colorblind accessibility */}
                    <div className="mt-2">
                      <span className="inline-block w-3 h-3 rounded-full border-2 border-white mr-2" aria-hidden="true"></span>
                      <span className="text-white/90 text-xs font-medium">{game.name}</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white font-bold text-lg">{game.prizePool}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white/90 text-sm">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {game.teams} Teams
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {game.duration}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{game.description}</p>
                  
                  {/* Game Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {game.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                            featureIndex === 0 ? 'bg-purple-500' : 
                            featureIndex === 1 ? 'bg-pink-400' : 'bg-pink-500'
                          }`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tournament Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Format</span>
                      <span className="text-sm text-gray-900">{game.format}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Developer</span>
                      <span className="text-sm text-gray-900">{game.developer}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium text-gray-500">Platforms</span>
                      <span className="text-sm text-gray-900">{game.platforms.join(', ')}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group btn-accessible"
                    aria-label={`Watch ${game.name} matches and highlights`}
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    Watch Matches
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tournament Overview */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tournament Overview</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each game features a unique tournament format designed to showcase the highest level of competitive play and ensure the most exciting matches for fans.
            </p>
          </div>

           <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center">
               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 flex items-center justify-center">
                 <Trophy className="w-8 h-8 text-white" />
               </div>
               <h4 className="text-xl font-bold text-gray-900 mb-2">Championship Format</h4>
               <p className="text-gray-600">Each game uses a specialized tournament format optimized for maximum excitement and fair competition.</p>
             </div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 flex items-center justify-center">
                 <Zap className="w-8 h-8 text-white" />
               </div>
               <h4 className="text-xl font-bold text-gray-900 mb-2">Live Spectating</h4>
               <p className="text-gray-600">Advanced spectator features provide multiple viewing angles and real-time statistics for each game.</p>
             </div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 flex items-center justify-center">
                 <Target className="w-8 h-8 text-white" />
               </div>
               <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Standards</h4>
               <p className="text-gray-600">All matches follow professional esports standards with certified referees and anti-cheat systems.</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
