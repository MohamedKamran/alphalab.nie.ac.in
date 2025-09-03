import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about ALPHA Lab or interested in collaborating? Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-blue-600 text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-blue-100">No 50, Koorgalli Village</p>
                    <p className="text-blue-100">Hootagalli Industrial Area</p>
                    <p className="text-blue-100">Next to BEML, Mysuru</p>
                    <p className="text-blue-100">Karnataka 570018</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-100">+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-blue-100">alpha.lab@nie.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Us</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1496048497247!2d76.58491039999999!3d12.371201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7bdade337df9%3A0x23a85e1a4a664e0c!2sNo%2050%2C%20Koorgalli%20Village%2C%20Hootagalli%20Industrial%20Area%2C%20next%20to%20BEML%2C%20Mysuru%2C%20Karnataka%20570018!5e0!3m2!1sen!2sin!4v1647339876543!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Operating Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};