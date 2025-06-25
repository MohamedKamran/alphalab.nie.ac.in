import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Announcements = () => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  
  const announcements = [
    {
      title: 'New AI & Machine Learning Track Opens',
      date: 'June 28, 2025',
      description: 'We\'re excited to announce our new specialized track in AI and Machine Learning, featuring hands-on workshops, industry partnerships, and cutting-edge research opportunities.',
      badge: 'New Program'
    },
    {
      title: 'Summer Internship Program 2025',
      date: 'June 25, 2025',
      description: 'Applications are now open for our intensive summer internship program. Work on real projects with industry mentors and gain valuable experience.',
      badge: 'Applications Open'
    },
    {
      title: 'Lab Equipment Upgrade Complete',
      date: 'June 20, 2025',
      description: 'Our lab has been equipped with the latest 3D printers, IoT development kits, and testing equipment to enhance your learning experience.',
      badge: 'Facility Update'
    },
    {
      title: 'Partnership with Tech Giants',
      date: 'June 15, 2025',
      description: 'ALPHA Lab announces new partnerships with leading technology companies to provide exclusive workshops and career opportunities for students.',
      badge: 'Partnership'
    }
  ];

  const nextAnnouncement = () => {
    setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const currentAnnouncement = announcements[currentAnnouncementIndex];

  return (
    <div className="mb-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 mt-8">
      <div className="relative">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-lg min-h-48 md:h-48">
          <div className="flex h-full">
            <div className="w-full p-4 sm:p-6 md:p-8 text-white flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-3">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 sm:mb-0 self-start">
                  {currentAnnouncement.badge}
                </span>
                <span className="text-white/80 text-xs sm:text-sm sm:ml-4">{currentAnnouncement.date}</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 line-clamp-2">
                {currentAnnouncement.title}
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                {currentAnnouncement.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        {announcements.length > 1 && (
          <>
            <button
              onClick={prevAnnouncement}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-1.5 sm:p-2 rounded-full shadow-md transition-all duration-200 z-10"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            
            <button
              onClick={nextAnnouncement}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-1.5 sm:p-2 rounded-full shadow-md transition-all duration-200 z-10"
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </>
        )}
      </div>
      
      {/* Carousel Indicators */}
      {announcements.length > 1 && (
        <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAnnouncementIndex(index)}
              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-200 ${
                index === currentAnnouncementIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
