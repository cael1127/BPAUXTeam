import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Play, Ticket, Users, Trophy, Zap } from 'lucide-react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-06T10:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Event Logo/Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-white font-semibold">National Esports Championship Series</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in stagger-1">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-orange-300 to-blue-400 bg-clip-text text-transparent">
            NSCS 2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4 animate-fade-in stagger-2">
          The ultimate esports championship featuring the world's best teams in Valorant, Rocket League, and Super Smash Bros Ultimate
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12 animate-fade-in stagger-3 px-4">
          <div className="flex items-center text-white">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-purple-400" />
            <span className="text-base sm:text-lg font-semibold">May 6-10, 2026</span>
          </div>
          <div className="flex items-center text-white">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-pink-400" />
            <span className="text-base sm:text-lg font-semibold">Nashville, TN</span>
          </div>
          <div className="flex items-center text-white">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-orange-300" />
            <span className="text-base sm:text-lg font-semibold">52 Teams</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in stagger-4 px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Championship Starts In:</h3>
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white">{value}</span>
                </div>
                <p className="text-white/80 mt-2 text-xs sm:text-sm md:text-base capitalize">{unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in stagger-5">
          <button
            onClick={() => scrollToSection('ticketing')}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
          >
            <div className="flex items-center">
              <Ticket className="w-6 h-6 mr-2" />
              Buy Tickets
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
          </button>

          <button
            onClick={() => scrollToSection('rosters')}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2" />
              View Teams
            </div>
          </button>

          <button
            onClick={() => scrollToSection('livestreams')}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center">
              <Play className="w-6 h-6 mr-2" />
              Watch Live
            </div>
          </button>
        </div>

        {/* Prize Pool Display */}
        <div className="mt-16 animate-fade-in stagger-6">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30">
            <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
            <div className="text-left">
              <p className="text-yellow-400 font-bold text-lg">Total Prize Pool</p>
              <p className="text-white text-3xl font-bold">$1,000,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
