
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-beauty-pink/30 to-beauty-purple/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Your <span className="gradient-text">Natural Beauty</span> Essentials
            </h1>
            <p className="text-lg text-gray-700">
              Luxurious, ethical skincare and makeup products formulated with clean ingredients that nourish your skin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="beauty-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-6">
                <Link to="/products/all">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="beauty-button border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-beauty-peach rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-beauty-purple rounded-full opacity-60 blur-3xl"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&h=700" 
                alt="Beauty Products" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <span className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-pink-500">
                  New Arrivals
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="hidden md:block absolute top-20 right-20 w-20 h-20 rounded-full bg-beauty-mint opacity-70 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="hidden md:block absolute bottom-20 left-20 w-16 h-16 rounded-full bg-beauty-coral opacity-70 animate-float" style={{ animationDelay: '0.8s' }}></div>
    </section>
  );
};

export default Hero;
