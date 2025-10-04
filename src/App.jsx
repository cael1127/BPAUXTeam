import React, { useState } from 'react';
import Navigation from './components/Navigation';
import BrandingSection from './components/BrandingSection';
import PersonasSection from './components/PersonasSection';
import ArchitectureSection from './components/ArchitectureSection';
import UXFlowSection from './components/UXFlowSection';
import AccessibilitySection from './components/AccessibilitySection';
import PrototypeSection from './components/PrototypeSection';
import PresentationSection from './components/PresentationSection';
import OptionalEnhancementsSection from './components/OptionalEnhancementsSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('branding');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedPersona, setExpandedPersona] = useState(null);
  const [activeMobileScreen, setActiveMobileScreen] = useState(0);

  const renderSection = () => {
    switch(activeSection) {
      case 'branding':
        return <BrandingSection />;
      case 'personas':
        return <PersonasSection 
          expandedPersona={expandedPersona} 
          setExpandedPersona={setExpandedPersona} 
        />;
      case 'architecture':
        return <ArchitectureSection 
          activeMobileScreen={activeMobileScreen} 
          setActiveMobileScreen={setActiveMobileScreen} 
        />;
      case 'uxflow':
        return <UXFlowSection />;
      case 'accessibility':
        return <AccessibilitySection />;
      case 'prototype':
        return <PrototypeSection />;
      case 'presentation':
        return <PresentationSection />;
      case 'enhancements':
        return <OptionalEnhancementsSection />;
      default:
        return <BrandingSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;


