import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Download, Filter, ChevronDown, Play, Trophy } from 'lucide-react';
import { schedule, getScheduleByDay } from '../../data/schedule';

const ScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState('May 6, 2026');
  const [filterGame, setFilterGame] = useState('all');

  const days = Object.keys(schedule);
  const currentDay = getScheduleByDay(selectedDay);
  const games = ['all', 'Valorant', 'Rocket League', 'Super Smash Bros'];

  const getFilteredEvents = () => {
    if (!currentDay) return [];
    
    if (filterGame === 'all') return currentDay.events;
    return currentDay.events.filter(event => event.game === filterGame);
  };

  const filteredEvents = getFilteredEvents();

  const getGameIcon = (game) => {
    switch(game) {
      case 'Valorant': return '🎯';
      case 'Rocket League': return '🚗';
      case 'Super Smash Bros': return '🥊';
      default: return '🎮';
    }
  };

  const getGameColor = (game) => {
    switch(game) {
      case 'Valorant': return 'from-red-500 via-orange-500 to-yellow-500';
      case 'Rocket League': return 'from-blue-600 via-cyan-600 to-teal-600';
      case 'Super Smash Bros': return 'from-purple-500 via-pink-500 to-rose-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow all the action across 5 days of intense competition. Don't miss a single match!
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedDay === day
                  ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {schedule[day].day}
            </button>
          ))}
        </div>

        {/* Game Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {games.map((game) => (
            <button
              key={game}
              onClick={() => setFilterGame(game)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                filterGame === game
                  ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {game === 'all' ? 'All Games' : game}
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        {currentDay && (
          <div className="mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{currentDay.date}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{filteredEvents.length} matches scheduled</p>
            </div>

            {/* Events Timeline */}
            <div className="space-y-6">
              {filteredEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getGameColor(event.game)} flex items-center justify-center mr-4`}>
                            <span className="text-2xl">{getGameIcon(event.game)}</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{event.match}</h4>
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {event.stage}
                              <span className="mx-2">•</span>
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                {event.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{event.time}</span>
                        </div>
                        <div className="text-gray-600 text-sm">
                          Duration: {event.duration}
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No matches found</h3>
                <p className="text-gray-600">Try selecting a different day or game filter</p>
              </div>
            )}
          </div>
        )}

        {/* Interactive Bracket Preview */}
        <div className="relative overflow-hidden rounded-3xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-10"></div>
          <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Championship Bracket</h3>
              <p className="text-lg text-gray-600">Follow the tournament progression in real-time</p>
            </div>

             <div className="grid md:grid-cols-3 gap-8">
               <div className="text-center">
                 <div className="w-full h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                   <Trophy className="w-12 h-12 text-white" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-2">Group Stage</h4>
                 <p className="text-gray-600">May 6-8: Teams compete in round-robin format</p>
               </div>

               <div className="text-center">
                 <div className="w-full h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                   <Play className="w-12 h-12 text-white" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-2">Playoffs</h4>
                 <p className="text-gray-600">May 9: Single elimination bracket begins</p>
               </div>

               <div className="text-center">
                 <div className="w-full h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                   <Trophy className="w-12 h-12 text-white" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-2">Finals</h4>
                 <p className="text-gray-600">May 10: Championship matches and crowning</p>
               </div>
             </div>
          </div>
        </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              View Full Bracket
            </button>
          </div>
        </div>

        {/* Download Options */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Schedule</h3>
            <p className="text-gray-600 mb-8">Get the complete schedule on your device</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
              <button className="px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
