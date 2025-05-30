import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const Events = () => {
  const events = [
    {
      title: 'Introduction to IoT Workshop',
      date: 'June 15, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'ALPHA Lab, NIE Mysore',
      description: 'A hands-on workshop covering the basics of IoT, sensor integration, and data visualization.',
      featured: true
    },
    {
      title: 'Hackathon: Smart City Solutions',
      date: 'July 8-10, 2025',
      time: '48-hour event',
      location: 'ALPHA Lab, NIE Mysore',
      description: 'A 48-hour hackathon challenging participants to develop innovative solutions for urban challenges.',
      featured: false
    },
    {
      title: 'Industry Talk: Future of Hardware',
      date: 'July 25, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Online Webinar',
      description: 'Join industry experts from Lenovo as they discuss emerging trends in hardware technology.',
      featured: false
    },
    {
      title: 'Robotics Bootcamp',
      date: 'August 5-7, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'ALPHA Lab, NIE Mysore',
      description: 'An intensive 3-day bootcamp on robotics fundamentals, programming, and project development.',
      featured: false
    }
  ];
  
  // Filter featured event
  const featuredEvent = events.find(event => event.featured);
  const regularEvents = events.filter(event => !event.featured);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events & Workshops</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our upcoming events, workshops, and learning opportunities designed to enhance your skills and knowledge.
          </p>
        </div>
        
        {/* Featured Event */}
        {featuredEvent && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                  Featured Event
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredEvent.title}</h3>
                <p className="mb-6 text-blue-100">{featuredEvent.description}</p>
                <a 
                  href="#" 
                  className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors self-start"
                >
                  Register Now
                </a>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">{featuredEvent.date}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">{featuredEvent.time}</span>
                </div>
                <div className="flex items-center mb-6">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">{featuredEvent.location}</span>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold mb-2">What You'll Learn</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                      Fundamentals of IoT architecture
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                      Sensor integration and data collection
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                      Real-time data visualization techniques
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                      Building complete IoT solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
              <div className="flex items-center mb-2">
                <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-600 text-sm">{event.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-600 text-sm">{event.time}</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-600 text-sm">{event.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};