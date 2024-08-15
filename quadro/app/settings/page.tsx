"use client";
import TitleRoute from "@/components/titleRoute";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThemeDark from "../../components/settingsComponents/themeDarkComponent";
import ThemeLight from "../../components/settingsComponents/themeLightComponent";
import RouteSettings from "@/components/settingsComponents/routeSettings";

export default function Settings() {
  return (
    <>
      <TitleRoute title="Configuração" />
      <div className="flex flex-col items-center justify-center mt-12 md:flex-row md:items-start p-2 md:p-4">
          <RouteSettings />
        <div className="flex items-center justify-center w-full md:w-2/3">
          <Card className="w-full p-3">
            <CardHeader>
              <CardTitle>Perfil</CardTitle>
              <CardDescription>Aqui é seu perfil, configure como achar melhor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Digite seu nome" />
              </div>
              <div className="space-y-1">
                <Label>Tema</Label>
                <div className="flex gap-2">
                  <ThemeDark />
                  <ThemeLight />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-end">
              <Button>Atualizar</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
