import React, { useState } from 'react';
import { Search, Filter, Trophy, Users, MapPin, Star, ChevronDown } from 'lucide-react';
import { teams, getTeamsByGame, getAllTeams } from '../../data/teams';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';

const RostersSection = () => {
  const [selectedGame, setSelectedGame] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const games = [
    { id: 'all', name: 'All Games', icon: '🎮' },
    { id: 'valorant', name: 'Valorant', icon: '🎯' },
    { id: 'rocketleague', name: 'Rocket League', icon: '🚗' },
    { id: 'smashbros', name: 'Super Smash Bros', icon: '🥊' }
  ];

  const getFilteredTeams = () => {
    let filteredTeams = selectedGame === 'all' ? getAllTeams() : getTeamsByGame(selectedGame);
    
    if (searchTerm) {
      filteredTeams = filteredTeams.filter(team => 
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.players.some(player => player.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filteredTeams;
  };

  const filteredTeams = getFilteredTeams();

  // Scroll animation hooks
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  const [teamsRefs, visibleTeams] = useStaggeredAnimation(filteredTeams, 100);

  return (
    <section id="rosters" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 scroll-reveal ${isSectionVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Competing <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the world's best esports teams competing for championship glory across three major titles.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search teams, players, or regions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Game Filter */}
            <div className="flex gap-2">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    selectedGame === game.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{game.icon}</span>
                  {game.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {filteredTeams.map((team, index) => (
            <div 
              key={team.id} 
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 scroll-reveal-stagger ${visibleTeams.has(index) ? 'revealed' : ''}`}
              ref={el => teamsRefs.current[index] = el}
            >
              {/* Team Header */}
              <div className={`h-28 sm:h-32 bg-gradient-to-r ${team.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{team.logo}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{team.name}</h3>
                  <div className="flex items-center text-white/90 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {team.region}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white font-bold text-sm">{team.prizeMoney}</span>
                  </div>
                </div>
              </div>

              {/* Team Content */}
              <div className="p-4 sm:p-6">
                {/* Players */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-pink-500" />
                    Players
                  </h4>
                  <div className="space-y-1">
                    {team.players.map((player, playerIndex) => (
                      <div key={playerIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                        {player}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                    Achievements
                  </h4>
                  <div className="space-y-1">
                    {team.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="text-sm text-gray-600 flex items-center">
                        <Star className="w-3 h-3 text-yellow-500 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Team Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                  View Team Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Teams Carousel */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Teams</h3>
            <p className="text-lg text-gray-600">Top-performing teams to watch this championship</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Team Phoenix', game: 'Valorant', achievement: '2025 VCT Masters Winner', color: 'from-red-500 via-orange-500 to-yellow-500' },
              { name: 'Aerial Assassins', game: 'Rocket League', achievement: '2025 RLCS World Champion', color: 'from-blue-500 via-cyan-500 to-teal-500' },
              { name: 'Elite Warriors', game: 'Super Smash Bros', achievement: '2025 Smash Ultimate Major Winner', color: 'from-purple-500 via-pink-500 to-rose-500' }
            ].map((team, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${team.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{team.name}</h4>
                <p className="text-purple-600 font-semibold mb-2">{team.game}</p>
                <p className="text-gray-600 text-sm">{team.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No teams found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RostersSection;
