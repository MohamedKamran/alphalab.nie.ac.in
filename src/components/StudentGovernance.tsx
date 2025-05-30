import React, { useState } from 'react';
import { Users, Mail, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

export const StudentGovernance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const students = [
    {
      name: 'Student A',
      role: 'President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '4th Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.a@example.com' }
    },
    {
      name: 'Student B',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '3rd Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.b@example.com' }
    },
    {
      name: 'Student C',
      role: 'Secretary',
      image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '4th Year',
      department: 'Mechanical',
      social: { linkedin: '#', twitter: '#', email: 'student.c@example.com' }
    },
    {
      name: 'Student D',
      role: 'Treasurer',
      image: 'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '3rd Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.d@example.com' }
    },
    {
      name: 'Student E',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '4th Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.e@example.com' }
    },
    {
      name: 'Student F',
      role: 'Project Coordinator',
      image: 'https://images.pexels.com/photos/2379009/pexels-photo-2379009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '3rd Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.f@example.com' }
    },
    {
      name: 'Student G',
      role: 'Events Coordinator',
      image: 'https://images.pexels.com/photos/2379010/pexels-photo-2379010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2nd Year',
      department: 'Mechanical',
      social: { linkedin: '#', twitter: '#', email: 'student.g@example.com' }
    },
    {
      name: 'Student H',
      role: 'Documentation Lead',
      image: 'https://images.pexels.com/photos/2379011/pexels-photo-2379011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '3rd Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.h@example.com' }
    },
    {
      name: 'Student I',
      role: 'Outreach Coordinator',
      image: 'https://images.pexels.com/photos/2379012/pexels-photo-2379012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '2nd Year',
      department: 'Computer Science',
      social: { linkedin: '#', twitter: '#', email: 'student.i@example.com' }
    },
    {
      name: 'Student J',
      role: 'Research Assistant',
      image: 'https://images.pexels.com/photos/2379013/pexels-photo-2379013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: '4th Year',
      department: 'Electronics',
      social: { linkedin: '#', twitter: '#', email: 'student.j@example.com' }
    }
  ];

  const totalSlides = Math.ceil(students.length / 5);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="student-governance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Governance</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated student leaders who help manage and coordinate various activities at ALPHA Lab.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6">
                  {students.slice(slideIndex * 5, (slideIndex + 1) * 5).map((student, index) => (
                    <div 
                      key={index}
                      className="flex-1 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-[400px]"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={student.image} 
                          alt={student.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800">{student.name}</h3>
                        <p className="text-blue-600 text-sm mb-1">{student.role}</p>
                        <p className="text-gray-600 text-xs mb-2">{student.year} • {student.department}</p>
                        <div className="flex space-x-2">
                          <a href={student.social.linkedin} className="text-gray-400 hover:text-blue-600">
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a href={student.social.twitter} className="text-gray-400 hover:text-blue-500">
                            <Twitter className="h-4 w-4" />
                          </a>
                          <a href={`mailto:${student.social.email}`} className="text-gray-400 hover:text-red-500">
                            <Mail className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};