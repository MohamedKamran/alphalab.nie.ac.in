import React from 'react';
import { Cpu, Code, Lightbulb, Users } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: 'Hardware Exploration',
      description: 'Access to cutting-edge hardware components and tools for prototyping and experimentation.'
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: 'Programming Excellence',
      description: 'Learn advanced programming techniques and implement them in real-world applications.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
      title: 'Innovation Hub',
      description: 'A space designed to foster creativity and transform ideas into tangible projects.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Collaborative Environment',
      description: 'Work alongside peers, mentors, and industry experts to develop collaborative solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About ALPHA Lab</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            The Advanced Laboratory for Programming and Hardware Analysis (ALPHA) is the first Tinkerer Lab in Karnataka and the first Twin Lab for India, designed to bridge the gap between theoretical knowledge and practical applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              To create an ecosystem that nurtures innovation, technical excellence, and entrepreneurial mindset among students through hands-on learning experiences.
            </p>
            <p className="text-gray-600">
              We aim to develop problem-solvers who can address real-world challenges through technology and creative thinking.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-4">
              To establish ALPHA Lab as a center of excellence that produces industry-ready professionals and innovative solutions with societal impact.
            </p>
            <p className="text-gray-600">
              We envision becoming a model for educational institutions across India in how technology education can be reimagined.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};