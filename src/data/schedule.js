export const schedule = {
  "May 6, 2026": {
    day: "Tuesday",
    date: "May 6, 2026",
    events: [
      {
        time: "10:00 AM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Team Phoenix vs Velocity Esports",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "1:00 PM",
        stage: "Stage 2",
        game: "Rocket League",
        match: "Aerial Assassins vs Velocity Vipers",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "3:00 PM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "Elite Warriors vs Combo Kings",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "5:00 PM",
        stage: "Stage 2",
        game: "Valorant",
        match: "Shadow Strike vs Nexus Gaming",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "7:00 PM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Cosmic Carriers vs Turbo Titans",
        type: "Group Stage",
        duration: "1.5 hours"
      }
    ]
  },
  "May 7, 2026": {
    day: "Wednesday",
    date: "May 7, 2026",
    events: [
      {
        time: "10:00 AM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "Tech Masters vs Spike Squad",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "12:00 PM",
        stage: "Stage 2",
        game: "Valorant",
        match: "Crimson Wolves vs Thunder Force",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "3:00 PM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Gravity Defiers vs Sonic Strikers",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "5:00 PM",
        stage: "Stage 2",
        game: "Super Smash Bros",
        match: "Frame Perfect vs Combo Breakers",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "7:00 PM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Team Phoenix vs Shadow Strike",
        type: "Group Stage",
        duration: "2 hours"
      }
    ]
  },
  "May 8, 2026": {
    day: "Thursday",
    date: "May 8, 2026",
    events: [
      {
        time: "10:00 AM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Aerial Assassins vs Cosmic Carriers",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "12:00 PM",
        stage: "Stage 2",
        game: "Super Smash Bros",
        match: "Elite Warriors vs Tech Masters",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "2:00 PM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Velocity Esports vs Nexus Gaming",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "5:00 PM",
        stage: "Stage 2",
        game: "Rocket League",
        match: "Velocity Vipers vs Turbo Titans",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "7:00 PM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "Combo Kings vs Spike Squad",
        type: "Group Stage",
        duration: "1 hour"
      }
    ]
  },
  "May 9, 2026": {
    day: "Friday",
    date: "May 9, 2026",
    events: [
      {
        time: "10:00 AM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Shadow Strike vs Crimson Wolves",
        type: "Quarterfinals",
        duration: "2.5 hours"
      },
      {
        time: "1:00 PM",
        stage: "Stage 2",
        game: "Rocket League",
        match: "Aerial Assassins vs Gravity Defiers",
        type: "Quarterfinals",
        duration: "2 hours"
      },
      {
        time: "4:00 PM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "Elite Warriors vs Frame Perfect",
        type: "Quarterfinals",
        duration: "1.5 hours"
      },
      {
        time: "6:00 PM",
        stage: "Stage 2",
        game: "Valorant",
        match: "Team Phoenix vs Thunder Force",
        type: "Quarterfinals",
        duration: "2.5 hours"
      },
      {
        time: "9:00 PM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Velocity Vipers vs Cosmic Carriers",
        type: "Quarterfinals",
        duration: "2 hours"
      }
    ]
  },
  "May 10, 2026": {
    day: "Saturday",
    date: "May 10, 2026",
    events: [
      {
        time: "10:00 AM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "Combo Kings vs Tech Masters",
        type: "Semifinals",
        duration: "2 hours"
      },
      {
        time: "1:00 PM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Valorant Semifinal 1",
        type: "Semifinals",
        duration: "3 hours"
      },
      {
        time: "5:00 PM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Rocket League Semifinal 1",
        type: "Semifinals",
        duration: "2.5 hours"
      },
      {
        time: "8:00 PM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "Super Smash Bros GRAND FINAL",
        type: "GRAND FINAL",
        duration: "3 hours"
      }
    ]
  }
};

export const getScheduleByDay = (day) => {
  return schedule[day] || null;
};

export const getAllEvents = () => {
  return Object.values(schedule).flatMap(day => day.events);
};

export const getTodaysEvents = () => {
  const today = new Date();
  const todayString = today.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  return schedule[todayString] || null;
};

export const getUpcomingEvents = () => {
  const allEvents = getAllEvents();
  const now = new Date();
  
  return allEvents.filter(event => {
    // This is a simplified check - in a real app, you'd parse the time properly
    return true; // For demo purposes, show all events
  });
};
