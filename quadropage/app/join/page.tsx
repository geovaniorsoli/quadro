"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Nav from "@/components/nav"
import * as lucide from "lucide-react"
import Link from "next/link"

export default function Join() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev)
    }

    return (
        <>
            <Nav />
            <div className="flex items-center justify-center mt-12">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Entrar</TabsTrigger>
                        <TabsTrigger value="password">Cadastrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Olá de volta</CardTitle>
                                <CardDescription>Acesse o quadro</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Email qual usou para se cadastrar" />
                                </div>
                                <div className="space-y-1 relative">
                                    <Label htmlFor="password">Senha</Label>
                                </div>
                                <div className="relative">
                                    <Input
                                        type={isVisible ? "text" : "password"}
                                        id="password"
                                        placeholder="Sua senha"
                                        className="pr-10"
                                    />
                                    <div
                                        onClick={toggleVisibility}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    >
                                        {isVisible ? (
                                            <lucide.EyeOff className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <lucide.Eye className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter>
                                    <Link className="text-sm text-muted-foreground" href="/"> Esqueceu sua senha?</Link>
                            </CardFooter>
                            <CardFooter>
                                <Button className="w-full">Entrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                            <CardHeader>
                                <CardTitle>Seja bem-vindo</CardTitle>
                                <CardDescription>
                                    Caso seja novo na Quadro crie sua conta
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="nome">Nome</Label>
                                    <Input id="nome" placeholder="Seu nome e sobrenome" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Seu melhor email" />
                                </div>
                                <div className="space-y-1 relative">
                                    <Label htmlFor="password">Senha</Label>
                                </div>
                                <div className="relative">
                                    <Input
                                        type={isVisible ? "text" : "password"}
                                        id="password"
                                        placeholder="Sua senha mais criativa"
                                        className="pr-10"
                                    />
                                    <div
                                        onClick={toggleVisibility}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    >
                                        {isVisible ? (
                                            <lucide.EyeOff className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <lucide.Eye className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Registrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
