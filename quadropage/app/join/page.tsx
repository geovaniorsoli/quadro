"use client";

import { useState, MouseEventHandler, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Nav from "@/components/nav";
import * as lucide from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Join() {
    const router = useRouter();

    const [isVisible, setIsVisible] = useState(false);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false); // Novo estado para mensagem de sucesso

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) =>
        setNome(e.target.value);
    const handleSobrenomeChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSobrenome(e.target.value);
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSenha(e.target.value);
    const handleConfirmarSenhaChange = (e: ChangeEvent<HTMLInputElement>) =>
        setConfirmarSenha(e.target.value);

    const onClickBtnRegister: MouseEventHandler<HTMLButtonElement> = async (
        e,
    ) => {
        e.preventDefault();

        if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
            setError("Preencha todos os campos");
            return;
        }

        if (senha !== confirmarSenha) {
            setError("As senhas não coincidem");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const body = JSON.stringify({
                nome,
                sobrenome,
                email,
                senha,
            });

            const url = "https://webhook.site/43429fd2-579e-4dc5-a944-fc87af764b46";

            const response = await fetch(
                url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: body,
                },
            );

            if (response.status !== 200) {
                setError("Algo deu errado");
                return;
            }

            // Exibir mensagem de sucesso
            setSuccess(true);
            setError("");
            setTimeout(() => {
                router.push("/home")
            }, 2000)

            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
            setError("Erro na requisição");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Nav />
            <div className="flex items-center justify-center mt-8">
                <Card className="w-[500px]">
                    <CardHeader>
                        <CardTitle>Seja bem-vindo</CardTitle>
                        <CardDescription>
                            Caso seja novo na Quadro crie sua conta
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {error && (
                            <div className="text-red-500 mb-4">{error}</div>
                        )}
                        {success && (
                            <div className="text-green-500 mb-4">Registrado com sucesso!</div>
                        )}
                        <div className="space-y-1">
                            <Label htmlFor="nome">Nome</Label>
                            <Input
                                id="nome"
                                placeholder="Seu primeiro nome"
                                value={nome}
                                onChange={handleNomeChange}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="Sobrenome">Sobrenome</Label>
                            <Input
                                id="Sobrenome"
                                placeholder="Seu sobrenome"
                                value={sobrenome}
                                onChange={handleSobrenomeChange}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Seu melhor email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="space-y-1 relative">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                type={isVisible ? "text" : "password"}
                                id="password"
                                placeholder="Sua senha mais criativa"
                                className="pr-10"
                                value={senha}
                                onChange={handleSenhaChange}
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
                        <div className="relative mt-10">
                            <Input
                                type={isVisible ? "text" : "password"}
                                id="confirm-password"
                                placeholder="Repita sua senha"
                                className="pr-10"
                                value={confirmarSenha}
                                onChange={handleConfirmarSenhaChange}
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
                        <Button
                            className="w-full"
                            onClick={onClickBtnRegister}
                            disabled={loading}
                        >
                            {loading ? "Registrando..." : "Registrar"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
