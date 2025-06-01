import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsGrid from './components/EventsGrid';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { setupScrollAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'EventFinder | Discover Events Near You';
    
    // Initialize animations
    setupScrollAnimations();
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <EventsGrid />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;