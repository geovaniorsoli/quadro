"use client"

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
import { cn } from "@/lib/utils"
import * as lucide from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import AlertDeleteConfirm from "./alertConfirmDelete"

interface InputField {
    label: string
    placeholder: string
    type: string
    id?: string
}

interface SelectArray {
    content: string
    value: string
    selectLabel: string
    price: number;
    date: string
}

interface PopoverProps {
    setPopoverOpen: (open: boolean) => void
    popoverOpen: boolean
    labelSelect: string
}

interface CreateFormProps extends PopoverProps {
    dialogOpen: boolean
    setDialogOpen: (open: boolean) => void
    title: string
    description: string
    inputFields: InputField[]
    selectArray: SelectArray[]
}

export default function FinanceForm({
    labelSelect,
    dialogOpen,
    setDialogOpen,
    title,
    description,
    inputFields,
    setPopoverOpen,
    popoverOpen,
    selectArray,
}: CreateFormProps) {
    const [value, setValue] = useState<string | null>(null)
    const [alertConfirmDelete, setAlertConfirmDelete] = useState(false)

    return (
        <>
            <AlertDeleteConfirm
                title="Deseja deletar esse Elemento"
                description="Ao deletar esse elemento ele sumirá pra sempre"
                open={alertConfirmDelete}
                onOpenChange={setAlertConfirmDelete}
                onDelete={() => console.log("Clique")}
            />

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <Label>{labelSelect}</Label>
                        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={popoverOpen}
                                    className="w-full justify-between"
                                >
                                    {value
                                        ? selectArray.find((item) => item.value === value)?.selectLabel
                                        : "Selecione..."}
                                    <lucide.ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[500px] p-0">
                                <Command>
                                    <CommandInput placeholder="Pesquisar..." />
                                    <CommandList>
                                        <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
                                        <CommandGroup>
                                            {selectArray.map((item) => (
                                                <CommandItem
                                                    key={item.value}
                                                    value={item.value}
                                                    onSelect={(currentValue: any) => {
                                                        setValue(currentValue === value ? null : currentValue)
                                                        setPopoverOpen(false)
                                                    }}
                                                >
                                                    <lucide.Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            value === item.value ? "opacity-100" : "opacity-0"
                                                        )} />
                                                    {item.selectLabel}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-4">
                        {inputFields.map((field, index) => (
                            <div key={index} className="space-y-4">
                                <Label htmlFor={field.id}>{field.label}</Label>
                                <Input id={field.id} type={field.type} placeholder={field.placeholder} />
                            </div>
                        ))}
                    </div>
                    <DialogFooter>
                        <div className="grid w-full gap-2">
                            <Button className="w-full">Atualizar</Button>
                            <Button variant="destructive" onClick={() => setAlertConfirmDelete(true)}>Deletar</Button>
                            <Button variant="secondary" className="w-full" onClick={() => setDialogOpen(false)}>
                                Fechar
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog></>
    )
}
