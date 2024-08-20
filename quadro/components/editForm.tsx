"use client"

interface inputField {
    label: string,
    placeholder: string,
    type: string,
    id?: string
}

interface popoverProps {
    setPopoverOpen: (open: boolean) => void,
    PopoverOpen: boolean,
    labelSelect: string,
}

interface createFormProps extends popoverProps {
    dialogOpen: boolean,
    setDialogOpen: (open: boolean) => void
    title: string,
    description: string,
    inputField: inputField[],
    selectArray: selectArray[],
}

interface selectArray {
    value: string,
    selectLabel: string,
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
export default function finance(
    {
        labelSelect,
        dialogOpen,
        setDialogOpen,
        title,
        description,
        inputField,
        setPopoverOpen,
        PopoverOpen,
        selectArray,
    }: createFormProps) {
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)
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
                        <Label>{labelSelect}</Label>
                        <Popover open={PopoverOpen} onOpenChange={setPopoverOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[200px] justify-between"
                                >
                                    {value
                                        ? frameworks.find((framework) => framework.value === value)?.label
                                        : "Select framework..."}
                                    <lucide.ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search framework..." />
                                    <CommandList>
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandGroup>
                                            {selectArray.map((items) => (
                                                <CommandItem
                                                    key={items.value}
                                                    value={items.value}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                > 
                                                    <lucide.Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            value === items.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {items.selectLabel}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-4">
                        {inputField.map((field, index) => (
                            <div key={index} className="space-y-4">
                                <Label htmlFor="">{field.label}</Label>
                                <Input id={field.id} type={field.type} placeholder={field.placeholder} />
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

//precisa colocar o botão de deleção
//precisa por o select e passar o map como props aqui
//precisa trocar as nomenclaturas
//precisa passar as props pra abrir o dialog (true)