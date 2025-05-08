import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Heart, ShoppingBag, ImageIcon } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { useToast } from "@/components/ui/use-toast";

// Import your products - this is temporary, ideally would come from an API
import { allProducts } from "@/data/products";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  
  const product = allProducts.find(p => p.id === Number(productId));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related products (same category, excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Reset quantity after adding
    setQuantity(1);
  };
  
  const handleWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
      variant: "default",
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Image failed to load for: ${product.name}`);
    
    // Try with an alternative URL first
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              {!imageError ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                  <ImageIcon size={64} />
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm text-gray-500 uppercase">{product.category}</span>
              </div>
              
              <h1 className="text-3xl font-playfair font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl font-medium">${product.price.toFixed(2)}</div>
                
                {/* Product badges */}
                <div className="flex gap-2">
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
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Quantity selector */}
              <div className="flex items-center gap-8 mb-6">
                <span className="font-medium">Quantity</span>
                <div className="flex items-center border rounded-full">
                  <Button
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-full"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="w-10 text-center font-medium">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-full"
                    onClick={increaseQuantity}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="flex-1 beauty-button bg-pink-500 hover:bg-pink-600 text-white py-6"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2" size={18} />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 py-6 rounded-full border-pink-200"
                  onClick={handleWishlist}
                >
                  <Heart className="mr-2" size={18} />
                  Add to Wishlist
                </Button>
              </div>
              
              {/* Product information */}
              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Product Details</h3>
                  <p className="text-gray-600 text-sm">
                    Our products are formulated without parabens, sulfates, or phthalates. 
                    Dermatologist tested and cruelty-free.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">How to Use</h3>
                  <p className="text-gray-600 text-sm">
                    Apply to clean, dry skin. Gently massage in circular motions until absorbed.
                    Use morning and night for best results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-playfair font-bold mb-6">You May Also Like</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
