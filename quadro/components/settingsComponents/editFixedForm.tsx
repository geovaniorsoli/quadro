"use client"

import { Dispatch, SetStateAction, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Button
} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
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

interface Saidas {
  value: string
  label: string
}

interface EditFixedFormProps {
  openDialog: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>,
  Saidas: Saidas[], 
  selectedSaidas?: string, 
  setSelectedSaidas: Dispatch<SetStateAction<string>>, 
}

export default function EditFixedForm({
  openDialog,
  setDialogOpen,
  Saidas,
  selectedSaidas,
  setSelectedSaidas,
}: EditFixedFormProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastro de Saídas fixas</DialogTitle>
            <DialogDescription>
              São suas despesas fixas
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {selectedSaidas
                    ? Saidas.find((Saidas) => Saidas.value === selectedSaidas)?.label
                    : "Selecionar Saidas..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[450px] p-0">
                <Command>
                  <CommandInput placeholder="Procurar Saidas..." />
                  <CommandList>
                    <CommandEmpty>Nenhuma saída encontrada.</CommandEmpty>
                    <CommandGroup>
                      {Saidas.map((Saidas) => (
                        <CommandItem
                          onSelect={(currentValue) => {
                            setSelectedSaidas(currentValue === selectedSaidas ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedSaidas === Saidas.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {Saidas.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-4">
            <Label>Título</Label>
            <Input type="text" placeholder="Título da saída fixa" />
          </div>
          <div className="space-y-4">
            <Label>Valor</Label>
            <Input type="number" placeholder="Valor da saída" />
          </div>
          <div className="space-y-4">
            <Label>Período</Label>
            <Input type="number" placeholder="Período em dias" />
          </div>
          <DialogFooter>
            <div className="grid w-full gap-2">
              <Button className="w-full">Cadastrar</Button>
              <Button variant="destructive" className="w-full">Deletar</Button>
              <Button onClick={() => setDialogOpen(false)} variant="secondary" className="w-full">Fechar</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
