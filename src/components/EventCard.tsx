import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Event } from '../types/Event';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { 
    id,
    title, 
    date, 
    time, 
    location, 
    description, 
    image, 
    category,
    attendees
  } = event;

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image with category label */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 bg-blue-900 text-white px-3 py-1 text-sm">
          {category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-blue-900" />
            <span>{formatDate(date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-blue-900" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-blue-900" />
            <span>{location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <User className="h-4 w-4 mr-2 text-blue-900" />
            <span>{attendees} attending</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        
        <button className="mt-auto w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded transition-colors duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;