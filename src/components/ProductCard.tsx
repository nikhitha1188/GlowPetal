
import React, { useState } from 'react';
import { Heart, ShoppingBag, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Image failed to load for: ${product.name}`);
    // Don't set imageError to true immediately, try with an alternative URL first
    const img = e.target as HTMLImageElement;
    
    // Only show the placeholder if the alternative URL also fails
    if (!img.src.includes('placeholder')) {
      // Try a placeholder from Unsplash that's more likely to work
      img.src = `https://images.unsplash.com/photo-${product.id % 3 === 0 ? '1618160702438-9b02ab6515c9' : (product.id % 3 === 1 ? '1582562124811-c09040d0a901' : '1721322800607-8c38375eef04')}?auto=format&fit=crop&q=80&w=800`;
      img.onerror = () => setImageError(true); // If this fails too, show the placeholder icon
    } else {
      setImageError(true);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="beauty-card group">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden bg-gray-100">
            {!imageError ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={handleImageError}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                <ImageIcon size={48} />
              </div>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-0 right-0 m-3">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
              <Heart size={18} className="text-gray-600" />
            </Button>
          </div>
          
          {/* Labels */}
          <div className="absolute top-0 left-0 m-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="inline-block bg-beauty-coral text-white text-xs px-3 py-1 rounded-full">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="inline-block bg-beauty-purple text-white text-xs px-3 py-1 rounded-full">
                Best Seller
              </span>
            )}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase">{product.category}</span>
          </div>
          <h3 className="font-playfair font-medium text-lg mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full border-pink-300 hover:bg-pink-50 hover:border-pink-500"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={16} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
