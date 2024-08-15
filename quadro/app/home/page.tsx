"use client"
import { Button } from "@/components/ui/button"
import CreateForm from "@/components/createForm"
import TitleRoute from "@/components/titleRoute"
import { useState } from "react"

export default function home() {

  const [open, setOpen] = useState(false)

  const inputField = [
    {
      label: "Lembrete",
      type: "text",
      placeholder: "Do que quer ser lembrado?",
    },
    {
      label: "Valor",
      type: "text",
      placeholder: "Quanto?",
    },
    {
      label: "Quando",
      type: "date",
      placeholder: "até quando precisa ser lembrado?",
    }
  ]

  return (
    <>
      <TitleRoute title="Home" />
      <div className="fixed top-0 right-0 p-5">
        <Button onClick={() => setOpen(true)}> Criar lembrete </Button>
      </div>

      <CreateForm
          title="Criar Lembrete"
          description="Para não esquecer nada use o lembrete"
          setDialogOpen={setOpen}
          dialogOpen={open}
          inputField={inputField}
      />
    </>
  )
}