export const venue = {
  name: "Nashville Music City Center",
  address: "201 5th Ave S, Nashville, TN 37203",
  city: "Nashville",
  state: "Tennessee",
  zipCode: "37203",
  country: "United States",
  
  description: "The premier convention center in Music City, featuring state-of-the-art facilities and world-class amenities perfect for hosting the National Esports Championship Series.",
  
  capacity: {
    mainStage: 5000,
    stage2: 2500,
    total: 7500
  },
  
  features: [
    "State-of-the-art AV equipment",
    "High-speed fiber internet (10Gbps)",
    "Professional lighting systems",
    "Multiple viewing screens",
    "Climate-controlled environment",
    "Accessible seating throughout",
    "VIP lounge areas",
    "Food court with local vendors",
    "Merchandise shop",
    "Player warm-up areas",
    "Media center",
    "Broadcast facilities"
  ],
  
  accessibility: {
    wcagCompliant: true,
    features: [
      "Wheelchair accessible entrances",
      "Accessible seating throughout venue",
      "Assistive listening devices available",
      "Sign language interpreters (on request)",
      "Service animal friendly",
      "Accessible restrooms on all levels",
      "Elevator access to all floors",
      "Large print programs available",
      "Audio description services",
      "Reserved accessible parking"
    ],
    contact: "accessibility@nscs2026.com"
  },
  
  parking: {
    onSite: {
      available: true,
      spaces: 1200,
      price: 15,
      description: "Convenient underground parking with direct venue access"
    },
    nearby: [
      {
        name: "Music City Center Garage",
        distance: "0.1 miles",
        spaces: 800,
        price: 12
      },
      {
        name: "5th & Broadway Garage",
        distance: "0.2 miles", 
        spaces: 600,
        price: 10
      },
      {
        name: "Public Square Garage",
        distance: "0.3 miles",
        spaces: 400,
        price: 8
      }
    ]
  },
  
  hotels: [
    {
      name: "Omni Nashville Hotel",
      distance: "0.1 miles",
      rating: 4.5,
      price: 289,
      amenities: ["Pool", "Spa", "Restaurant", "Bar"],
      nscsDiscount: "15% off with code NSCS2026",
      website: "https://omnihotels.com/nashville"
    },
    {
      name: "Hilton Nashville Downtown",
      distance: "0.2 miles",
      rating: 4.3,
      price: 245,
      amenities: ["Pool", "Fitness Center", "Restaurant"],
      nscsDiscount: "10% off with code NSCS2026",
      website: "https://hilton.com/nashville-downtown"
    },
    {
      name: "Hyatt Place Nashville Downtown",
      distance: "0.3 miles",
      rating: 4.1,
      price: 189,
      amenities: ["Breakfast", "Fitness Center", "Business Center"],
      nscsDiscount: "12% off with code NSCS2026",
      website: "https://hyatt.com/nashville-downtown"
    },
    {
      name: "Hampton Inn Nashville Downtown",
      distance: "0.4 miles",
      rating: 4.0,
      price: 165,
      amenities: ["Breakfast", "Fitness Center", "WiFi"],
      nscsDiscount: "8% off with code NSCS2026",
      website: "https://hamptoninn.com/nashville-downtown"
    }
  ],
  
  transportation: {
    airport: {
      name: "Nashville International Airport (BNA)",
      distance: "8.5 miles",
      driveTime: "15-20 minutes",
      uberCost: "25-35",
      taxiCost: "30-40"
    },
    publicTransit: [
      {
        name: "Nashville MTA Bus",
        route: "Route 3, 5, 7",
        stop: "5th & Broadway",
        cost: 2.00
      },
      {
        name: "Nashville B-cycle",
        stations: "Multiple stations within 0.5 miles",
        cost: "8/hour or 15/day"
      }
    ],
    rideshare: {
      uber: "Available throughout downtown",
      lyft: "Available throughout downtown",
      pickup: "Designated pickup area on 5th Ave"
    }
  },
  
  dining: {
    onSite: [
      "Music City Food Court - Local Nashville vendors",
      "Championship Café - Quick bites and coffee",
      "VIP Lounge - Premium dining experience"
    ],
    nearby: [
      {
        name: "Broadway Brewhouse",
        distance: "0.1 miles",
        cuisine: "American",
        price: "$$"
      },
      {
        name: "The Southern Steak & Oyster",
        distance: "0.2 miles",
        cuisine: "Steakhouse",
        price: "$$$"
      },
      {
        name: "Hattie B's Hot Chicken",
        distance: "0.3 miles",
        cuisine: "Nashville Hot Chicken",
        price: "$"
      }
    ]
  },
  
  contact: {
    phone: "(615) 401-1400",
    email: "info@musiccitycenter.com",
    website: "https://musiccitycenter.com",
    nscsContact: "venue@nscs2026.com"
  },
  
  coordinates: {
    lat: 36.1627,
    lng: -86.7816
  }
};

export const getVenueInfo = () => venue;

export const getAccessibilityInfo = () => venue.accessibility;

export const getNearbyHotels = () => venue.hotels;

export const getTransportationInfo = () => venue.transportation;
