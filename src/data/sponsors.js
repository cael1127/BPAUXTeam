export const sponsors = {
  title: "Partners & Sponsors",
  subtitle: "Proudly supported by industry leaders in gaming and technology",
  
  tiers: {
    title: "Platinum Partners",
    sponsors: [
      {
        name: "NVIDIA",
        logo: "🟢",
        category: "Technology",
        description: "Official GPU Partner",
        website: "https://nvidia.com",
        color: "from-green-500 to-emerald-500"
      },
      {
        name: "Intel",
        logo: "🔵",
        category: "Technology", 
        description: "Official CPU Partner",
        website: "https://intel.com",
        color: "from-blue-500 to-cyan-500"
      },
      {
        name: "ASUS ROG",
        logo: "⚡",
        category: "Gaming Hardware",
        description: "Official Gaming Hardware Partner",
        website: "https://rog.asus.com",
        color: "from-red-500 to-orange-500"
      }
    ]
  },
  
  gold: {
    title: "Gold Partners",
    sponsors: [
      {
        name: "Razer",
        logo: "🐍",
        category: "Gaming Peripherals",
        description: "Official Gaming Gear Partner",
        website: "https://razer.com",
        color: "from-green-500 to-lime-500"
      },
      {
        name: "Corsair",
        logo: "⚓",
        category: "Gaming Hardware",
        description: "Official Memory & Cooling Partner",
        website: "https://corsair.com",
        color: "from-blue-500 to-indigo-500"
      },
      {
        name: "HyperX",
        logo: "🎧",
        category: "Gaming Audio",
        description: "Official Audio Partner",
        website: "https://hyperx.com",
        color: "from-red-500 to-pink-500"
      },
      {
        name: "SteelSeries",
        logo: "🎮",
        category: "Gaming Peripherals",
        description: "Official Controller Partner",
        website: "https://steelseries.com",
        color: "from-purple-500 to-violet-500"
      }
    ]
  },
  
  silver: {
    title: "Silver Partners",
    sponsors: [
      {
        name: "Red Bull",
        logo: "🐂",
        category: "Energy Drink",
        description: "Official Energy Drink Partner",
        website: "https://redbull.com",
        color: "from-red-500 to-orange-500"
      },
      {
        name: "Monster Energy",
        logo: "👹",
        category: "Energy Drink",
        description: "Official Gaming Fuel Partner",
        website: "https://monsterenergy.com",
        color: "from-green-500 to-emerald-500"
      },
      {
        name: "Twitch",
        logo: "📺",
        category: "Streaming Platform",
        description: "Official Streaming Partner",
        website: "https://twitch.tv",
        color: "from-purple-500 to-pink-500"
      },
      {
        name: "YouTube Gaming",
        logo: "📱",
        category: "Streaming Platform",
        description: "Official Video Partner",
        website: "https://gaming.youtube.com",
        color: "from-red-500 to-orange-500"
      },
      {
        name: "Discord",
        logo: "💬",
        category: "Communication",
        description: "Official Community Partner",
        website: "https://discord.com",
        color: "from-indigo-500 to-purple-500"
      },
      {
        name: "Spotify",
        logo: "🎵",
        category: "Music Streaming",
        description: "Official Music Partner",
        website: "https://spotify.com",
        color: "from-green-500 to-emerald-500"
      }
    ]
  },
  
  media: {
    title: "Media Partners",
    sponsors: [
      {
        name: "ESPN",
        logo: "📺",
        category: "Sports Media",
        description: "Official Broadcast Partner",
        website: "https://espn.com",
        color: "from-red-500 to-orange-500"
      },
      {
        name: "IGN",
        logo: "🎮",
        category: "Gaming Media",
        description: "Official Gaming Media Partner",
        website: "https://ign.com",
        color: "from-blue-500 to-cyan-500"
      },
      {
        name: "GameSpot",
        logo: "🎯",
        category: "Gaming Media",
        description: "Official Coverage Partner",
        website: "https://gamespot.com",
        color: "from-green-500 to-lime-500"
      },
      {
        name: "Polygon",
        logo: "📐",
        category: "Gaming Media",
        description: "Official News Partner",
        website: "https://polygon.com",
        color: "from-purple-500 to-pink-500"
      }
    ]
  }
};

export const getAllSponsors = () => {
  return [
    ...sponsors.tiers.sponsors,
    ...sponsors.gold.sponsors,
    ...sponsors.silver.sponsors,
    ...sponsors.media.sponsors
  ];
};

export const getSponsorsByTier = (tier) => {
  switch(tier.toLowerCase()) {
    case 'platinum':
    case 'tiers':
      return sponsors.tiers.sponsors;
    case 'gold':
      return sponsors.gold.sponsors;
    case 'silver':
      return sponsors.silver.sponsors;
    case 'media':
      return sponsors.media.sponsors;
    default:
      return [];
  }
};

export const getSponsorCategories = () => {
  const allSponsors = getAllSponsors();
  const categories = [...new Set(allSponsors.map(sponsor => sponsor.category))];
  return categories;
};
