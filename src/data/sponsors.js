export const sponsors = {
  title: "Partners & Sponsors",
  subtitle: "Proudly supported by industry leaders in gaming and technology",
  
  tiers: {
    title: "Platinum Partners",
    sponsors: [
      {
        name: "NVIDIA",
        logo: "/logos/nvidia-logo.svg",
        logoAlt: "NVIDIA Logo",
        category: "Technology",
        description: "Official GPU Partner",
        website: "https://nvidia.com",
        color: "from-green-500 to-emerald-500",
        copyright: "© NVIDIA Corporation. All rights reserved."
      },
      {
        name: "Intel",
        logo: "/logos/intel-logo.svg",
        logoAlt: "Intel Logo",
        category: "Technology", 
        description: "Official CPU Partner",
        website: "https://intel.com",
        color: "from-blue-500 to-cyan-500",
        copyright: "© Intel Corporation. All rights reserved."
      },
      {
        name: "ASUS ROG",
        logo: "/logos/asus-rog-logo.svg",
        logoAlt: "ASUS ROG Logo",
        category: "Gaming Hardware",
        description: "Official Gaming Hardware Partner",
        website: "https://rog.asus.com",
        color: "from-red-500 to-orange-500",
        copyright: "© ASUS Computer International. All rights reserved."
      }
    ]
  },
  
  gold: {
    title: "Gold Partners",
    sponsors: [
      {
        name: "Razer",
        logo: "/logos/razer-logo.svg",
        logoAlt: "Razer Logo",
        category: "Gaming Peripherals",
        description: "Official Gaming Gear Partner",
        website: "https://razer.com",
        color: "from-green-500 to-lime-500",
        copyright: "© Razer Inc. All rights reserved."
      },
      {
        name: "Corsair",
        logo: "/logos/corsair-logo.svg",
        logoAlt: "Corsair Logo",
        category: "Gaming Hardware",
        description: "Official Memory & Cooling Partner",
        website: "https://corsair.com",
        color: "from-blue-500 to-indigo-500",
        copyright: "© Corsair Gaming, Inc. All rights reserved."
      },
      {
        name: "HyperX",
        logo: "/logos/hyperx-logo.svg",
        logoAlt: "HyperX Logo",
        category: "Gaming Audio",
        description: "Official Audio Partner",
        website: "https://hyperx.com",
        color: "from-red-500 to-pink-500",
        copyright: "© HyperX. All rights reserved."
      },
      {
        name: "SteelSeries",
        logo: "/logos/steelseries-logo.svg",
        logoAlt: "SteelSeries Logo",
        category: "Gaming Peripherals",
        description: "Official Controller Partner",
        website: "https://steelseries.com",
        color: "from-purple-500 to-violet-500",
        copyright: "© SteelSeries ApS. All rights reserved."
      }
    ]
  },
  
  silver: {
    title: "Silver Partners",
    sponsors: [
      {
        name: "Red Bull",
        logo: "/logos/redbull-logo.svg",
        logoAlt: "Red Bull Logo",
        category: "Energy Drink",
        description: "Official Energy Drink Partner",
        website: "https://redbull.com",
        color: "from-red-500 to-orange-500",
        copyright: "© Red Bull GmbH. All rights reserved."
      },
      {
        name: "Monster Energy",
        logo: "/logos/monster-energy-logo.svg",
        logoAlt: "Monster Energy Logo",
        category: "Energy Drink",
        description: "Official Gaming Fuel Partner",
        website: "https://monsterenergy.com",
        color: "from-green-500 to-emerald-500",
        copyright: "© Monster Energy Company. All rights reserved."
      },
      {
        name: "Twitch",
        logo: "/logos/twitch-logo.svg",
        logoAlt: "Twitch Logo",
        category: "Streaming Platform",
        description: "Official Streaming Partner",
        website: "https://twitch.tv",
        color: "from-purple-500 to-pink-500",
        copyright: "© Twitch Interactive, Inc. All rights reserved."
      },
      {
        name: "YouTube Gaming",
        logo: "/logos/youtube-gaming-logo.svg",
        logoAlt: "YouTube Gaming Logo",
        category: "Streaming Platform",
        description: "Official Video Partner",
        website: "https://gaming.youtube.com",
        color: "from-red-500 to-orange-500",
        copyright: "© Google LLC. All rights reserved."
      },
      {
        name: "Discord",
        logo: "/logos/discord-logo.svg",
        logoAlt: "Discord Logo",
        category: "Communication",
        description: "Official Community Partner",
        website: "https://discord.com",
        color: "from-indigo-500 to-purple-500",
        copyright: "© Discord Inc. All rights reserved."
      },
      {
        name: "Spotify",
        logo: "/logos/spotify-logo.svg",
        logoAlt: "Spotify Logo",
        category: "Music Streaming",
        description: "Official Music Partner",
        website: "https://spotify.com",
        color: "from-green-500 to-emerald-500",
        copyright: "© Spotify AB. All rights reserved."
      }
    ]
  },
  
  media: {
    title: "Media Partners",
    sponsors: [
      {
        name: "ESPN",
        logo: "/logos/espn-logo.svg",
        logoAlt: "ESPN Logo",
        category: "Sports Media",
        description: "Official Broadcast Partner",
        website: "https://espn.com",
        color: "from-red-500 to-orange-500",
        copyright: "© ESPN Inc. All rights reserved."
      },
      {
        name: "IGN",
        logo: "/logos/ign-logo.svg",
        logoAlt: "IGN Logo",
        category: "Gaming Media",
        description: "Official Gaming Media Partner",
        website: "https://ign.com",
        color: "from-blue-500 to-cyan-500",
        copyright: "© IGN Entertainment, Inc. All rights reserved."
      },
      {
        name: "GameSpot",
        logo: "/logos/gamespot-logo.svg",
        logoAlt: "GameSpot Logo",
        category: "Gaming Media",
        description: "Official Coverage Partner",
        website: "https://gamespot.com",
        color: "from-green-500 to-lime-500",
        copyright: "© GameSpot. All rights reserved."
      },
      {
        name: "Polygon",
        logo: "/logos/polygon-logo.svg",
        logoAlt: "Polygon Logo",
        category: "Gaming Media",
        description: "Official News Partner",
        website: "https://polygon.com",
        color: "from-purple-500 to-pink-500",
        copyright: "© Vox Media, LLC. All rights reserved."
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
