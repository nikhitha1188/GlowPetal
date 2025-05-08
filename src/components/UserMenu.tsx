
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserRound, LogOut } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const UserMenu = () => {
  const { user, logout } = useUser();
  const { toast } = useToast();
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };
  
  if (!user) return null;
  
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Avatar className="h-8 w-8 bg-pink-100">
            <AvatarFallback className="bg-pink-100 text-pink-500">
              {initials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>
          <UserRound className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
