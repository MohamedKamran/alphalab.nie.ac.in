import { Handshake, Award } from 'lucide-react';

export const Partners = () => {
  const partners = [
    {
      name: 'NIE Mysore',
      logo: 'https://images.pexels.com/photos/8636590/pexels-photo-8636590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'The National Institute of Engineering, Mysore - a premier educational institution providing quality education since 1946.',
      role: 'Educational Partner',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Maker Bhawan Foundation',
      logo: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A non-profit organization dedicated to fostering maker culture and innovation in educational institutions.',
      role: 'Innovation Partner',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Lenovo',
      logo: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A global technology leader providing innovative hardware and cutting-edge solutions for next-generation learning.',
      role: 'Technology Partner',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Motorola',
      logo: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A pioneer in mobile communications technology, committed to innovation and excellence in connectivity.',
      role: 'Industry Partner',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Handshake className="w-4 h-4 mr-2" />
            Strategic Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Powered by
            <span className="gradient-text block">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ALPHA Lab thrives through collaborative partnerships with leading institutions 
            and technology companies committed to advancing education and innovation.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg card-hover border border-gray-100 overflow-hidden h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${partner.color} rounded-full`}>
                    <span className="text-white text-xs font-semibold">{partner.role}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Twin Lab Highlight */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                India's First Twin Lab Initiative
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                ALPHA Lab represents a groundbreaking milestone in collaborative educational initiatives, 
                setting a new standard for partnerships between academia and industry across India.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {[
                  { value: '4', label: 'Strategic Partners' },
                  { value: '1st', label: 'Twin Lab in India' },
                  { value: '24/7', label: 'Collaborative Support' },
                  { value: '∞', label: 'Innovation Potential' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};