"use client";

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
    <div className="flex flex-col items-start justify-start mt-[100px] md:flex-row md:items-start p-4 gap-8">
      <RouteSettings />
      <div className="flex items-center justify-center w-[800px]">
        <Card className="w-full p-6">
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>Aqui é seu perfil, configure como achar melhor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Digite seu nome" />
            </div>
            <div className="space-y-1">
              <Label>Tema</Label>
              <div className="flex align-start justify-content gap-3">
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
  )
}
