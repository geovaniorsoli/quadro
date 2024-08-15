"use client"

interface inputField {
    label: string,
    placeholder: string,
    type: string,
    id?: string
}

interface createFormProps {
    dialogOpen: boolean,
    setDialogOpen: (open: boolean) => void
    title: string,
    description: string,
    inputField: inputField[]
}

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
export default function finance(
    {
        dialogOpen,
        setDialogOpen,
        title,
        description,
        inputField,
    }: createFormProps) {

    // const [open, setOpen] = useState(false)
    // const dialogOpen = () => {
    //     setOpen(true)
    // }
    // const [openEdit, setOpenEdit] = useState(false)
    // const dialogOpenEdit = () => {
    //     setOpenEdit(true)
    // }

    return (
        <>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        {inputField.map((field, index) => (
                            <div key={index} className="space-y-4">
                                <Label htmlFor="">{field.label}</Label>
                                <Input id={field.id} type={field.type} placeholder={field.placeholder}/>
                            </div>
                        ))}
                    </div>
                    <DialogFooter >
                        <div className="grid w-full gap-2">
                            <Button className="w-full"> Cadastrar </Button>
                            <Button variant="secondary" className="w-full" onClick={() => setDialogOpen(false)}> Fechar </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}