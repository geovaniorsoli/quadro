"use client"
import { Dispatch, useActionState, useState, type SetStateAction } from "react"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface createStatementProps {
  openDialog: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>
  openPopOver: boolean,
  setPopOver: Dispatch<SetStateAction<boolean>>
}

export default function createStatementForm({ openDialog, setDialogOpen, openPopOver, setPopOver }: createStatementProps) {

  return (
    <>
      <Dialog open={openDialog} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastro de Atividade</DialogTitle>
            <DialogDescription>
              Cadastre movimentos de dinheiro, saídas ou entradas
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Label>Título</Label>
            <Input type="text" placeholder="Título da atividade" />
          </div>
          <div className="space-y-4">
            <Label>Valor</Label>
            <Input type="number" placeholder="Valor da atividade" />
          </div>
          <div className="space-y-4">
            <Label> Movimento </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Movimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="saida">Saida</SelectItem>
                <SelectItem value="entrada">Entrada</SelectItem>
              </SelectContent>
            </Select>
          </div >
          <DialogFooter >
            <div className="grid w-full gap-2">
              <Button className="w-full"> Cadastrar </Button>
              <Button variant="secondary" className="w-full"> Fechar </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </>
  )
}