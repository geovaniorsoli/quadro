import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip';
import { Button, } from './ui/button';
import { Coins, PiggyBank, ChartArea, Settings } from 'lucide-react';
import Link from "next/link";

export default function Sidebar() {
  return (
      <div className="flex min-h-screen w-full">
          <div className="flex flex-col flex-initial border-r bg-background p-4 gap-y-32">
              <TooltipProvider delayDuration={300}>
                  <Tooltip>
                          <Avatar className="w-10 h-10">
                              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                              <AvatarFallback></AvatarFallback>
                          </Avatar>
                  </Tooltip>
              </TooltipProvider>
              <div className="flex flex-col items-start justify-start flex-1 gap-4">
                  <TooltipProvider delayDuration={300}>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <Button  variant="ghost" size="icon">
                                <Link href="/statement"> <Coins className="w-6 h-6" /> </Link>
                              </Button>
                          </TooltipTrigger>
                          <TooltipContent side="right">Extrato</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon">
                                  <Link href="/achivements"> <PiggyBank className="w-6 h-6" /> </Link>
                              </Button>
                          </TooltipTrigger>
                          <TooltipContent side ="right">Metas</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Link href="/dashboard"> <ChartArea className="w-6 h-6" /> </Link>
                              </Button>
                          </TooltipTrigger>
                          <TooltipContent side ="right">Dashboard</TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              <div className="flex items-center justify-center">
                  <TooltipProvider delayDuration={300}>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon">
                                  <Link href="/settings"> <Settings className="w-6 h-6" /> </Link>
                              </Button>
                          </TooltipTrigger>
                          <TooltipContent side ="right">Settings</TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
          </div>
      </div>
  )
}
