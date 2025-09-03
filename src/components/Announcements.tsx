import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Megaphone } from 'lucide-react';
import { announcements } from '../data/announcements';

export const Announcements = () => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const nextAnnouncement = () => {
    setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  // Auto-rotate announcements
  useEffect(() => {
    if (announcements.length > 1) {
      const timer = setInterval(nextAnnouncement, 5000);
      return () => clearInterval(timer);
    }
  }, []);

  if (!announcements.length) return null;

  const currentAnnouncement = announcements[currentAnnouncementIndex];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Megaphone className="w-4 h-4 mr-2" />
              Latest Updates
            </div>
          </div>

          {/* Announcement Card */}
          <div className="relative overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl min-h-[280px] relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                      <span className="glass-morphism text-white text-sm font-semibold px-4 py-2 rounded-xl mb-3 sm:mb-0 self-start">
                        {currentAnnouncement.badge}
                      </span>
                      <span className="text-white/80 text-sm sm:ml-4 font-medium">{currentAnnouncement.date}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                      {currentAnnouncement.title}
                    </h3>
                    
                    <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
                      {currentAnnouncement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            {announcements.length > 1 && (
              <>
                <button
                  onClick={prevAnnouncement}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Previous announcement"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button
                  onClick={nextAnnouncement}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Next announcement"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          
          {/* Carousel Indicators */}
          {announcements.length > 1 && (
            <div className="flex justify-center mt-8 space-x-3">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAnnouncementIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentAnnouncementIndex 
                      ? 'w-8 h-3 bg-blue-500' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to announcement ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
