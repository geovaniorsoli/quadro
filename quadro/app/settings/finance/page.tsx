"use client"
import TitleRoute from "@/components/titleRoute";
import RouteSettings from "@/components/settingsComponents/routeSettings";
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
export default function finance() {
    return (
        <>
        <TitleRoute title="Configurações > Finaceiro" />
            <div className="flex flex-col items-start justify-start mt-[20px] md:flex-row md:items-start p-4 gap-8">
                <RouteSettings />
                <div className="flex items-center justify-center w-[800px]">
                    <Card className="w-full p-6">
                        <CardHeader>
                            <CardTitle>Financeiro</CardTitle>
                            <CardDescription>Ajuste todas suas informações financeiras para melhor comodidade.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">

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