import { useState } from 'react';
import { 
  Cpu, 
  ChevronRight, 
  ChevronLeft, 
  Smartphone, 
  Server, 
  Printer, 
  Wrench, 
  Computer, 
  Users,
  BookOpen,
  Cloud,
  Monitor,
  Zap
} from 'lucide-react';

export const Facilities = () => {
  const [activeTab, setActiveTab] = useState('equipment');
  
  const facilities = [
    {
      id: 'equipment',
      title: 'Equipment & Tools',
      icon: <Wrench className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: '3D Printers', icon: <Printer className="h-6 w-6" />, desc: 'High-precision 3D printers for rapid prototyping and model creation.', color: 'from-purple-500 to-purple-600' },
        { name: 'Development Boards', icon: <Cpu className="h-6 w-6" />, desc: 'Arduino, Raspberry Pi, and advanced microcontroller platforms.', color: 'from-green-500 to-green-600' },
        { name: 'Testing Equipment', icon: <Server className="h-6 w-6" />, desc: 'Professional oscilloscopes, multimeters, and signal generators.', color: 'from-red-500 to-red-600' },
        { name: 'Mobile Devices', icon: <Smartphone className="h-6 w-6" />, desc: 'Latest mobile platforms for app development and testing.', color: 'from-indigo-500 to-indigo-600' },
        { name: 'Workstations', icon: <Computer className="h-6 w-6" />, desc: 'High-performance computers for development and simulation.', color: 'from-yellow-500 to-yellow-600' },
        { name: 'IoT Kits', icon: <Zap className="h-6 w-6" />, desc: 'Comprehensive Internet of Things development ecosystems.', color: 'from-pink-500 to-pink-600' }
      ]
    },
    {
      id: 'spaces',
      title: 'Learning Spaces',
      icon: <Monitor className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      items: [
        { name: 'Maker Space', icon: <Wrench className="h-6 w-6" />, desc: 'Open area for hardware projects and physical prototyping.', color: 'from-blue-500 to-blue-600' },
        { name: 'Collaboration Zone', icon: <Users className="h-6 w-6" />, desc: 'Flexible space designed for team projects and discussions.', color: 'from-orange-500 to-orange-600' },
        { name: 'Quiet Lab', icon: <Computer className="h-6 w-6" />, desc: 'Focused environment for programming and detailed work.', color: 'from-teal-500 to-teal-600' },
        { name: 'Presentation Area', icon: <Monitor className="h-6 w-6" />, desc: 'Space equipped for demonstrations and knowledge sharing.', color: 'from-violet-500 to-violet-600' }
      ]
    },
    {
      id: 'resources',
      title: 'Digital Resources',
      icon: <Server className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      items: [
        { name: 'Digital Library', icon: <BookOpen className="h-6 w-6" />, desc: 'Comprehensive collection of e-books, journals, and research papers.', color: 'from-emerald-500 to-emerald-600' },
        { name: 'Software Licenses', icon: <Computer className="h-6 w-6" />, desc: 'Access to professional-grade development tools and software.', color: 'from-cyan-500 to-cyan-600' },
        { name: 'Online Courses', icon: <Monitor className="h-6 w-6" />, desc: 'Curated learning paths and specialized courses.', color: 'from-rose-500 to-rose-600' },
        { name: 'Cloud Resources', icon: <Cloud className="h-6 w-6" />, desc: 'Scalable computing resources for development and deployment.', color: 'from-sky-500 to-sky-600' }
      ]
    }
  ];
  
  const activeContent = facilities.find(f => f.id === activeTab);

  return (
    <section id="facilities" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Monitor className="w-4 h-4 mr-2" />
            World-Class Facilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Everything You Need to
            <span className="gradient-text block">Build the Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            State-of-the-art equipment, collaborative spaces, and digital resources 
            designed to accelerate innovation and hands-on learning.
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
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeContent?.items.map((item, index) => (
              <div 
                key={index} 
                className="group cursor-pointer fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center mt-16 space-x-4">
          <button 
            className="group bg-white hover:bg-blue-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onClick={() => {
              const currentIndex = facilities.findIndex(f => f.id === activeTab);
              const prevIndex = (currentIndex - 1 + facilities.length) % facilities.length;
              setActiveTab(facilities[prevIndex].id);
            }}
            aria-label="Previous category"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
          <button 
            className="group bg-white hover:bg-blue-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onClick={() => {
              const currentIndex = facilities.findIndex(f => f.id === activeTab);
              const nextIndex = (currentIndex + 1) % facilities.length;
              setActiveTab(facilities[nextIndex].id);
            }}
            aria-label="Next category"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};