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

import AlertDeleteConfirm from "@/components/alertConfirmDelete"

interface Saidas {
  value: string
  label: string
}

interface EditFixedFormProps {
  openDialog: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>,
  Saidas: Saidas[],
  selectedSaidas: string,
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
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [period, setPeriod] = useState("")

  const handleSubmit = () => {
    if (!selectedSaidas || !title || !value || !period) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    console.log({
      selectedSaidas,
      title,
      value,
      period
    });

    setSelectedSaidas("")
    setTitle("")
    setValue("")
    setPeriod("")
    setDialogOpen(false)
  }

  const handleAdjustFixedSaidas = () => {
    console.log("Ajustando Saídas Fixas");
  }
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
                  className="w-[200px] justify-between"
                >
                  {selectedSaidas
                    ? Saidas.find((saida) => saida.value === selectedSaidas)?.label
                    : "Selecionar Saídas..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Procurar Saídas..." />
                  <CommandList>
                    <CommandEmpty>Nenhuma saída encontrada.</CommandEmpty>
                    <CommandGroup>
                      {Saidas.map((saida) => (
                        <CommandItem
                          key={saida.value}
                          onSelect={() => {
                            setSelectedSaidas(saida.value)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedSaidas === saida.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {saida.label}
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
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da saída fixa"
            />
          </div>
          <div className="space-y-4">
            <Label>Valor</Label>
            <Input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Valor da saída"
            />
          </div>
          <div className="space-y-4">
            <Label>Período</Label>
            <Input
              type="number"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              placeholder="Período em dias"
            />
          </div>
          <DialogFooter>
            <div className="grid w-full gap-2">
              <Button className="w-full" onClick={handleAdjustFixedSaidas}>Ajustar Saídas Fixas</Button>
              <Button variant="destructive" className="w-full" onClick={() => setAlertConfirmDelete(true)}>Deletar</Button>
              <Button onClick={() => setDialogOpen(false)} variant="secondary" className="w-full">Fechar</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </>
  )
}
