
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been using the Radiance Serum for a month now, and my skin has never looked better! The glow is real, and my dark spots are fading.",
    name: "Sophia L.",
    location: "New York, NY",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    text: "The Hydra Boost Moisturizer is a game-changer for my dry skin. It's lightweight but incredibly hydrating. I'm on my third jar!",
    name: "James W.",
    location: "Los Angeles, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    text: "I appreciate that all products are cruelty-free and made with clean ingredients. The Soft Glow Blush gives me the most natural-looking flush.",
    name: "Emma T.",
    location: "Chicago, IL",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-beauty-purple/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real reviews from our beauty community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="glass-card p-6 animate-fade-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i + testimonial.rating} size={16} className="text-gray-300 fill-gray-300" />
                ))}
              </div>
              
              {/* Testimonial */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              {/* Customer */}
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
