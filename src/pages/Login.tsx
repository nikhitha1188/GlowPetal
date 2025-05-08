
import React from "react";
import { Link } from "react-router-dom";
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

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { toast } = useToast();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login submitted with:", data);
    toast({
      title: "Welcome back!",
      description: "You have been successfully logged in.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-16 bg-gradient-to-b from-beauty-pink/10 to-beauty-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h1 className="font-playfair text-3xl font-bold mb-6 text-center">Welcome Back</h1>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        <div className="flex items-center justify-between">
                          <FormLabel>Password</FormLabel>
                          <Link to="/forgot-password" className="text-xs text-pink-500 hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="password" 
                            placeholder="Enter your password" 
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
                    Log In
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-pink-500 hover:underline">
                    Sign up
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

export default Login;
