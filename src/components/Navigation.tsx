
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import CartDrawer from './CartDrawer';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import UserMenu from './UserMenu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartState } = useCart();
  const { isLoggedIn } = useUser();
  const cartItemCount = cartState.items.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-beauty-pink/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-playfair font-bold gradient-text">
            GlowPetal
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/products/skincare" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Skincare
            </Link>
            <Link to="/products/makeup" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Makeup
            </Link>
            <Link to="/products/wellness" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Wellness
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-pink-500 transition-colors">
              About
            </Link>
          </nav>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search size={20} />
            </Button>
            
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link to="/signup">
                  <User size={20} />
                </Link>
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products/skincare" 
                className="text-lg font-medium hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skincare
              </Link>
              <Link 
                to="/products/makeup" 
                className="text-lg font-medium hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Makeup
              </Link>
              <Link 
                to="/products/wellness" 
                className="text-lg font-medium hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Wellness
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-medium hover:text-pink-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {!isLoggedIn && (
                <Link 
                  to="/signup" 
                  className="text-lg font-medium hover:text-pink-500 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up / Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
      
      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navigation;
