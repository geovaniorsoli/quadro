import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import * as lucide from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


export default function Nav() {
    const { theme, setTheme } = useTheme()
    const [showThemeMobile, setShowThemeMobile] = useState(" ")
    const [isOpen, setIsOpen] = useState(false)

    const themeMobile = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


    return (
        <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
            <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center" prefetch={false}>
                    <img className="h-6 w-6" />
                    <span className="ml-2 text-lg font-medium">Quadro.</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="text-sm font-medium hover:underline" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Sobre
                    </Link>
                </nav>
            </div>
            <div className="flex items-center space-x-2">
                <Button className="hidden md:block" asChild variant="outline">
                    <Link href="/join">
                        Entrar
                    </Link>
                </Button>
                <div className="hidden md:block">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
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
                </div>
            </div>
            <Drawer>
                <DrawerTrigger className="md:hidden"><lucide.Menu /></DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Para onde gostaria de ir?</DrawerTitle>
                        <DrawerDescription>rotas</DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter className="gap-3">
                        <div >
                            <Button className="w-full mb-3" asChild>
                                <Link href="/join">
                                    Entrar
                                </Link>
                            </Button>
                            <Button className="w-full mb-3" asChild variant="outline">
                                <Link href="/">
                                    Home
                                </Link>
                            </Button>
                            <Button className="w-full mb-3" asChild variant="outline">
                                <Link href="/">
                                    Sobre
                                </Link>
                            </Button>
                            <Button className="w-full mb-3" asChild variant="outline">
                                <Link href="/join">
                                    Contato
                                </Link>
                            </Button>

                            <Button className="w-full mb-3" onClick={themeMobile} variant="secondary">
                                Tema
                            </Button>
                        </div>
                    </DrawerFooter>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="ghost" className="w-full">fechar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </header>
    )
}
