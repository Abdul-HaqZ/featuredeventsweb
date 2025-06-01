import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { Event } from '../types/Event';
import { getEvents } from '../data/events';
import { Filter } from 'lucide-react';

const EventsGrid: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading events from an API
    const loadEvents = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        const eventsData = getEvents();
        setEvents(eventsData);
        setFilteredEvents(eventsData);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  const filterEvents = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(events.map(event => event.category)))];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and register for exciting events happening around you
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <div className="flex items-center text-gray-600 mb-2 mr-2">
            <Filter className="h-5 w-5 mr-2" />
            <span>Filter by:</span>
          </div>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => filterEvents(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <>
            {filteredEvents.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">No events found for this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                  <div 
                    key={event.id} 
                    className="opacity-0 animate-fade-in-up" 
                    style={{
                      animationDelay: `${(filteredEvents.indexOf(event) % 3) * 0.1}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* View more button */}
        {filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-transparent border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
              View More Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsGrid;