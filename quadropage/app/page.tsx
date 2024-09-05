"use client"
import Nav from "@/components/nav"
import Link from "next/link"
import * as lucide from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function home() {
  return (
    <>
      <Nav />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Quadro
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Organize suas financas em um lugar só.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Organize como melhor desejar</h1>
              <p className="text-muted-foreground mb-8">
                o Quadro é bem amplo a diferentes perfils de pessoas podendo atendener qualquer necessidade
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-muted rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Movimentos</h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et expedita placeat sit nam totam autem voluptatum eos necessitatibus enim debitis repudiandae impedit, nesciunt odit velit maiores quaerat ipsa facere! Aliquam.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Dashboards</h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam incidunt, architecto iste nisi, porro ipsa quaerat repudiandae assumenda consectetur voluptatibus, magni velit aspernatur quos quidem quasi voluptatum qui est quibusdam.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Metas</h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat iure culpa nesciunt cupiditate! Numquam non, iste blanditiis voluptatum quo sit a, velit ratione officia porro commodi sint consequatur molestias nostrum?
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Ambiente colaborativo</h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, eligendi. Nam quae recusandae atque accusantium quisquam saepe sequi odit id. Voluptatibus magni maiores nihil eos similique alias reprehenderit velit fugiat.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nosso time</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="grid gap-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                  <AvatarFallback>MV</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Moyseys Veroni</p>
                  <p className="text-sm text-muted-foreground">Backend devoloper</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                  <AvatarFallback>GO</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Geovani Orsoli</p>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Michael Johnson" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Ana Missio</p>
                  <p className="text-sm text-muted-foreground">Document</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Emily Davis" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Arthur arujo</p>
                  <p className="text-sm text-muted-foreground">...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-muted text-muted-foreground py-6">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <p>&copy; 2024 Quadro.</p>
            <nav className="flex items-center space-x-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                Cadastrar
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Entrar
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}