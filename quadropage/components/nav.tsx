import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import * as lucide from "lucide-react"
import { useTheme } from "next-themes"

export default function Nav() {
    const { setTheme } = useTheme()

    return (
        <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
            <Link href="/" className="flex items-center" prefetch={false}>
                <img className="h-6 w-6" />
                <span className="ml-2 text-lg font-medium">Quadro.</span>
            </Link>
            <nav className="flex items-center space-x-4">
                <Link href="/" className="text-sm font-medium hover:underline" prefetch={false}>
                    Home
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Sobre
                </Link>
                <Button asChild variant="outline">
                    <Link href="/join">
                        Entrar
                    </Link> 
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <lucide.SunMoon className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            <div className="flex items-center justify-between gap-2">
                                <lucide.Sun className="h-4 w-4" />
                                <span> Claro </span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            <div className="flex items-center justify-between gap-2">
                                <lucide.Moon className="h-4 w-4" />
                                <span> Escuro </span>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </header>
    )
}
