
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-16 bg-beauty-pink/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-playfair mb-3">Join Our Beauty Community</h2>
          <p className="text-gray-700 mb-6">
            Subscribe to get exclusive offers, early access to new products, and beauty tips from our experts.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="rounded-full px-6 border-beauty-pink/30 focus-visible:ring-pink-500"
            />
            <Button className="beauty-button bg-pink-500 hover:bg-pink-600 text-white">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
