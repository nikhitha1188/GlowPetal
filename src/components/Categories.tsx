
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Skincare",
    description: "Nourish your skin with our clean, effective formulas",
    image: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800",
    color: "bg-beauty-peach",
    link: "/products/skincare"
  },
  {
    id: 2,
    name: "Makeup",
    description: "Enhance your natural beauty with our clean makeup collection",
    image: "https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800",
    color: "bg-beauty-pink",
    link: "/products/makeup"
  },
  {
    id: 3,
    name: "Wellness",
    description: "Self-care essentials for body and mind",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800",
    color: "bg-beauty-mint",
    link: "/products/wellness"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair mb-2">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our curated collections of clean, sustainably sourced beauty and wellness products</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px] animate-fade-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Category image */}
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className={`w-16 h-16 ${category.color} rounded-full mb-4 flex items-center justify-center opacity-90`}>
                    <span className="text-2xl font-playfair">{category.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-playfair mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <div className="flex items-center font-medium text-sm">
                    <span>Explore Collection</span>
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;