
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/context/UserContext";

const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

const SignUp = () => {
  const { toast } = useToast();
  const { login } = useUser();
  const navigate = useNavigate();
  
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    // Create a new user object with the form data
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
    
    // Store user in context
    login(newUser);
    
    // Show success toast
    toast({
      title: "Account created!",
      description: "You have successfully created an account.",
    });
    
    // Navigate to homepage after successful signup
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h1 className="font-playfair text-3xl font-bold mb-6 text-center">Create an Account</h1>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="First name" 
                              className="rounded-full px-6 border-beauty-pink/30 focus-visible:ring-pink-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Last name" 
                              className="rounded-full px-6 border-beauty-pink/30 focus-visible:ring-pink-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="Email address" 
                            className="rounded-full px-6 border-beauty-pink/30 focus-visible:ring-pink-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="password" 
                            placeholder="Create a password" 
                            className="rounded-full px-6 border-beauty-pink/30 focus-visible:ring-pink-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="password" 
                            placeholder="Confirm your password" 
                            className="rounded-full px-6 border-beauty-pink/30 focus-visible:ring-pink-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full beauty-button bg-pink-500 hover:bg-pink-600 text-white mt-6"
                  >
                    Create Account
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-pink-500 hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;
