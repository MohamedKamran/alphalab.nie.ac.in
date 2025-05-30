import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full inline-flex items-center mb-6">
            <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              First in Karnataka
            </span>
            <span className="text-white text-xs ml-2 mr-2">
              The first Tinkerer Lab in the state
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Advanced Laboratory for Programming and Hardware Analysis
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            A collaborative initiative by NIE Mysore, Maker Bhawan Foundation, Lenovo, and Motorola to empower the next generation of innovators and makers.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#about" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Discover the Lab
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-1 h-16 bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
};