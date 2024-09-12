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

    const text = [
        {
            saidas: "Netflix R$34,90",
        },
        {
            saidas: "Spotify R$19,90",
        },
        {
            saidas: "Seguro do carro R$400,00",
        },
        {
            saidas: "Faculdade R$1.200,00",
        },
        {
            saidas: "Academia R$150,00",
        },
        {
            saidas: "Plano de saúde R$500,00",
        },
        {
            saidas: "Internet R$120,00",
        },
        {
            saidas: "Celular R$80,00",
        },
        {
            saidas: "Aluguel R$2.000,00",
        },
        {
            saidas: "Condomínio R$600,00",
        },
        {
            saidas: "Luz R$200,00",
        },
        {
            saidas: "Água R$100,00",
        },
        {
            saidas: "Gasolina R$300,00",
        },
        {
            saidas: "Supermercado R$800,00",
        },
        {
            saidas: "Outras assinaturas R$50,00",
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
                                    {text.map((item, index) => (
                                        <ul>
                                            <li key={index}>
                                                {item.saidas}
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

                                    {/* passar props de comboBox  */}
                                {/* <EditFixedForm
                                    openDialog={openEdit}
                                    setDialogOpen={setOpenEdit}
                                    
                                /> */}
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