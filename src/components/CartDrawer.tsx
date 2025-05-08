
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { cartState, removeFromCart, updateQuantity } = useCart();
  const { items, total } = cartState;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-5">
          <SheetTitle className="font-playfair text-2xl flex items-center">
            <ShoppingBag className="mr-2" size={24} />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-beauty-pink/30 p-6 rounded-full mb-4">
              <ShoppingBag size={32} className="text-pink-500" />
            </div>
            <h3 className="font-playfair font-medium text-xl mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products yet.</p>
            <Button onClick={onClose} className="beauty-button bg-pink-500 hover:bg-pink-600 text-white">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-3 border-b border-gray-100">
                  <div className="w-20 h-20 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{item.category}</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border rounded-full">
                        <Button
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-gray-400 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <SheetFooter className="pt-6">
              <div className="w-full space-y-3">
                <Button 
                  className="w-full beauty-button bg-pink-500 hover:bg-pink-600 text-white"
                  asChild
                >
                  <Link to="/checkout" onClick={onClose}>
                    Proceed to Checkout
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-pink-200"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
