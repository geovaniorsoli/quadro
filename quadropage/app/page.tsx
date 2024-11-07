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
              <h2 className="text-3xl font-bold mb-8">Conheça mais</h2>
              <div className="space-y-8">
                <div className="text-center">
                  <img src="img/dashboard.png" alt="Funcionalidade 1" className="w-full h-full object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold">Relatórios</h3>
                  <p className="text-muted-foreground">Relatórios detalhados para melhor análise.</p>
                </div>
                <div className="text-center">
                  <img src="img/extrato.png" alt="Funcionalidade 2" className="w-full h-full object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold">Contas e Faturas</h3>
                  <p className="text-muted-foreground">Gerencie suas contas e faturas em um só lugar.</p>
                </div>
                <div className="text-center">
                  <img src="img/cadastro.png" alt="Funcionalidade 3" className="w-full h-full object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold">Planejamento</h3>
                  <p className="text-muted-foreground">Planeje seus próximos passos financeiros.</p>
                </div>
                <div className="text-center">
                  <img src="img/ia.png" alt="Funcionalidade 4" className="w-full h-full object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold">Análises</h3>
                  <p className="text-muted-foreground">Analise tendências e otimize sua gestão com IA.</p>
                </div>
              </div>
            </div>
          </section>


          <section className="py-12 md:py-20">
  <div className="container mx-auto px-4 md:px-6">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Organize como melhor desejar</h1>
    <p className="text-muted-foreground mb-8">
      Quadro é um sistema de gestão financeira projetado para atender diferentes perfis de usuários, oferecendo tudo o que você precisa para controlar suas finanças em um só lugar.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-muted rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Movimentos</h3>
        <p className="text-muted-foreground mb-4">
          Acompanhe suas receitas e despesas em tempo real, garantindo uma visão clara dos seus movimentos financeiros.
        </p>
      </div>
      <div className="bg-muted rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Dashboards</h3>
        <p className="text-muted-foreground mb-4">
          Visualize suas finanças de forma intuitiva com dashboards interativos, que ajudam a entender seu fluxo de caixa, despesas e muito mais.
        </p>
      </div>
      <div className="bg-muted rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Previsão por IA</h3>
        <p className="text-muted-foreground mb-4">
          Nossa inteligência artificial analisa seus dados financeiros para prever tendências e ajudar você a planejar melhor seu futuro financeiro.
        </p>
      </div>
      <div className="bg-muted rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Metas</h3>
        <p className="text-muted-foreground mb-4">
          Defina objetivos financeiros e acompanhe seu progresso para garantir que você está no caminho certo para alcançar suas metas.
        </p>
      </div>
      <div className="bg-muted rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Ambiente Colaborativo</h3>
        <p className="text-muted-foreground mb-4">
          Colabore com sua equipe ou familiares para organizar as finanças coletivamente e tomar decisões de forma integrada.
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
                Nosso time Quadro
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
                  <p className="text-sm text-muted-foreground">Product</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Emily Davis" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Arthur Araujo</p>
                  <p className="text-sm text-muted-foreground">Stakeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-muted text-muted-foreground py-6">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <p>&copy; 2024 Quadro.</p>
            <nav className="flex items-center space-x-4">
              <Link href=" https://www.instagram.com/quadro_company " className="hover:underline" prefetch={false}>
                Instagram
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}