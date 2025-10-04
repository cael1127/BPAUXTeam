import React from 'react';

const PresentationSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">G. Presentation Flow & Speaker Roles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic 10-minute presentation structure with detailed speaker roles, timing, and speaking notes for BPA competition success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Roles & Responsibilities</h2>
            <div className="space-y-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Member 1: Brand Identity Lead</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Presents logo concept, color palette, typography, and visual style guide. 
                  Explains design rationale and brand consistency across all touchpoints.
                </p>
                <div className="text-xs text-purple-600">
                  <strong>Key Points:</strong> Energy + Professionalism, Nashville connection, esports appeal
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Member 2: UX Research Lead</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Presents user personas, research insights, and information architecture. 
                  Demonstrates understanding of user needs and how they informed design decisions.
                </p>
                <div className="text-xs text-blue-600">
                  <strong>Key Points:</strong> 3 personas, research methodology, mobile-first approach
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Member 3: Prototype Lead</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Walks through desktop and mobile prototypes, demonstrating key user flows. 
                  Highlights accessibility features and responsive design considerations.
                </p>
                <div className="text-xs text-green-600">
                  <strong>Key Points:</strong> Live demos, 5+ mobile screens, accessibility compliance
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Member 4: Strategy Lead</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Presents future vision, business impact, and handles Q&A. 
                  Connects design decisions to tournament success and user engagement metrics.
                </p>
                <div className="text-xs text-yellow-600">
                  <strong>Key Points:</strong> Scalability, ROI, future enhancements, Q&A handling
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Presentation Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                <div>
                  <span className="font-medium">0:00-2:30</span> - Brand Identity (Member 1)
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                <div>
                  <span className="font-medium">2:30-5:00</span> - UX Research & Architecture (Member 2)
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                <div>
                  <span className="font-medium">5:00-7:30</span> - Prototype Walkthrough (Member 3)
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                <div>
                  <span className="font-medium">7:30-10:00</span> - Future Vision & Q&A (Member 4)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Speaking Notes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detailed Speaking Notes</h2>
          <div className="space-y-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Member 1 Opening (0:00-2:30)</h3>
              <p className="text-sm text-gray-600 mb-2">
                "Good morning judges. We're excited to present our UX design solution for the 2026 National Sports Championship Series. 
                Our challenge was creating a unified digital experience that serves casual fans, competitive players, and event organizers."
              </p>
              <p className="text-xs text-purple-600">
                <strong>Key Message:</strong> "Our brand captures Nashville's energy while maintaining professional tournament standards."
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Member 2 Research (2:30-5:00)</h3>
              <p className="text-sm text-gray-600 mb-2">
                "Through 15 user interviews and 200+ survey responses, we identified three key personas. 
                Our research revealed that 78% of users access esports content on mobile, driving our mobile-first approach."
              </p>
              <p className="text-xs text-blue-600">
                <strong>Key Message:</strong> "Data-driven design decisions ensure we meet real user needs."
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Member 3 Prototype (5:00-7:30)</h3>
              <p className="text-sm text-gray-600 mb-2">
                "Let me walk you through our interactive prototypes. The mobile app features 5 core screens with 
                real-time updates, while our desktop experience offers comprehensive tournament management tools."
              </p>
              <p className="text-xs text-green-600">
                <strong>Key Message:</strong> "Accessibility and responsiveness are built into every interaction."
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Member 4 Strategy (7:30-10:00)</h3>
              <p className="text-sm text-gray-600 mb-2">
                "Our solution scales from local tournaments to international championships. We project 40% increase 
                in user engagement and 25% improvement in ticket sales through our integrated approach."
              </p>
              <p className="text-xs text-yellow-600">
                <strong>Key Message:</strong> "This design system grows with the tournament's success."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Presentation Slides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 1: Problem Statement</h3>
              <p className="text-sm opacity-90">The challenge of creating a unified esports tournament experience</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 2: Brand Identity</h3>
              <p className="text-sm opacity-90">Logo, colors, typography, and visual language</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 3: User Personas</h3>
              <p className="text-sm opacity-90">Three key user segments and their needs</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 4: Information Architecture</h3>
              <p className="text-sm opacity-90">Site structure and navigation flow</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 5: Desktop Prototype</h3>
              <p className="text-sm opacity-90">Key screens and user interactions</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 6: Mobile Prototype</h3>
              <p className="text-sm opacity-90">Mobile-first design and features</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 7: Accessibility</h3>
              <p className="text-sm opacity-90">Inclusive design considerations</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Slide 8: Future Vision</h3>
              <p className="text-sm opacity-90">Scalability and next steps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;


