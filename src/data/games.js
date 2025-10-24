export const games = [
  {
    name: 'Valorant',
    icon: '🎯',
    color: 'from-red-500 via-orange-500 to-yellow-500',
    description: 'Tactical 5v5 character-based shooter where precise aim meets strategic gameplay',
    prizePool: '$500,000',
    teams: 16,
    format: 'Best of 3 (Groups), Best of 5 (Playoffs)',
    duration: '2-3 hours per match',
    developer: 'Riot Games',
    releaseYear: 2020,
    genre: 'Tactical FPS',
    platforms: ['PC'],
    features: [
      '5v5 tactical gameplay',
      'Character-based abilities',
      'Precision shooting mechanics',
      'Strategic map control',
      'Team coordination essential'
    ],
    tournamentFormat: 'Double Elimination',
    mapPool: ['Bind', 'Haven', 'Split', 'Ascent', 'Icebox', 'Breeze', 'Fracture', 'Pearl'],
    spectatorFeatures: [
      'Live player POV switching',
      'Tactical map overview',
      'Real-time economy tracking',
      'Ability cooldown indicators',
      'Team communication insights'
    ]
  },
  {
    name: 'Rocket League',
    icon: '🚗',
    color: 'from-blue-500 via-cyan-500 to-teal-500',
    description: 'High-octane vehicular soccer with physics-defying aerial maneuvers',
    prizePool: '$300,000',
    teams: 12,
    format: 'Best of 5 (All matches)',
    duration: '5-7 minutes per game',
    developer: 'Psyonix',
    releaseYear: 2015,
    genre: 'Sports Racing',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    features: [
      '3v3 car soccer gameplay',
      'Physics-based ball control',
      'Aerial maneuvers and tricks',
      'Team-based strategy',
      'Fast-paced action'
    ],
    tournamentFormat: 'Swiss System',
    arena: 'DFH Stadium (Championship Field)',
    spectatorFeatures: [
      'Multiple camera angles',
      'Player boost meter tracking',
      'Ball trajectory prediction',
      'Team positioning analysis',
      'Goal replay system'
    ]
  },
  {
    name: 'Super Smash Bros',
    icon: '🥊',
    color: 'from-purple-500 via-pink-500 to-rose-500',
    description: 'Ultimate fighting game featuring iconic characters in epic battles',
    prizePool: '$200,000',
    teams: 24,
    format: 'Best of 3 (Groups), Best of 5 (Finals)',
    duration: '6-8 minutes per game',
    developer: 'Nintendo',
    releaseYear: 2018,
    genre: 'Fighting Platformer',
    platforms: ['Nintendo Switch'],
    features: [
      '1v1 competitive matches',
      '80+ playable characters',
      'Platform fighting mechanics',
      'Item and stage variety',
      'Technical skill showcase'
    ],
    tournamentFormat: 'Double Elimination',
    legalStages: ['Battlefield', 'Final Destination', 'Smashville', 'Town & City', 'Kalos Pokémon League'],
    spectatorFeatures: [
      'Character matchup analysis',
      'Damage percentage tracking',
      'Stock count monitoring',
      'Stage control indicators',
      'Combo counter display'
    ]
  }
];

export const getGameByName = (name) => {
  return games.find(game => game.name.toLowerCase() === name.toLowerCase());
};

export const getTotalPrizePool = () => {
  return games.reduce((total, game) => {
    const amount = parseInt(game.prizePool.replace(/[$,]/g, ''));
    return total + amount;
  }, 0);
};

export const getTotalTeams = () => {
  return games.reduce((total, game) => total + game.teams, 0);
};


