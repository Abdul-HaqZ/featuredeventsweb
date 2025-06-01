import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery, 'in', location);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover Events Near You
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Find the perfect events that match your interests. From conferences to concerts, we've got you covered.
        </p>
        
        {/* Search form */}
        <form 
          onSubmit={handleSearch}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8 transition-all hover:shadow-xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200">
              <Search className="ml-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full p-4 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center">
              <MapPin className="ml-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-4 focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white py-4 px-8 font-medium transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </form>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all">
            Conferences
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all">
            Concerts
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all">
            Workshops
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all">
            Sports
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;