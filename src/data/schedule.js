export const schedule = {
  "May 6, 2026": {
    day: "Tuesday",
    date: "May 6, 2026",
    events: [
      {
        time: "10:00 AM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Sentinels vs Fnatic",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "1:00 PM",
        stage: "Stage 2",
        game: "Rocket League",
        match: "Karmine Corp vs Team BDS",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "3:00 PM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "MkLeo vs Sparg0",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "5:00 PM",
        stage: "Stage 2",
        game: "Valorant",
        match: "Paper Rex vs 100 Thieves",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "7:00 PM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Moist Esports vs GenG",
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
        match: "acola vs Light",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "12:00 PM",
        stage: "Stage 2",
        game: "Valorant",
        match: "Team Liquid vs GenG",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "3:00 PM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Complexity vs G2 Esports",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "5:00 PM",
        stage: "Stage 2",
        game: "Super Smash Bros",
        match: "Tweek vs Kameme",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "7:00 PM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Sentinels vs Paper Rex",
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
        match: "Karmine Corp vs Moist Esports",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "12:00 PM",
        stage: "Stage 2",
        game: "Super Smash Bros",
        match: "MkLeo vs acola",
        type: "Group Stage",
        duration: "1 hour"
      },
      {
        time: "2:00 PM",
        stage: "Main Stage",
        game: "Valorant",
        match: "Fnatic vs 100 Thieves",
        type: "Group Stage",
        duration: "2 hours"
      },
      {
        time: "5:00 PM",
        stage: "Stage 2",
        game: "Rocket League",
        match: "Team BDS vs GenG",
        type: "Group Stage",
        duration: "1.5 hours"
      },
      {
        time: "7:00 PM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "Sparg0 vs Light",
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
        match: "Paper Rex vs Team Liquid",
        type: "Quarterfinals",
        duration: "2.5 hours"
      },
      {
        time: "1:00 PM",
        stage: "Stage 2",
        game: "Rocket League",
        match: "Karmine Corp vs Complexity",
        type: "Quarterfinals",
        duration: "2 hours"
      },
      {
        time: "4:00 PM",
        stage: "Main Stage",
        game: "Super Smash Bros",
        match: "MkLeo vs Tweek",
        type: "Quarterfinals",
        duration: "1.5 hours"
      },
      {
        time: "6:00 PM",
        stage: "Stage 2",
        game: "Valorant",
        match: "Sentinels vs GenG",
        type: "Quarterfinals",
        duration: "2.5 hours"
      },
      {
        time: "9:00 PM",
        stage: "Main Stage",
        game: "Rocket League",
        match: "Team BDS vs G2 Esports",
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
        match: "Sparg0 vs Kameme",
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
