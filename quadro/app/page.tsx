"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TitleRoute from "@/components/titleRoute"
import * as lucide from "lucide-react"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from 'sonner'

export default function Index() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const body = JSON.stringify({
        email: email,
        password: password,
      })

      const response = await fetch("http://localhost:3005/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })

      if (!response.ok) {
        const erroMSG = await response.text()
        setError(erroMSG)
        toast.error("Usuário não existe")
        setLoading(false)
        return
      }

      const data = await response.json()
      localStorage.setItem("token", data.token)
      toast.success("Autenticado com sucesso")

      router.push("/home")
    } catch (err) {
      console.log(err)
      setError("Erro de request")
      toast.error("Erro na requisição")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <TitleRoute title="Logar-se" />
      <div className="flex items-center justify-center px-4 md:px-0">
        <Card className="w-full max-w-[500px] p-4 md:p-0">
          <CardHeader>
            <CardTitle>Olá de volta</CardTitle>
            <CardDescription>Acesse o quadro</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email qual usou para se cadastrar"
                value={email}
                onChange={handleEmailChange}
              />
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
                value={password}
                onChange={handlePasswordChange}
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
            <Link className="text-sm text-muted-foreground" href="/">
              Esqueceu sua senha?
            </Link>
          </CardFooter>
          <CardFooter>
            <Button
              className="w-full"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <>
                  Entrando
                  <lucide.Loader2 className="mr-2 ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                "Entrar"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
