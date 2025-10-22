import React, { useState } from 'react';
import { Mail, Send, Check, Users, Bell, MessageCircle, Download, ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [preferences, setPreferences] = useState({
    updates: true,
    matches: true,
    news: false,
    merchandise: false
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const handlePreferenceChange = (pref) => {
    setPreferences(prev => ({
      ...prev,
      [pref]: !prev[pref]
    }));
  };

  const newsItems = [
    {
      title: 'Championship Schedule Released',
      date: '2 days ago',
      category: 'Updates',
      excerpt: 'Complete match schedule and venue information now available'
    },
    {
      title: 'Team Rosters Finalized',
      date: '5 days ago',
      category: 'Teams',
      excerpt: 'All 52 competing teams confirmed for NSCS 2026'
    },
    {
      title: 'VIP Experience Packages',
      date: '1 week ago',
      category: 'Tickets',
      excerpt: 'Exclusive meet & greet opportunities with championship players'
    },
    {
      title: 'Mobile App Beta Launch',
      date: '2 weeks ago',
      category: 'Technology',
      excerpt: 'Early access to the official NSCS mobile application'
    }
  ];

  const communityStats = [
    { icon: Users, label: 'Discord Members', value: '12,547', color: 'from-indigo-500 to-purple-500' },
    { icon: Mail, label: 'Newsletter Subscribers', value: '8,923', color: 'from-blue-500 to-cyan-500' },
    { icon: MessageCircle, label: 'Social Followers', value: '45,678', color: 'from-pink-500 to-rose-500' },
    { icon: Bell, label: 'Push Notifications', value: '23,456', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connected</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our community and never miss an update about the championship.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Newsletter Signup</h3>
              <p className="text-lg text-gray-300">Get the latest championship news delivered to your inbox</p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </button>
                </div>

                {/* Content Preferences */}
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Content Preferences</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(preferences).map(([key, value]) => (
                      <label key={key} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => handlePreferenceChange(key)}
                          className="w-4 h-4 text-purple-600 bg-white/20 border-white/30 rounded focus:ring-purple-500"
                        />
                        <span className="ml-3 text-white capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-300 mb-6">Thank you for joining our community. You'll receive updates based on your preferences.</p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="px-6 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Subscribe Another Email
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Latest News */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Latest News</h3>
            <p className="text-lg text-gray-300">Stay updated with the latest championship developments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Discord Community */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Discord Community</h3>
            <p className="text-xl text-white/90 mb-8">
              Connect with fellow fans, discuss matches, and get exclusive behind-the-scenes content
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord Server
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                12,547 active members
              </div>
              <div className="flex items-center">
                <Bell className="w-4 h-4 mr-2" />
                Live match notifications
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2" />
                Verified community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
