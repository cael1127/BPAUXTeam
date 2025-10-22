export const ticketTiers = [
  {
    id: 1,
    name: "General Admission",
    price: 75,
    originalPrice: 100,
    discount: "25%",
    type: "Single Day",
    color: "from-blue-500 to-cyan-500",
    icon: "🎫",
    description: "Access to all main stage events and general seating areas",
    features: [
      "Access to all main stage events",
      "General seating areas",
      "Food court access",
      "Merchandise shop",
      "Fan meet & greet areas",
      "Tournament program"
    ],
    availability: "Limited",
    popular: false,
    earlyBird: true
  },
  {
    id: 2,
    name: "VIP Experience",
    price: 199,
    originalPrice: 249,
    discount: "20%",
    type: "Single Day",
    color: "from-purple-500 to-pink-500",
    icon: "👑",
    description: "Premium seating, exclusive areas, and special perks",
    features: [
      "Premium seating (rows 1-5)",
      "VIP lounge access",
      "Complimentary food & drinks",
      "Exclusive merchandise",
      "Player meet & greet (priority)",
      "Photo opportunities",
      "Tournament program + autograph book",
      "Early venue access"
    ],
    availability: "Very Limited",
    popular: true,
    earlyBird: true
  },
  {
    id: 3,
    name: "Weekend Pass",
    price: 299,
    originalPrice: 375,
    discount: "20%",
    type: "Full Event",
    color: "from-green-500 to-emerald-500",
    icon: "🎮",
    description: "Access to all 5 days of the championship",
    features: [
      "Access to all 5 days (May 6-10)",
      "All main stage events",
      "General seating areas",
      "Food court access",
      "Merchandise shop",
      "Fan meet & greet areas",
      "Tournament program",
      "Championship finals priority seating"
    ],
    availability: "Good",
    popular: false,
    earlyBird: true
  },
  {
    id: 4,
    name: "Premium Package",
    price: 499,
    originalPrice: 599,
    discount: "17%",
    type: "Full Event",
    color: "from-red-500 to-orange-500",
    icon: "⭐",
    description: "Ultimate championship experience with all premium benefits",
    features: [
      "Access to all 5 days (May 6-10)",
      "Premium seating (rows 1-3)",
      "VIP lounge access",
      "Complimentary food & drinks",
      "Exclusive merchandise package",
      "Player meet & greet (priority)",
      "Photo opportunities with champions",
      "Behind-the-scenes tour",
      "Championship finals front row",
      "Autographed championship program",
      "Early venue access all days",
      "Complimentary parking"
    ],
    availability: "Extremely Limited",
    popular: true,
    earlyBird: true
  }
];

export const groupDiscounts = [
  {
    minPeople: 4,
    discount: 10,
    description: "4+ people get 10% off"
  },
  {
    minPeople: 8,
    discount: 15,
    description: "8+ people get 15% off"
  },
  {
    minPeople: 15,
    discount: 20,
    description: "15+ people get 20% off"
  }
];

export const addOns = [
  {
    id: 1,
    name: "Championship T-Shirt",
    price: 25,
    description: "Official NSCS 2026 championship t-shirt"
  },
  {
    id: 2,
    name: "Team Jersey",
    price: 45,
    description: "Official team jersey (your choice of team)"
  },
  {
    id: 3,
    name: "Photo Package",
    price: 35,
    description: "Professional photos with players and trophy"
  },
  {
    id: 4,
    name: "Parking Pass",
    price: 15,
    description: "Guaranteed parking spot near venue"
  }
];

export const getTicketById = (id) => {
  return ticketTiers.find(ticket => ticket.id === id);
};

export const getPopularTickets = () => {
  return ticketTiers.filter(ticket => ticket.popular);
};

export const getEarlyBirdTickets = () => {
  return ticketTiers.filter(ticket => ticket.earlyBird);
};

export const calculateGroupDiscount = (ticketId, quantity) => {
  const ticket = getTicketById(ticketId);
  if (!ticket) return 0;
  
  const discount = groupDiscounts.find(d => quantity >= d.minPeople);
  return discount ? discount.discount : 0;
};
