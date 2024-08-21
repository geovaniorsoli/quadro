"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CreateForm from "@/components/createForm"
import EditForm from "@/components/editForm"
import TitleRoute from "@/components/titleRoute"
import Reminder from "@/components/reminder"

export default function Home() {
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [selectedReminder, setSelectedReminder] = useState(null)

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
    },
  ]

  const editField = [
    {
      label: "Nome",
      type: "text",
      placeholder: "Nome do lembrete",
    },
    {
      label: "Valor",
      type: "number",
      placeholder: "Valor do lembrete",
    },
    {
      label: "Até quando precisa?",
      type: "date",
      placeholder: "até precisa ser lembrado",
    },
  ]

  const remindersData = [
    { content: "Conta de Luz", price: 150.0, date: "2024-09-15" },
    { content: "Mensalidade Academia", price: 70.0, date: "2024-09-21" },
    { content: "Seguro do Carro", price: 300.0, date: "2024-07-10" },
  ]

  const handleEditReminder = (reminder:any) => {
    setSelectedReminder(reminder)
    setEditOpen(true)
  }

  // const handleDeleteReminder = (index) => {
  // }

  return (
    <>
      <TitleRoute title="Home" />
      <div className="fixed top-0 right-0 p-5">
        <Button onClick={() => setOpen(true)}>Criar lembrete</Button>
      </div>

      <CreateForm
        title="Criar Lembrete"
        description="Para não esquecer nada, use o lembrete"
        setDialogOpen={setOpen}
        dialogOpen={open}
        inputField={inputField}
      />

      <div className="fixed bottom-4 gap-3 right-4 max-h-200 w-80 overflow-y-auto">
        <Reminder
          reminders={remindersData.map((reminder, index) => ({
            ...reminder,
            editOnClick: () => handleEditReminder(reminder),
            deleteOnClick: () => console.log("apagar")
          }))}
        />
      </div>

      {selectedReminder && (
        <EditForm
          dialogOpen={editOpen}
          setDialogOpen={setEditOpen}
          title="Editar lembrete"
          description="Edite os detalhes do lembrete"
          inputFields={editField}
          selectArray={remindersData}
        />
      )}
    </>
  )
}
