
"use client"
import CreateStatementForm from "@/components/createStatement"
import { useState } from "react"
import { Button } from "@/components/ui/button"
export default function teste() {
  const [openDialog, setDialogOpen] = useState(false)
  const [openPopOver, setPopOver] = useState(false)
  return (
    <>
      <CreateStatementForm
        openDialog={openDialog}
        setDialogOpen={setDialogOpen}
        openPopOver={openPopOver}
        setPopOver={setPopOver}
      />

      <Button onClick={() => setDialogOpen(true)}>
        open
      </Button>
    </>
  )
}