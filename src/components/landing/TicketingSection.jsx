import React, { useState } from 'react';
import { Ticket, Star, Check, Users, Clock, Shield, Gift, CreditCard } from 'lucide-react';
import { ticketTiers, groupDiscounts, addOns } from '../../data/tickets';

const TicketingSection = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddOnToggle = (addOnId) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    const basePrice = selectedTier ? selectedTier.price : 0;
    const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);
    
    const groupDiscount = groupDiscounts.find(d => quantity >= d.minPeople);
    const discountMultiplier = groupDiscount ? (100 - groupDiscount.discount) / 100 : 1;
    
    return Math.round((basePrice * quantity + addOnTotal) * discountMultiplier);
  };

  return (
    <section id="ticketing" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tickets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your perfect championship experience with our flexible ticket options and exclusive perks.
          </p>
        </div>

        {/* Early Bird Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center mb-2">
            <Gift className="w-6 h-6 text-white mr-2" />
            <span className="text-white font-bold text-lg">Early Bird Special - Save up to 25%!</span>
          </div>
          <p className="text-white/90">Limited time offer - Book now to secure your spot at the biggest esports event of 2026</p>
        </div>

        {/* Ticket Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {ticketTiers.map((tier) => (
            <div key={tier.id} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
              tier.popular ? 'ring-2 ring-purple-500' : ''
            }`}>
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-2xl">
                  Most Popular
                </div>
              )}
              
              <div className={`h-28 sm:h-32 bg-gradient-to-r ${tier.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{tier.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-white/90 text-xs sm:text-sm">{tier.type}</p>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{tier.price}</div>
                  {tier.originalPrice && (
                    <div className="text-white/70 line-through text-xs sm:text-sm">{tier.originalPrice}</div>
                  )}
                  {tier.discount && (
                    <div className="text-yellow-300 font-bold text-xs sm:text-sm">{tier.discount} OFF</div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Availability</span>
                    <span className={`font-semibold ${
                      tier.availability === 'Extremely Limited' ? 'text-red-600' :
                      tier.availability === 'Very Limited' ? 'text-pink-600' :
                      'text-green-600'
                    }`}>{tier.availability}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTier(tier)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedTier?.id === tier.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  {selectedTier?.id === tier.id ? 'Selected' : 'Select Ticket'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Group Discounts */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Group Discounts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {groupDiscounts.map((discount, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{discount.minPeople}+ People</h4>
                <p className="text-3xl font-bold text-purple-600 mb-2">{discount.discount}% OFF</p>
                <p className="text-gray-600 text-sm">{discount.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add-ons & Extras</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn) => (
              <div key={addOn.id} className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                selectedAddOns.includes(addOn.id)
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => handleAddOnToggle(addOn.id)}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{addOn.name}</h4>
                  <span className="text-purple-600 font-bold">${addOn.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{addOn.description}</p>
                {selectedAddOns.includes(addOn.id) && (
                  <div className="mt-2 flex items-center text-purple-600 text-sm">
                    <Check className="w-4 h-4 mr-1" />
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Purchase Summary */}
        {selectedTier && (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Purchase Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Quantity</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">{selectedTier.name} × {quantity}</span>
                <span className="font-semibold">${selectedTier.price * quantity}</span>
              </div>
              
              {selectedAddOns.map(addOnId => {
                const addOn = addOns.find(a => a.id === addOnId);
                return addOn ? (
                  <div key={addOnId} className="flex items-center justify-between">
                    <span className="text-gray-700">{addOn.name}</span>
                    <span className="font-semibold">${addOn.price}</span>
                  </div>
                ) : null;
              })}
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-purple-600">${calculateTotal()}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Purchase Now
              </button>
              <button className="px-6 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300">
                Save for Later
              </button>
            </div>
          </div>
        )}

        {/* Security & Guarantees */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-500" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center">
              <Ticket className="w-5 h-5 mr-2 text-purple-500" />
              <span>Mobile Tickets</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketingSection;
