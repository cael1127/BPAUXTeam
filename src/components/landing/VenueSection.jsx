import React, { useState } from 'react';
import { MapPin, Car, Bed, Utensils, Wifi, Accessibility, Phone, Globe, Star, Navigation } from 'lucide-react';
import { venue, getNearbyHotels, getTransportationInfo } from '../../data/venues';

const VenueSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const hotels = getNearbyHotels();
  const transportation = getTransportationInfo();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: MapPin },
    { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
    { id: 'hotels', label: 'Hotels', icon: Bed },
    { id: 'transportation', label: 'Getting There', icon: Car }
  ];

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Nashville</span> Venue
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the championship at the world-class Music City Center in the heart of Nashville.
          </p>
        </div>

        {/* Venue Overview */}
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{venue.name}</h3>
              <p className="text-lg text-gray-700 mb-6">{venue.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">{venue.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">{venue.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-purple-500 mr-3" />
                  <a href={venue.contact.website} className="text-purple-600 hover:text-purple-700">
                    {venue.contact.website}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://maps.google.com/?q=Music+City+Center+Nashville+TN', '_blank')}
              >
                {/* Map Background with Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full">
                    {[...Array(48)].map((_, i) => (
                      <div key={i} className="border border-gray-300/30"></div>
                    ))}
                  </div>
                </div>
                
                {/* Map Content */}
                <div className="relative z-10 text-center">
                  <MapPin className="w-16 h-16 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">Music City Center</p>
                  <p className="text-gray-600 text-sm mb-4">201 5th Ave S, Nashville, TN</p>
                  <div className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium group-hover:bg-purple-600 transition-colors">
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </div>
                </div>
                
                {/* Interactive Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                  Click to explore
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Capacity & Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Venue Capacity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-semibold text-gray-700">Main Stage</span>
                    <span className="text-2xl font-bold text-purple-600">{venue.capacity.mainStage.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-semibold text-gray-700">Stage 2</span>
                    <span className="text-2xl font-bold text-purple-600">{venue.capacity.stage2.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <span className="font-semibold text-gray-700">Total Capacity</span>
                    <span className="text-2xl font-bold text-purple-600">{venue.capacity.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {venue.features.slice(0, 8).map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dining Options */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dining & Amenities</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Utensils className="w-5 h-5 mr-2 text-purple-500" />
                    On-Site Dining
                  </h4>
                  <ul className="space-y-2">
                    {venue.dining.onSite.map((option, index) => (
                      <li key={index} className="text-gray-700">{option}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                    Nearby Restaurants
                  </h4>
                  <ul className="space-y-2">
                    {venue.dining.nearby.map((restaurant, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-medium">{restaurant.name}</span> - {restaurant.cuisine} ({restaurant.price})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'accessibility' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
               <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <Accessibility className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Features</h3>
              <p className="text-lg text-gray-600">We're committed to making the championship accessible to everyone</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">WCAG 2.1 AA Compliant</h4>
                <div className="space-y-3">
                  {venue.accessibility.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Additional Services</h4>
                <div className="space-y-3">
                  {venue.accessibility.features.slice(6).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <p className="text-green-800 font-semibold">Need assistance?</p>
                  <p className="text-green-700 text-sm">Contact us at {venue.accessibility.contact}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Recommended Hotels</h3>
              <p className="text-lg text-gray-600">Stay close to the action with our partner hotels</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hotels.map((hotel, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{hotel.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < hotel.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {hotel.distance} from venue
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-2xl font-bold text-purple-600">${hotel.price}</span>
                      <span className="text-gray-500 ml-1">/night</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Amenities:</h5>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, amenityIndex) => (
                        <span key={amenityIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-green-800 font-semibold text-sm">{hotel.nscsDiscount}</p>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Book Now
                    </a>
                    <button className="px-4 py-2 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'transportation' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Getting to Nashville</h3>
              <p className="text-lg text-gray-600">Multiple transportation options to reach the venue</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-purple-500" />
                  From Airport
                </h4>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-2">{transportation.airport.name}</h5>
                  <div className="space-y-2 text-gray-700">
                    <div>Distance: {transportation.airport.distance}</div>
                    <div>Drive Time: {transportation.airport.driveTime}</div>
                    <div>Uber/Lyft: ${transportation.airport.uberCost}</div>
                    <div>Taxi: ${transportation.airport.taxiCost}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Car className="w-5 h-5 mr-2 text-purple-500" />
                  Parking
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h5 className="font-semibold text-gray-900">On-Site Parking</h5>
                    <p className="text-gray-700">{venue.parking.onSite.spaces} spaces available</p>
                    <p className="text-purple-600 font-semibold">${venue.parking.onSite.price}/day</p>
                  </div>
                  <div className="space-y-2">
                    {venue.parking.nearby.map((garage, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">{garage.name}</div>
                          <div className="text-sm text-gray-600">{garage.distance}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-purple-600">${garage.price}</div>
                          <div className="text-sm text-gray-600">{garage.spaces} spaces</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Public Transportation</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {transportation.publicTransit.map((option, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">{option.name}</h5>
                    <div className="space-y-1 text-gray-700">
                      <div>Route: {option.route}</div>
                      <div>Stop: {option.stop}</div>
                      <div>Cost: ${option.cost}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VenueSection;
