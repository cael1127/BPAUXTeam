import React from 'react';
import { ChevronDown, ChevronUp, Star, Zap } from 'lucide-react';
import { personas } from '../data/personas';

const PersonasSection = ({ expandedPersona, setExpandedPersona }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">B. UX Personas & Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive user research identifying three key personas: casual fans, competitive players, and event organizers for the 2026 National Sports Championship Series
          </p>
        </div>

        {/* Research Methodology */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Research Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Collection Methods</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>15 user interviews with esports enthusiasts</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Online survey with 200+ responses</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Competitive analysis of existing platforms</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Usability testing with 12 participants</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Mobile-first approach is critical (78% mobile usage)</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Real-time updates are highest priority</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Social features drive engagement</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Accessibility needs are often overlooked</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={persona.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 card-interactive animate-fade-in ${
                expandedPersona === persona.id ? 'ring-2 ring-purple-500 shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={persona.image} 
                    alt={persona.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{persona.name}</h3>
                    <p className="text-purple-600 font-medium">{persona.role}</p>
                    <p className="text-gray-600 text-sm">{persona.age} years old</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setExpandedPersona(expandedPersona === persona.id ? null : persona.id)}
                  className="w-full text-left py-3 text-purple-600 font-medium flex items-center justify-between transition-all duration-300 hover:bg-purple-50 rounded-lg px-3 -mx-3 group"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {expandedPersona === persona.id ? 'Show Less' : 'Show Details'}
                  </span>
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {expandedPersona === persona.id ? 
                      <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" /> : 
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                    }
                  </div>
                </button>
                
                {expandedPersona === persona.id && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <div className="animate-slide-in-left stagger-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Goals</h4>
                      <ul className="text-gray-600 space-y-1">
                        {persona.goals.map((goal, index) => (
                          <li key={index} className="flex items-start">
                            <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Frustrations</h4>
                      <ul className="text-gray-600 space-y-1">
                        {persona.frustrations.map((frustration, index) => (
                          <li key={index} className="flex items-start">
                            <Zap className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{frustration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Interaction Pattern</h4>
                      <p className="text-gray-600">{persona.interaction}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonasSection;


