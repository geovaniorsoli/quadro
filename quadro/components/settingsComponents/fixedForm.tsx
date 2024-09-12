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

interface createFixedProps {
  openDialog: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>
}

export default function createFixed({ openDialog, setDialogOpen }: createFixedProps) {

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
            <Label>Título</Label>
            <Input type="text" placeholder="Título da saída fixa" />
          </div>
          <div className="space-y-4">
            <Label>Valor</Label>
            <Input type="number" placeholder="Valor da saída" />
          </div>
          <div className="space-y-4">
            <Label> Período </Label>
            <Input type="number" placeholder="Periodo em dias" />
          </div >
          <DialogFooter >
            <div className="grid w-full gap-2">
              <Button className="w-full"> Cadastrar </Button>
              <Button onClick={() => setDialogOpen(false)} variant="secondary" className="w-full"> Fechar </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </>
  )
}