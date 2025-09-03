import { Heart, ExternalLink, ArrowUp, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img 
                    src="/image.png" 
                    alt="ALPHA Lab" 
                    className="h-12 w-auto rounded-2xl" 
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
                </div>
                <div className="font-bold text-xl">ALPHA Lab</div>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Pioneering innovation through collaborative research and development. 
                Empowering the next generation of makers and innovators.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-200">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">NIE Mysore, Karnataka, India</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">+91 (821) 248-0472</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">alpha@nie.ac.in</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-blue-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Partners', href: '#partners' },
                  { name: 'Facilities', href: '#facilities' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Team', href: '#team' },
                  { name: 'Events', href: '#events' },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Student Portal', href: '#' },
                  { name: 'Equipment Booking', href: '#' },
                  { name: 'Project Gallery', href: '#' },
                  { name: 'Workshop Materials', href: '#' },
                  { name: 'Research Papers', href: '#' },
                  { name: 'Documentation', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                      <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Stay Connected</h4>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Subscribe to get the latest updates on innovations, events, and opportunities at ALPHA Lab.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-blue-200 text-center">
                &copy; {new Date().getFullYear()} ALPHA Lab, NIE Mysore. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-blue-300 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <p className="text-blue-200 flex items-center text-sm">
                Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> in Mysore, India
              </p>
              <button 
                onClick={scrollToTop}
                className="group bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-blue-300 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};