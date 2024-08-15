"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/sidebar"

interface ClientLayoutProps {
    children: React.ReactNode
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
    const pathname = usePathname()

    const noSidebarRoutes = ['/']

    const shouldRenderSidebar = !noSidebarRoutes.includes(pathname)

    return (
        <div className="flex">
            {shouldRenderSidebar && <Sidebar />}
            <main className={`${shouldRenderSidebar ? 'ml-5' : ''} flex-1`}>
                {children}
            </main>
        </div>
    )
}

export default ClientLayout
