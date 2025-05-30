import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      title: 'Smart Agriculture System',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'An IoT-based system for monitoring soil moisture, temperature, and automating irrigation in farms.',
      tech: ['Arduino', 'IoT', 'Sensors', 'Mobile App']
    },
    {
      title: 'Autonomous Delivery Robot',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A small-scale robot designed to navigate indoor environments and deliver items autonomously.',
      tech: ['Raspberry Pi', 'Computer Vision', 'Path Planning', 'Robotics']
    },
    {
      title: 'Renewable Energy Monitor',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A system to monitor and optimize energy production from solar panels and wind turbines.',
      tech: ['Data Analytics', 'Web Dashboard', 'Energy Systems', 'Arduino']
    },
    {
      title: 'Medical Assistance Wearable',
      image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A wearable device that monitors vital signs and alerts emergency services in case of anomalies.',
      tech: ['Wearable Tech', 'Health Monitoring', 'Mobile App', 'Cloud']
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of the innovative projects developed by students and researchers at the ALPHA Lab.
          </p>
        </div>
        
        {/* Project Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-96 bg-gray-200">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href="#" 
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                      >
                        Learn more
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};