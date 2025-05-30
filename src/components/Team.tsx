import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: 'Mr. X',
      role: 'Lab Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With over 15 years of experience in hardware design and embedded systems, Mr. X leads the strategic direction of ALPHA Lab.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'director@example.com'
      }
    },
    {
      name: 'Mrs. Y',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'A specialist in IoT and robotics, Mrs. Y oversees technical projects and mentors students in advanced programming.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'tech@example.com'
      }
    },
    {
      name: 'Mr. Z',
      role: 'Industry Liaison',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Mr. Z bridges the gap between academia and industry, facilitating partnerships and ensuring lab initiatives align with industry needs.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'liaison@example.com'
      }
    },
    {
      name: 'Mrs. W',
      role: 'Research Coordinator',
      image: 'https://images.pexels.com/photos/2379xxx/pexels-photo-2379xxx.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Specializing in emerging technologies, Mrs. W coordinates research activities and guides student innovations toward publication.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'research@example.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who guide and support students in their journey of exploration and innovation at ALPHA Lab.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-gray-500 hover:text-red-500 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};