import React from 'react';
import { Mail, Phone, MapPin, Calendar, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="h-7 w-7" />
              <span className="text-2xl font-bold">EventFinder</span>
            </div>
            <p className="mb-6 text-blue-100">
              Connecting people with events that matter. Discover, register, and attend the best events in your area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#events" className="text-blue-100 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>123 Event Street, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@eventfinder.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Newsletter</h3>
            <p className="mb-4 text-blue-100">
              Subscribe to our newsletter to get the latest updates on events.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-blue-800 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-blue-900 rounded font-medium hover:bg-blue-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>© {new Date().getFullYear()} EventFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;