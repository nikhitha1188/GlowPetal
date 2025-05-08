
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ShoppingBag, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-beauty-pink/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-playfair font-bold gradient-text mb-4 inline-block">
              GlowPetal
            </Link>
            <p className="text-gray-600 mb-6">
              Luxurious, ethical beauty products made with clean ingredients that nourish your skin.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/products/skincare" className="text-gray-600 hover:text-pink-500 transition-colors">Skincare</Link></li>
              <li><Link to="/products/makeup" className="text-gray-600 hover:text-pink-500 transition-colors">Makeup</Link></li>
              <li><Link to="/products/wellness" className="text-gray-600 hover:text-pink-500 transition-colors">Wellness</Link></li>
              <li><Link to="/products/gift-sets" className="text-gray-600 hover:text-pink-500 transition-colors">Gift Sets</Link></li>
              <li><Link to="/products/new-arrivals" className="text-gray-600 hover:text-pink-500 transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="font-medium text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-gray-600 hover:text-pink-500 transition-colors">Sustainability</Link></li>
              <li><Link to="/ingredients" className="text-gray-600 hover:text-pink-500 transition-colors">Ingredients</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-pink-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-pink-500" />
                <span className="text-gray-600">123 Beauty Lane, Los Angeles CA 90001, USA</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pink-500" />
                <a href="mailto:hello@glowpetal.com" className="text-gray-600 hover:text-pink-500 transition-colors">
                  xxxxxxxxx@glowpetal.com
                </a>
              </li>
              <li className="flex items-center">
                <ShoppingBag size={18} className="mr-2 text-pink-500" />
                <Link to="/track-order" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-beauty-pink/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GlowPetal. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
