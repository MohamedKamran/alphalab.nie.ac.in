import React, { useState } from 'react';
import { Cpu, ChevronRight, ChevronLeft, Smartphone, Server, Printer, Wrench, Computer } from 'lucide-react';

export const Facilities = () => {
  const [activeTab, setActiveTab] = useState('equipment');
  
  const facilities = [
    {
      id: 'equipment',
      title: 'Equipment & Tools',
      icon: <Wrench className="h-6 w-6" />,
      items: [
        { name: '3D Printers', icon: <Printer className="h-5 w-5" />, desc: 'High-precision 3D printers for prototyping and model creation.' },
        { name: 'Development Boards', icon: <Cpu className="h-5 w-5" />, desc: 'Arduino, Raspberry Pi, and other microcontroller platforms.' },
        { name: 'Testing Equipment', icon: <Server className="h-5 w-5" />, desc: 'Oscilloscopes, multimeters, and signal generators.' },
        { name: 'Mobile Devices', icon: <Smartphone className="h-5 w-5" />, desc: 'Various mobile platforms for app development and testing.' },
        { name: 'Workstations', icon: <Computer className="h-5 w-5" />, desc: 'High-performance computers for software development and simulation.' },
        { name: 'IoT Kits', icon: <Cpu className="h-5 w-5" />, desc: 'Comprehensive Internet of Things development kits and sensors.' }
      ]
    },
    {
      id: 'spaces',
      title: 'Learning Spaces',
      icon: <Cpu className="h-6 w-6" />,
      items: [
        { name: 'Maker Space', icon: <Wrench className="h-5 w-5" />, desc: 'Open area for hardware projects and physical prototyping.' },
        { name: 'Collaboration Zone', icon: <Users className="h-5 w-5" />, desc: 'Flexible space designed for team projects and discussions.' },
        { name: 'Quiet Lab', icon: <Computer className="h-5 w-5" />, desc: 'Focused environment for programming and detailed work.' },
        { name: 'Presentation Area', icon: <Smartphone className="h-5 w-5" />, desc: 'Space equipped for demonstrations and knowledge sharing.' }
      ]
    },
    {
      id: 'resources',
      title: 'Digital Resources',
      icon: <Server className="h-6 w-6" />,
      items: [
        { name: 'Digital Library', icon: <Cpu className="h-5 w-5" />, desc: 'Comprehensive collection of e-books, journals, and research papers.' },
        { name: 'Software Licenses', icon: <Computer className="h-5 w-5" />, desc: 'Access to professional-grade development tools and software.' },
        { name: 'Online Courses', icon: <Smartphone className="h-5 w-5" />, desc: 'Curated learning paths and specialized courses.' },
        { name: 'Cloud Resources', icon: <Server className="h-5 w-5" />, desc: 'Computing resources for development and deployment.' }
      ]
    }
  ];
  
  const activeContent = facilities.find(f => f.id === activeTab);

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            ALPHA Lab is equipped with state-of-the-art facilities to provide students with hands-on experience in programming and hardware analysis.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {facilities.map((facility) => (
            <button
              key={facility.id}
              className={`flex items-center px-6 py-3 rounded-full mb-2 transition-all duration-300 ${
                activeTab === facility.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(facility.id)}
            >
              <span className="mr-2">{facility.icon}</span>
              {facility.title}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeContent?.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel controls */}
        <div className="flex justify-center mt-10">
          <button 
            className="mr-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-all duration-300"
            onClick={() => {
              const currentIndex = facilities.findIndex(f => f.id === activeTab);
              const prevIndex = (currentIndex - 1 + facilities.length) % facilities.length;
              setActiveTab(facilities[prevIndex].id);
            }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button 
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-all duration-300"
            onClick={() => {
              const currentIndex = facilities.findIndex(f => f.id === activeTab);
              const nextIndex = (currentIndex + 1) % facilities.length;
              setActiveTab(facilities[nextIndex].id);
            }}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Define the Users icon component since it's used but not imported
const Users = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);