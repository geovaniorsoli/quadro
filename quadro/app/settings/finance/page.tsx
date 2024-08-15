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
            <TitleRoute title="Configuração > Finaceiro" />
            <div className="flex flex-col items-center justify-center mt-12 md:flex-row md:items-start p-2 md:p-4">
                <RouteSettings />
                <div className="flex items-center justify-center w-full md:w-2/3">
                    <Card className="w-full p-3">
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