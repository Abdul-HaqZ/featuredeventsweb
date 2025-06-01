import { Event } from '../types/Event';

export const getEvents = (): Event[] => {
  return [
    {
      id: 1,
      title: "Tech Innovation Summit 2025",
      date: "2025-06-15",
      time: "09:00 AM - 05:00 PM",
      location: "San Francisco Convention Center",
      description: "Join industry leaders and innovators for a day of inspiring talks, workshops, and networking opportunities focused on the latest technological advancements and future trends.",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Conference",
      attendees: 1250
    },
    {
      id: 2,
      title: "Summer Music Festival",
      date: "2025-07-10",
      time: "12:00 PM - 10:00 PM",
      location: "Central Park, New York",
      description: "Experience a day of amazing live performances across multiple stages featuring both established artists and emerging talents in various music genres.",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Concert",
      attendees: 5000
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      date: "2025-05-22",
      time: "10:00 AM - 04:00 PM",
      location: "Online Virtual Event",
      description: "Learn cutting-edge digital marketing strategies from industry experts. This comprehensive masterclass covers SEO, content marketing, social media, and paid advertising tactics.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Workshop",
      attendees: 750
    },
    {
      id: 4,
      title: "International Food & Wine Festival",
      date: "2025-08-05",
      time: "11:00 AM - 08:00 PM",
      location: "Downtown Culinary District, Chicago",
      description: "Savor culinary delights from around the world with over 50 food vendors, wine tastings, cooking demonstrations, and cultural performances.",
      image: "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Festival",
      attendees: 3200
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      date: "2025-09-18",
      time: "06:00 PM - 09:00 PM",
      location: "Innovation Hub, Austin",
      description: "Watch as promising startups pitch their innovative ideas to a panel of investors and industry experts. Network with entrepreneurs and investors in the tech ecosystem.",
      image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      attendees: 400
    },
    {
      id: 6,
      title: "Marathon for Charity",
      date: "2025-04-12",
      time: "07:00 AM - 12:00 PM",
      location: "Waterfront Park, Seattle",
      description: "Join thousands of runners in this charity marathon to raise funds for children's education. All skill levels welcome with 5K, 10K, and full marathon options.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sports",
      attendees: 2800
    },
    {
      id: 7,
      title: "Art & Design Exhibition",
      date: "2025-10-05",
      time: "10:00 AM - 07:00 PM",
      location: "Modern Art Gallery, Los Angeles",
      description: "Explore captivating works from emerging and established artists across various mediums including painting, sculpture, photography, and digital art.",
      image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Exhibition",
      attendees: 1200
    },
    {
      id: 8,
      title: "Blockchain & Cryptocurrency Summit",
      date: "2025-11-14",
      time: "09:00 AM - 06:00 PM",
      location: "Tech Hub, Miami",
      description: "Dive deep into the world of blockchain technology and cryptocurrencies with expert panels, technical workshops, and networking with industry pioneers.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Conference",
      attendees: 900
    },
    {
      id: 9,
      title: "Wellness & Yoga Retreat",
      date: "2025-06-25",
      time: "All Day Event",
      location: "Mountain Resort, Colorado",
      description: "Rejuvenate your mind and body with three days of yoga sessions, meditation, healthy cuisine, and wellness workshops led by certified instructors.",
      image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Workshop",
      attendees: 180
    }
  ];
};