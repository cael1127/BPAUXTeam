import React, { useState } from 'react';
import { Camera, MessageCircle, Star, Users, Gift, Crown, Heart, Share2, Play } from 'lucide-react';

const FanExperienceSection = () => {
  const [activeGallery, setActiveGallery] = useState('all');

  const galleries = [
    { id: 'all', label: 'All Photos', count: 24 },
    { id: 'action', label: 'Action Shots', count: 8 },
    { id: 'fans', label: 'Fan Moments', count: 6 },
    { id: 'behind', label: 'Behind Scenes', count: 10 }
  ];

  const photos = [
    { id: 1, category: 'action', src: '🎮', title: 'Intense Championship Match', likes: 1247 },
    { id: 2, category: 'fans', src: '📸', title: 'Fan Meet & Greet', likes: 892 },
    { id: 3, category: 'behind', src: '🎥', title: 'Backstage Preparation', likes: 654 },
    { id: 4, category: 'action', src: '🏆', title: 'Victory Celebration', likes: 1834 },
    { id: 5, category: 'fans', src: '👥', title: 'Fan Zone Activities', likes: 567 },
    { id: 6, category: 'behind', src: '🎤', title: 'Commentary Setup', likes: 423 },
    { id: 7, category: 'action', src: '⚡', title: 'Epic Play Moment', likes: 2156 },
    { id: 8, category: 'fans', src: '🎉', title: 'Crowd Reaction', likes: 978 }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Esports Fan',
      avatar: '👩',
      content: 'The atmosphere was incredible! Meeting my favorite players and watching the matches live was an unforgettable experience.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'Gaming Enthusiast',
      avatar: '👨',
      content: 'Best esports event I\'ve ever attended. The production quality and fan engagement were top-notch.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Tournament Attendee',
      avatar: '👩',
      content: 'The meet & greets were amazing! Got to chat with players and take photos. The whole weekend was perfect.',
      rating: 5
    }
  ];

  const experiences = [
    {
      icon: Crown,
      title: 'VIP Meet & Greets',
      description: 'Exclusive access to meet your favorite players and get autographs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Gift,
      title: 'Exclusive Merchandise',
      description: 'Limited edition championship gear and collectibles only available at the event',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'Photo Opportunities',
      description: 'Professional photo sessions with the championship trophy and players',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Fan Zone Activities',
      description: 'Interactive gaming stations, tournaments, and community events',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredPhotos = activeGallery === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeGallery);

  return (
    <section id="fan-experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fan <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just watching matches - immerse yourself in the complete esports championship experience.
          </p>
        </div>

        {/* Experience Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${experience.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                <experience.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{experience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Championship Gallery</h3>
            <p className="text-lg text-gray-600">Relive the best moments from previous championships</p>
          </div>

          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {galleries.map((gallery) => (
              <button
                key={gallery.id}
                onClick={() => setActiveGallery(gallery.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeGallery === gallery.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {gallery.label} ({gallery.count})
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="group relative aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{photo.src}</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-semibold">{photo.title}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-sm font-semibold">{photo.title}</span>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-sm">{photo.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fan Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Fans Are Saying</h3>
            <p className="text-lg text-gray-600">Hear from our community about their championship experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                    <span className="text-2xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Events */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Special Events</h3>
            <p className="text-lg text-gray-600">Exclusive activities and experiences for championship attendees</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Crown className="w-6 h-6 mr-2 text-yellow-500" />
                Cosplay Competition
              </h4>
              <p className="text-gray-600 mb-4">Show off your best gaming character cosplay and compete for prizes!</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• $5,000 in prizes</div>
                <div>• Professional judging panel</div>
                <div>• Photo opportunities with players</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-500" />
                Fan Tournament
              </h4>
              <p className="text-gray-600 mb-4">Compete in your own tournament with other fans for bragging rights!</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• All skill levels welcome</div>
                <div>• Championship gear prizes</div>
                <div>• Meet other gaming enthusiasts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanExperienceSection;
