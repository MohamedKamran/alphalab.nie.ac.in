import React from 'react';

export const Partners = () => {
  const partners = [
    {
      name: 'NIE Mysore',
      logo: 'https://images.pexels.com/photos/8636590/pexels-photo-8636590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'The National Institute of Engineering, Mysore, a premier educational institution providing quality education since 1946.'
    },
    {
      name: 'Maker Bhawan Foundation',
      logo: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A non-profit organization dedicated to fostering maker culture and innovation in educational institutions.'
    },
    {
      name: 'Lenovo',
      logo: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A global technology leader providing innovative hardware and cutting-edge solutions.'
    },
    {
      name: 'Motorola',
      logo: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A pioneer in mobile communications technology, committed to innovation and excellence.'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            ALPHA Lab is made possible through the collaborative efforts of leading institutions and technology companies committed to advancing education and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
              <p className="text-gray-600 flex-grow">{partner.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">The First Twin Lab for India</h3>
          <p className="text-blue-100 max-w-3xl mx-auto">
            As the first Twin Lab in India, ALPHA Lab represents a milestone in collaborative educational initiatives, setting a precedent for future partnerships between academia and industry.
          </p>
        </div>
      </div>
    </section>
  );
};