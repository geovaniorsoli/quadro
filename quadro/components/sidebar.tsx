"use client"

import React from "react"
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip'
import { Button } from './ui/button'
import * as lucide from 'lucide-react'
import Link from "next/link"

export default function Sidebar() {

    return (
        <div className="fixed top-0 left-0 h-screen border-r z-50">
            <div className="flex flex-col flex-initial h-screen border-r p-4 gap-y-32">
                <TooltipProvider delayDuration={300}>
                    <Tooltip>
                        <Link href="/home">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                        </Link>
                    </Tooltip>
                </TooltipProvider>
                <div className="flex flex-col items-start justify-start flex-1 gap-4">
                    <TooltipProvider delayDuration={300}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <Link href="/statement" className="flex items-center">
                                            <lucide.Coins className="w-6 h-6" />
                                        </Link>
                                    </Button>
                                </span>
                            </TooltipTrigger>
                            <TooltipContent side="right">Extrato</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <Link href="/achievement" className="flex items-center">
                                            <lucide.PiggyBank className="w-6 h-6" />
                                        </Link>
                                    </Button>
                                </span>
                            </TooltipTrigger>
                            <TooltipContent side="right">Metas</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <Link href="/dashboard" className="flex items-center">
                                            <lucide.ChartArea className="w-6 h-6" />
                                        </Link>
                                    </Button>
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
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <Link href="/settings" className="flex items-center">
                                            <lucide.Settings className="w-6 h-6" />
                                        </Link>
                                    </Button>
                                </span>
                            </TooltipTrigger>
                            <TooltipContent side="right">Configurações</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    )
}
