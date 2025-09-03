import { Linkedin, Twitter, Mail, Users as UsersIcon, Award, Target } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Lab Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading innovation in hardware design and embedded systems with 15+ years of experience in academia and industry.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'director@alphalab.nie.ac.in'
      },
      achievements: ['PhD in Electronics', '50+ Research Papers', 'IEEE Fellow']
    },
    {
      name: 'Prof. Priya Sharma',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Specialist in IoT, robotics, and AI with a passion for mentoring the next generation of innovators.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'tech@alphalab.nie.ac.in'
      },
      achievements: ['M.Tech in Robotics', 'Google Developer Expert', '30+ Patents']
    },
    {
      name: 'Mr. Arjun Patel',
      role: 'Industry Liaison',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Bridging academia and industry, facilitating partnerships that drive real-world innovation and impact.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'liaison@alphalab.nie.ac.in'
      },
      achievements: ['MBA Strategy', '100+ Partnerships', 'Startup Mentor']
    },
    {
      name: 'Dr. Sneha Reddy',
      role: 'Research Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Coordinating cutting-edge research initiatives and fostering collaborative innovation across disciplines.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'research@alphalab.nie.ac.in'
      },
      achievements: ['PhD in Computer Science', 'TED Speaker', '20+ Awards']
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <UsersIcon className="w-4 h-4 mr-2" />
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            The Minds Behind
            <span className="gradient-text block">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our diverse team of experts, researchers, and visionaries work together to 
            create an environment where breakthrough innovations come to life.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl shadow-lg card-hover border border-gray-100 overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a 
                      href={member.social.linkedin} 
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors shadow-lg"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-400 transition-colors shadow-lg"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors shadow-lg"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Achievements */}
                  <div className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <Award className="w-3 h-3 mr-2 text-yellow-500" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Collective Impact
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together, our team brings decades of experience and hundreds of achievements to ALPHA Lab.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Years Combined Experience', icon: Target },
              { number: '200+', label: 'Research Publications', icon: Award },
              { number: '150+', label: 'Industry Partnerships', icon: UsersIcon },
              { number: '1000+', label: 'Students Mentored', icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-gray-500 font-medium">Ready to innovate together?</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};