import React, { useState } from 'react';
import { Smartphone, Download, Star, Users, Trophy, MessageCircle, BarChart3, Play, QrCode, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';

const MobileAppSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const screens = [
    {
      id: 'live-scores',
      title: 'Live Scores',
      icon: Trophy,
      description: 'Real-time match updates and live scoring',
      features: ['Live match tracking', 'Score notifications', 'Match history', 'Team standings'],
      color: 'from-red-500 via-orange-500 to-yellow-500'
    },
    {
      id: 'stats',
      title: 'Player Stats',
      icon: BarChart3,
      description: 'Detailed player statistics and performance analytics',
      features: ['Player profiles', 'Performance metrics', 'Match statistics', 'Career highlights'],
      color: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      id: 'replays',
      title: 'Match Replays',
      icon: Play,
      description: 'Watch full match replays and highlights',
      features: ['Full match replays', 'Highlight reels', 'Multiple camera angles', 'Slow motion analysis'],
      color: 'from-purple-500 via-pink-500 to-blue-500'
    },
    {
      id: 'brackets',
      title: 'Tournament Brackets',
      icon: Users,
      description: 'Interactive tournament brackets and progression',
      features: ['Live bracket updates', 'Match predictions', 'Team progress', 'Elimination tracking'],
      color: 'from-green-500 via-teal-500 to-cyan-500'
    },
    {
      id: 'chat',
      title: 'Community Chat',
      icon: MessageCircle,
      description: 'Connect with other fans and discuss matches',
      features: ['Live chat rooms', 'Team discussions', 'Fan predictions', 'Social features'],
      color: 'from-pink-500 via-purple-500 to-indigo-500'
    }
  ];

  const appFeatures = [
    {
      icon: Download,
      title: 'Offline Mode',
      description: 'Download content to watch without internet'
    },
    {
      icon: Star,
      title: 'Personalized Feed',
      description: 'Custom content based on your favorite teams'
    },
    {
      icon: QrCode,
      title: 'QR Check-in',
      description: 'Quick venue check-in and ticket scanning'
    }
  ];

  // Touch gesture handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeScreen < screens.length - 1) {
      setActiveScreen(activeScreen + 1);
    }
    if (isRightSwipe && activeScreen > 0) {
      setActiveScreen(activeScreen - 1);
    }
  };

  const nextScreen = () => {
    setActiveScreen((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        nextScreen();
      } else if (e.key === 'ArrowLeft') {
        prevScreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Scroll animation hooks
  const [sectionRef, isSectionVisible] = useScrollAnimation();
  const [featuresRefs, visibleFeatures] = useStaggeredAnimation(appFeatures, 100);

  return (
    <section id="mobile-app" className="py-24 bg-gradient-to-br from-purple-950 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 scroll-reveal ${isSectionVisible ? 'revealed' : ''}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Smartphone className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-white font-semibold">Mobile App Preview</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Mobile <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">App</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4">
            Experience the championship like never before with our comprehensive mobile app featuring all 5 required screens.
          </p>
          <p className="text-lg text-purple-300 font-semibold">
            Swipe, click arrows, or use keyboard (← →) to navigate
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <span className="font-semibold">Coming Soon:</span> The mobile app is currently in development and will be available before the championship begins.
              </p>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Phone Mockup */}
          <div className="relative">
            {/* Left Arrow Button - Desktop Only */}
            <button
              onClick={prevScreen}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden lg:flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10 hover:scale-110"
              aria-label="Previous screen"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div 
              className="relative mx-auto w-80 h-[600px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-6 h-3 border border-white rounded-sm"></div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="px-6 py-4 h-full">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${screens[activeScreen].color} flex items-center justify-center`}>
                      {React.createElement(screens[activeScreen].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{screens[activeScreen].title}</h3>
                    <p className="text-gray-400 text-sm">{screens[activeScreen].description}</p>
                  </div>

                  {/* Mock Content */}
                  <div className="space-y-4">
                    {screens[activeScreen].features.map((feature, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-white text-sm">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mock Data */}
                  <div className="mt-6 space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Team Phoenix</span>
                        <span className="text-green-400 font-bold">13-7</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Velocity Esports</span>
                        <span className="text-red-400 font-bold">7-13</span>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Aerial Assassins</span>
                        <span className="text-green-400 font-bold">3-1</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Velocity Vipers</span>
                        <span className="text-red-400 font-bold">1-3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeScreen === index ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            {/* Swipe Indicator */}
            <div className="text-center mt-4 text-gray-400 text-sm">
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Swipe or use arrows
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
            
            {/* Right Arrow Button - Desktop Only */}
            <button
              onClick={nextScreen}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden lg:flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10 hover:scale-110"
              aria-label="Next screen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* App Details */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Complete Championship Experience</h3>
            <p className="text-lg text-gray-300 mb-8">
              Our mobile app provides everything you need to stay connected to the championship, from live scores to community discussions.
            </p>

            {/* Screen Navigation */}
            <div className="space-y-4 mb-8">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    activeScreen === index
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${screen.color} flex items-center justify-center mr-4`}>
                      <screen.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{screen.title}</h4>
                      <p className="text-sm opacity-80">{screen.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* App Features */}
            <div className="grid grid-cols-1 gap-4">
              {appFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-4 bg-gray-800 rounded-xl scroll-reveal-stagger ${visibleFeatures.has(index) ? 'revealed' : ''}`}
                  ref={el => featuresRefs.current[index] = el}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                    index === 0 ? 'from-blue-500 to-purple-500' :
                    index === 1 ? 'from-purple-500 to-pink-500' :
                    'from-pink-500 to-blue-500'
                  } flex items-center justify-center mr-4`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">{feature.title}</h5>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Download the App</h3>
          <p className="text-lg text-gray-300 mb-8">
            Available on iOS and Android. Download now to enhance your championship experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">📱</span>
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </button>

            <button className="flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">🤖</span>
              </div>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </button>
          </div>

          {/* QR Code */}
          <div className="inline-block p-4 bg-white rounded-2xl">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <QrCode className="w-16 h-16 text-gray-600" />
            </div>
            <p className="text-gray-600 text-sm mt-2">Scan to download</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
