"use client";

import { usePathname } from 'next/navigation';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip';
import { Button } from './ui/button';
import * as lucide from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
    const pathname = usePathname();
    const isDisable = (route: string) => pathname === route;

    return (
        <>
            <div className="hidden md:flex fixed top-0 left-0 h-screen border-r z-50">
                <div className="flex flex-col flex-initial h-screen border-r p-4 gap-y-32">
                    <TooltipProvider delayDuration={300}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/home">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback></AvatarFallback>
                                    </Avatar>
                                </Link>
                            </TooltipTrigger>
                        </Tooltip>
                    </TooltipProvider>
                    <div className="flex flex-col items-start justify-start flex-1 gap-4">
                        <TooltipProvider delayDuration={300}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <Link href="/statement" className="flex items-center">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                disabled={isDisable("/statement")}
                                            >
                                                <lucide.Coins className="w-6 h-6" />
                                            </Button>
                                        </Link>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="right">Extrato</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <Link href="/achievement" className="flex items-center">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                disabled={isDisable("/achievement")}
                                            >
                                                <lucide.PiggyBank className="w-6 h-6" />
                                            </Button>
                                        </Link>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="right">Metas</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <Link href="/dashboard" className="flex items-center">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                disabled={isDisable("/dashboard")}
                                            >
                                                <lucide.ChartArea className="w-6 h-6" />
                                            </Button>
                                        </Link>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="right">Resumo</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="flex items-center justify-center">
                        <TooltipProvider delayDuration={300}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <Link href="/settings" className="flex items-center">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                disabled={isDisable("/settings")}
                                            >
                                                <lucide.Settings className="w-6 h-6" />
                                            </Button>
                                        </Link>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="right">Configurações</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t z-50">
                <div className="flex items-center justify-around p-2">
                    <Link href="/settings">
                        <Button
                            variant="ghost"
                            size="icon"
                            disabled={isDisable("/settings")}
                        >
                            <lucide.Settings className="w-6 h-6" />
                        </Button>
                    </Link>
                    <Link href="/statement">
                        <Button
                            variant="ghost"
                            size="icon"
                            disabled={isDisable("/statement")}
                        >
                            <lucide.Coins className="w-6 h-6" />
                        </Button>
                    </Link>
                    <Link href="/achievement">
                        <Button
                            variant="ghost"
                            size="icon"
                            disabled={isDisable("/achievement")}
                        >
                            <lucide.PiggyBank className="w-6 h-6" />
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button
                            variant="ghost"
                            size="icon"
                            disabled={isDisable("/dashboard")}
                        >
                            <lucide.ChartArea className="w-6 h-6" />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
