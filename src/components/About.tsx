import { Cpu, Code, Lightbulb, Users, Target, Eye } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Hardware Exploration',
      description: 'Access to cutting-edge hardware components and tools for prototyping and experimentation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Programming Excellence',
      description: 'Learn advanced programming techniques and implement them in real-world applications.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation Hub',
      description: 'A space designed to foster creativity and transform ideas into tangible projects.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative Environment',
      description: 'Work alongside peers, mentors, and industry experts to develop collaborative solutions.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            About ALPHA Lab
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Pioneering the Future of
            <span className="gradient-text block">Innovation & Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The first Tinkerer Lab in Karnataka, bridging the gap between theoretical knowledge 
            and practical applications through cutting-edge technology and collaborative innovation.
          </p>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="group">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg card-hover border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To create an ecosystem that nurtures innovation, technical excellence, and entrepreneurial 
                mindset among students through hands-on learning experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We develop problem-solvers who can address real-world challenges through technology and creative thinking.
              </p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg card-hover border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To establish ALPHA Lab as a center of excellence that produces industry-ready professionals 
                and innovative solutions with societal impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Becoming a model for educational institutions across India in reimagining technology education.
              </p>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-gray-500 font-medium">Empowering Innovation</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};