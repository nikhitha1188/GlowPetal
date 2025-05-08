
import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  fullName: z.string().min(2, "Full name is required"),
  address: z.string().min(5, "Please enter your full address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Zip code is required"),
  country: z.string().min(2, "Country is required"),
  paymentMethod: z.enum(["credit", "paypal"]),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { cartState, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      fullName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      paymentMethod: "credit",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    },
  });

  const { watch } = form;
  const paymentMethod = watch("paymentMethod");

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Checkout form submitted:", data);
    
    // Show success toast
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase.",
      variant: "default",
    });
    
    // Clear the cart
    clearCart();
    
    // Redirect to a thank you page or home page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-playfair font-bold mb-8">Checkout</h1>
          
          {cartState.items.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="font-playfair text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Add some products to your cart before proceeding to checkout.
              </p>
              <Button 
                className="beauty-button bg-pink-500 hover:bg-pink-600 text-white"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Checkout form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="font-playfair text-xl font-medium mb-6">Shipping Information</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State/Province</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ZIP/Postal Code</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="bg-white rounded-lg mb-6">
                        <h2 className="font-playfair text-xl font-medium mb-6 pt-4">Payment Method</h2>
                        
                        <FormField
                          control={form.control}
                          name="paymentMethod"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-4"
                                >
                                  <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-3 cursor-pointer">
                                    <RadioGroupItem value="credit" id="credit" />
                                    <label htmlFor="credit" className="flex-1 cursor-pointer">Credit Card</label>
                                  </div>
                                  <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-3 cursor-pointer">
                                    <RadioGroupItem value="paypal" id="paypal" />
                                    <label htmlFor="paypal" className="flex-1 cursor-pointer">PayPal</label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      {paymentMethod === "credit" && (
                        <div className="space-y-4 border-t border-gray-100 pt-4">
                          <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Card Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    placeholder="1234 5678 9012 3456"
                                    className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="cardExpiry"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Expiry Date</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="MM/YY"
                                      className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="cardCvc"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>CVC</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="123"
                                      className="rounded-md border-beauty-pink/30 focus-visible:ring-pink-500" 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-6">
                        <Button 
                          type="submit" 
                          className="w-full beauty-button bg-pink-500 hover:bg-pink-600 text-white py-6"
                        >
                          Complete Order
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="font-playfair text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cartState.items.map(item => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 rounded overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>Qty: {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${cartState.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${(cartState.total * 0.08).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${(cartState.total + cartState.total * 0.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
