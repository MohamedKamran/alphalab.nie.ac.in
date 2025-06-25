import React, { useState } from 'react';
import { Users, Mail, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

export const StudentGovernance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const students = [
    {
      name: 'Student A',
      role: 'President',
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Student+A',
      year: '4th Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.a@example.com' }
    },
    {
      name: 'Student B',
      role: 'Vice President',
      image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Student+B',
      year: '3rd Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.b@example.com' }
    },
    {
      name: 'Student C',
      role: 'Secretary',
      image: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Student+C',
      year: '4th Year',
      department: 'Mechanical',
      social: { linkedin: '#', twitter: '#', email: 'student.c@example.com' }
    },
    {
      name: 'Student D',
      role: 'Treasurer',
      image: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Student+D',
      year: '3rd Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.d@example.com' }
    },
    {
      name: 'Student E',
      role: 'Technical Lead',
      image: 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Student+E',
      year: '4th Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.e@example.com' }
    },
    {
      name: 'Student F',
      role: 'Project Coordinator',
      image: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Student+F',
      year: '3rd Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.f@example.com' }
    },
    {
      name: 'Student G',
      role: 'Events Coordinator',
      image: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Student+G',
      year: '2nd Year',
      department: 'Mechanical',
      social: { linkedin: '#', twitter: '#', email: 'student.g@example.com' }
    },
    {
      name: 'Student H',
      role: 'Documentation Lead',
      image: 'https://via.placeholder.com/400x300/14B8A6/FFFFFF?text=Student+H',
      year: '3rd Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.h@example.com' }
    },
    {
      name: 'Student I',
      role: 'Outreach Coordinator',
      image: 'https://via.placeholder.com/400x300/F97316/FFFFFF?text=Student+I',
      year: '2nd Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.i@example.com' }
    },
    {
      name: 'Student J',
      role: 'Research Assistant',
      image: 'https://via.placeholder.com/400x300/84CC16/FFFFFF?text=Student+J',
      year: '4th Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.j@example.com' }
    }
  ];

  // Responsive items per slide
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile: 1 item
      if (window.innerWidth < 1024) return 2; // Tablet: 2 items
      if (window.innerWidth < 1280) return 3; // Desktop small: 3 items
      return 4; // Desktop large: 4 items
    }
    return 4;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  
  // Update items per slide on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(students.length / itemsPerSlide);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="student-governance" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Student Governance</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated student leaders who help manage and coordinate various activities at ALPHA Lab.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className={`grid gap-6 ${
                    itemsPerSlide === 1 ? 'grid-cols-1' :
                    itemsPerSlide === 2 ? 'grid-cols-2' :
                    itemsPerSlide === 3 ? 'grid-cols-3' : 'grid-cols-4'
                  }`}>
                    {students
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((student, index) => (
                      <div 
                        key={index}
                        className="bg-white rounded-xl overflow-hidden"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={student.image} 
                            alt={student.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg text-gray-800 mb-1">{student.name}</h3>
                          <p className="text-blue-600 font-semibold text-sm mb-2">{student.role}</p>
                          <p className="text-gray-500 text-sm mb-4 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            {student.year} • {student.department}
                          </p>
                          <div className="flex space-x-3 pt-2 border-t border-gray-100">
                            <a 
                              href={student.social.linkedin} 
                              className="text-gray-400 p-1 rounded-full"
                              aria-label={`${student.name}'s LinkedIn`}
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                            <a 
                              href={student.social.twitter} 
                              className="text-gray-400 p-1 rounded-full"
                              aria-label={`${student.name}'s Twitter`}
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                            <a 
                              href={`mailto:${student.social.email}`} 
                              className="text-gray-400 p-1 rounded-full"
                              aria-label={`Email ${student.name}`}
                            >
                              <Mail className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white p-3 rounded-full z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-3 rounded-full z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Navigation Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};