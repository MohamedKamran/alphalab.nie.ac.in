import { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../data/events';

export const Events = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentEventIndex];

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
        
        {/* Events Carousel */}
        <div className="mb-8">
          <div className="relative w-full px-4 md:px-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentEvent.title}</h3>
                  <p className="mb-6 text-blue-100">{currentEvent.description}</p>
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
                    <span className="text-gray-700">{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">{currentEvent.time}</span>
                  </div>
                  <div className="flex items-center mb-6">
                    <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">{currentEvent.location}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold mb-2">What You'll Learn</h4>
                    <ul className="text-gray-600 space-y-2">
                      {currentEvent.learningPoints.map((point, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevEvent}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 z-10 border border-gray-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextEvent}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 z-10 border border-gray-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  index === currentEventIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};