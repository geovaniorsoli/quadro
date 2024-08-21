"use client"

import MenuStatement from "@/components/statementComponents/menuStatement"
import TitleRoute from "@/components/titleRoute"
import DataTable from "@/components/table"

interface dataTableProps {
  id: number
  tag: string
  tagColor: "destructive" | "secondary" | "green" | "purple" | "blue" | "yellow" | "default" | "outline" | null | undefined
  description: string
  value: number
  data: string
}

const data: dataTableProps[] = [
  { id: 1, data: "2024-08-21", tag: "Cachorro", tagColor: "blue", description: "Ração", value: 150.00 },
  { id: 2, data: "2024-08-21", tag: "Carro", tagColor: "purple", description: "Gasolina", value: 350.00 },
  { id: 3, data: "2024-08-21", tag: "Mercado", tagColor: "yellow", description: "Compra da semana", value: 220.00 },
  { id: 4, data: "2024-08-21", tag: "Casa", tagColor: "green", description: "Aluguel", value: 1200.00 },
  { id: 5, data: "2024-08-22", tag: "Cachorro", tagColor: "blue", description: "Veterinário", value: 300.00 },
  { id: 6, data: "2024-08-22", tag: "Carro", tagColor: "purple", description: "Manutenção", value: 500.00 },
  { id: 7, data: "2024-08-22", tag: "Mercado", tagColor: "yellow", description: "Frutas e Legumes", value: 80.00 },
  { id: 8, data: "2024-08-22", tag: "Casa", tagColor: "green", description: "Conta de Luz", value: 180.00 },
  { id: 9, data: "2024-08-23", tag: "Cachorro", tagColor: "blue", description: "Banho e Tosa", value: 100.00 },
  { id: 10, data: "2024-08-23", tag: "Carro", tagColor: "purple", description: "Estacionamento", value: 50.00 },
  { id: 11, data: "2024-08-23", tag: "Mercado", tagColor: "yellow", description: "Carnes", value: 150.00 },
  { id: 12, data: "2024-08-23", tag: "Casa", tagColor: "green", description: "Condomínio", value: 400.00 },
  { id: 13, data: "2024-08-24", tag: "Cachorro", tagColor: "blue", description: "Vacina", value: 250.00 },
  { id: 14, data: "2024-08-24", tag: "Carro", tagColor: "purple", description: "Pedágio", value: 30.00 },
  { id: 15, data: "2024-08-24", tag: "Mercado", tagColor: "yellow", description: "Laticínios", value: 60.00 },
  { id: 16, data: "2024-08-24", tag: "Casa", tagColor: "green", description: "Conta de Água", value: 90.00 },
  { id: 17, data: "2024-08-25", tag: "Cachorro", tagColor: "blue", description: "Brinquedos", value: 70.00 },
  { id: 18, data: "2024-08-25", tag: "Carro", tagColor: "purple", description: "Lavagem", value: 40.00 },
  { id: 19, data: "2024-08-25", tag: "Mercado", tagColor: "yellow", description: "Bebidas", value: 100.00 },
  { id: 20, data: "2024-08-25", tag: "Casa", tagColor: "green", description: "Internet", value: 120.00 },
]

export default function Statement() {
  return (
    <>
      <TitleRoute title="Extrato" />
      <div className="fixed top-0 right-0 p-5">
        <MenuStatement
          title="Menu"
          editTagOnclick={() => console.log("edit tag")}
          createTagOnclick={() => console.log("create tag")}
          exportPDFonClick={() => console.log("export pdf")}
          exportXLSXonClick={() => console.log("export xlsx")}
        />
      </div>

      <DataTable data={data} />
    </>
  )
}
