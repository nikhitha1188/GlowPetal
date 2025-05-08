
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/products';

const FeaturedProducts = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };
  
  // Get featured products from our data
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold font-playfair mb-2">Featured Products</h2>
            <p className="text-gray-600">Our most loved beauty essentials</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft} 
              className="rounded-full hover:bg-pink-50 border-pink-200"
            >
              <ArrowLeft size={16} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight} 
              className="rounded-full hover:bg-pink-50 border-pink-200"
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollContainer} 
          className="flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[280px] max-w-[280px] snap-start animate-fade-up" style={{ animationDelay: `${0.1 * product.id}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button asChild className="beauty-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-6">
            <Link to="/products/all">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
