"use client"
import { Button } from "@/components/ui/button"
import CreateForm from "@/components/createForm"
import TitleRoute from "@/components/titleRoute"
import Reminder from "@/components/reminder"
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

  const remindersData = [
    { content: "Conta de Luz", price: 150.00, date: "2024-09-15" },
    { content: "Mensalidade Academia", price: 70.00, date: "2024-09-21" },
    { content: "Seguro do Carro", price: 300.00, date: "2024-07-10" }
  ];

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

      <div className="fixed bottom-4 gap-3 right-4 max-h-200 w-80 overflow-y-auto">
        <Reminder
          reminders={remindersData}
        />
      </div>
    </>
  )
}