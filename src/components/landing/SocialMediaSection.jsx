import React, { useState } from 'react';
import { Download, Share2, Heart, MessageCircle, Eye, ExternalLink, Instagram, Twitter, Youtube, Twitch } from 'lucide-react';

const SocialMediaSection = () => {
  const [activePlatform, setActivePlatform] = useState('twitch');

  const platforms = [
    { id: 'twitch', name: 'Twitch', icon: Twitch, color: 'from-purple-500 to-purple-700' },
    { id: 'youtube', name: 'YouTube Gaming', icon: Youtube, color: 'from-red-500 to-red-700' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-600' },
    { id: 'discord', name: 'Discord', icon: MessageCircle, color: 'from-indigo-500 to-indigo-700' }
  ];

  const artboards = [
    {
      platform: 'twitch',
      title: 'Twitch Banner',
      dimensions: '1920x1080',
      description: 'Main channel banner for live streams',
      preview: '🎮',
      downloads: ['PNG', 'PSD', 'Figma']
    },
    {
      platform: 'youtube',
      title: 'YouTube Gaming Banner',
      dimensions: '2560x1440',
      description: 'Channel banner for YouTube Gaming',
      preview: '📺',
      downloads: ['PNG', 'PSD', 'Figma']
    },
    {
      platform: 'twitter',
      title: 'Twitter Header',
      dimensions: '1500x500',
      description: 'Twitter profile header image',
      preview: '🐦',
      downloads: ['PNG', 'JPG', 'Figma']
    },
    {
      platform: 'instagram',
      title: 'Instagram Stories',
      dimensions: '1080x1920',
      description: 'Instagram story templates',
      preview: '📱',
      downloads: ['PNG', 'PSD', 'Figma']
    },
    {
      platform: 'discord',
      title: 'Discord Server Banner',
      dimensions: '1920x1080',
      description: 'Discord server banner',
      preview: '💬',
      downloads: ['PNG', 'JPG', 'Figma']
    }
  ];

  const socialPosts = [
    {
      platform: 'twitter',
      content: '🔥 The countdown begins! #NSCS2026 is coming to Nashville May 6-10. Get your tickets now!',
      engagement: { likes: 1247, retweets: 456, comments: 89 },
      time: '2h ago'
    },
    {
      platform: 'instagram',
      content: 'Behind the scenes at the championship venue setup! 🏆 #NSCS2026 #Esports',
      engagement: { likes: 2156, comments: 234 },
      time: '4h ago'
    },
    {
      platform: 'twitch',
      content: 'Live now: Team Phoenix vs Velocity Esports - Championship Finals!',
      engagement: { viewers: 45678, likes: 3456 },
      time: 'LIVE'
    }
  ];

  const hashtags = ['#NSCS2026', '#EsportsChampionship', '#NashvilleGaming', '#Valorant', '#RocketLeague', '#SmashBros'];

  return (
    <section id="social-media" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Social <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Media</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with us across all platforms and download our official social media assets.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                activePlatform === platform.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <platform.icon className="w-5 h-5 mr-2" />
              {platform.name}
            </button>
          ))}
        </div>

        {/* Artboards Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Social Media Assets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artboards.map((artboard, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${platforms.find(p => p.id === artboard.platform)?.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">{artboard.preview}</div>
                    <h4 className="text-xl font-bold">{artboard.title}</h4>
                    <p className="text-white/80">{artboard.dimensions}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{artboard.title}</h4>
                  <p className="text-gray-600 mb-4">{artboard.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artboard.downloads.map((format, formatIndex) => (
                      <span key={formatIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {format}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Social Feed */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Live Social Feed</h3>
          <div className="space-y-6">
            {socialPosts.map((post, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">N</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">NSCS 2026</h4>
                      <p className="text-gray-600 text-sm">@{post.platform} • {post.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {post.platform}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-800 mb-4">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.engagement.likes?.toLocaleString() || post.engagement.viewers?.toLocaleString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.engagement.comments?.toLocaleString() || post.engagement.retweets?.toLocaleString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hashtag Campaign */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Join the Conversation</h3>
          <p className="text-xl mb-6 text-white/90">Use our official hashtags to connect with the community</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {hashtags.map((hashtag, index) => (
              <span key={index} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all duration-300 cursor-pointer">
                {hashtag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300">
              Download Press Kit
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Follow Us
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Follow Us Everywhere</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform) => (
              <a
                key={platform.id}
                href="#"
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                <platform.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
