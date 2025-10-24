import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Landing Page Components
import HeroSection from './components/landing/HeroSection';
import AboutSection from './components/landing/AboutSection';
import GamesSection from './components/landing/GamesSection';
import RostersSection from './components/landing/RostersSection';
import LivestreamsSection from './components/landing/LivestreamsSection';
import ScheduleSection from './components/landing/ScheduleSection';
import TicketingSection from './components/landing/TicketingSection';
import VenueSection from './components/landing/VenueSection';
import SponsorsSection from './components/landing/SponsorsSection';
import MobileAppSection from './components/landing/MobileAppSection';
import NewsletterSection from './components/landing/NewsletterSection';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      {/* Landing Page Sections */}
      <div className="pt-16">
        <HeroSection />
      <AboutSection />
      <GamesSection />
      <RostersSection />
      <LivestreamsSection />
      <ScheduleSection />
      <TicketingSection />
      <VenueSection />
      <SponsorsSection />
      <MobileAppSection />
      <NewsletterSection />
      </div>

      <Footer />
    </div>
  );
};

export default App;


