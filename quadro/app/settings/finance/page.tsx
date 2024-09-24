"use client"
import TitleRoute from "@/components/titleRoute"
import RouteSettings from "@/components/settingsComponents/routeSettings"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import FixedPay from "@/components/settingsComponents/fixedForm"
import EditFixedForm from "@/components/settingsComponents/editFixedForm"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { Popover } from "@radix-ui/react-popover"
export default function finance() {
    const [popOver, setPopOver] = useState(false)
    const [open, setOpen] = useState(false)
    const dialogOpen = () => {
        setOpen(true)
    }
    const [openEdit, setOpenEdit] = useState(false)
    const dialogOpenEdit = () => {
        setOpenEdit(true)
    }

    const saidas = [
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },
        {
            label: "saida",
            value: "20"
        },

    ];




    return (
        <>
            <TitleRoute title="Configuração > Finaceiro" />
            <div className="flex flex-col items-center justify-center mt-12 md:flex-row md:items-start p-2 md:p-4">
                <RouteSettings />
                <div className="flex items-center justify-center w-full md:w-2/3">
                    <Card className="w-full p-3">
                        <CardHeader>
                            <CardTitle>Financeiro</CardTitle>
                            <CardDescription>Ajuste suas informações.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Label htmlFor="textWins"> Entrada fixa </Label>
                            <Input className="w-96" type="number" name="textWins" placeholder="O valor que costuma receber mensalmente" />
                            <div className="space-y-4">
                                <p className="text-sm">Saídas fixas</p>
                                <p className="text-sm text-muted-foreground"> Suas despesas que tem valor fixo</p>
                                <ScrollArea className="h-[200px] w-[380px] rounded-md border p-4">
                                    {saidas.map((item, index) => (
                                        <ul>
                                            <li key={index}>
                                                {item.label} R${item.value}
                                            </li>
                                        </ul>
                                    ))}
                                </ScrollArea>
                                <div className="space-y-4">
                                    <Button className="mr-3" onClick={dialogOpen} variant="secondary"> Cadastrar saídas fixas</Button>
                                    <Button onClick={dialogOpenEdit} variant="secondary"> Ajustar saídas fixas</Button>
                                </div>
                                <FixedPay
                                    openDialog={open}
                                    setDialogOpen={setOpen}
                                />


                                <EditFixedForm
                                    openDialog={openEdit}
                                    setDialogOpen={setOpenEdit}
                                    Saidas={saidas}
                                />

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