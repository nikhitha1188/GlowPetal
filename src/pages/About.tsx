
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-beauty-pink/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-gray-600 text-lg">
                GlowPetal was founded with a simple mission: to create effective, luxurious beauty products 
                that nurture both your skin and the planet.
              </p>
            </div>
          </div>
        </section>
        
        {/* About content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-4">Our Beginning</h2>
                <p className="text-gray-600 mb-4">
                  In 2018, our founder Sarah noticed a gap in the beauty industry. While there were 
                  plenty of natural products and luxury brands, few combined the best of both worlds.
                </p>
                <p className="text-gray-600 mb-4">
                  After years of experimenting with formulations in her small apartment, Sarah 
                  developed our first product: the now-iconic Radiance Facial Serum. What started 
                  as a passion project quickly grew into a beloved brand.
                </p>
                <p className="text-gray-600">
                  Today, GlowPetal offers a complete range of skincare, makeup, and wellness products,
                  all created with our founding principles of quality, sustainability, and beauty.
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556227834-09f1de7a7d14?auto=format&fit=crop&w=800" 
                  alt="Our founder in the lab" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="py-16 bg-beauty-purple/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600">
                At GlowPetal, our approach to beauty is guided by these core principles
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-beauty-pink/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-center mb-3">Clean Beauty</h3>
                <p className="text-gray-600 text-center">
                  We believe that what you put on your body matters as much as what you put in it. 
                  Our products are free from parabens, sulfates, and harmful chemicals.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-beauty-peach/50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-center mb-3">Sustainability</h3>
                <p className="text-gray-600 text-center">
                  From our recyclable packaging to our ethical sourcing practices, 
                  sustainability is at the heart of everything we do.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-beauty-mint/50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-center mb-3">Inclusivity</h3>
                <p className="text-gray-600 text-center">
                  We believe beauty comes in all shapes, sizes, and shades. 
                  Our products are designed to enhance everyone's natural beauty.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-beauty-pink/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl font-bold mb-4">Join Our Beauty Journey</h2>
              <p className="text-gray-600 text-lg mb-8">
                Experience the difference of products crafted with intention, expertise, and love.
              </p>
              <Button asChild className="beauty-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-6">
                <Link to="/products/all">Shop Our Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
