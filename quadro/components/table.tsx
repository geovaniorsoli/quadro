"use client"

import { useState, useMemo, type SetStateAction } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import * as lucide from "lucide-react"
import CreateStatementForm from "./createFormStatement"
import EditFormStatement from "./editFormStatement"
import AlertDeleteConfirm from "./alertConfirmDelete"

interface DataTable {
  id: number
  tag: string
  tagColor: "destructive" | "secondary" | "green" | "purple" | "blue" | "yellow" | "default" | "outline" | null | undefined
  description: string
  value: number
  data: string
}

interface DataTableProps {
  data: DataTable[]
}

export default function DataTable({ data }: DataTableProps) {

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [openDialog, setDialogOpen] = useState(false)
  const [openEditDialog, setOpenDialog] = useState(false)
  const [openPopOver, setPopOver] = useState(false)
  const [alertDelet, setAlertDelet] = useState(false)

  type SortKey = keyof DataTable

  const [sort, setSort] = useState<{ key: SortKey; order: "asc" | "desc" }>({
    key: "id",
    order: "asc"
  })

  const filteredData = useMemo(() => {
    return data
      .filter((item) => {
        const searchValue = search.toLowerCase()
        return (
          item.tag.toLowerCase().includes(searchValue) ||
          item.description.toLowerCase().includes(searchValue) ||
          item.value.toString().includes(searchValue)
        )
      })
      .sort((a, b) => {
        if (sort.key === "value") {
          return sort.order === "asc" ? a.value - b.value : b.value - a.value
        } else {
          const aValue = a[sort.key] as string
          const bValue = b[sort.key] as string
          if (aValue < bValue) return sort.order === "asc" ? -1 : 1
          if (aValue > bValue) return sort.order === "asc" ? 1 : -1
          return 0
        }
      })
  }, [search, sort, data])

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPageData = filteredData.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const handleSort = (key: SortKey) => {
    setSort((prevSort) => ({
      key: key,
      order: prevSort.key === key && prevSort.order === "asc" ? "desc" : "asc"
    }))
  }

  const handlePageChange = (newPage: number) => setPage(newPage)
  return (
    <>
      <CreateStatementForm
        openDialog={openDialog}
        setDialogOpen={setDialogOpen}
        openPopOver={openPopOver}
        setPopOver={setPopOver}
      />

      <EditFormStatement
        openDialog={openEditDialog}
        setDialogOpen={setOpenDialog}
      />

      <AlertDeleteConfirm
        title="Deseja deletar esse dado?"
        description="esse dado irá ser deletado permanentemente"
        onOpenChange={setAlertDelet} 
        open={alertDelet}
        onDelete={() => console.log("deletado")}
      />

      <div className="flex items-center justify-center">
        <div className="w-[900px]">
          <div className="flex items-center justify-between gap-3 mb-4">
            <Input
              placeholder="Pesquisar..."
              value={search}
              onChange={handleSearch}
            />
            <Button onClick={() => setDialogOpen(true)}> Cadastrar </Button>
          </div>
          <div className="border rounded-lg overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><Button variant="ghost" onClick={() => handleSort("id")}>ID</Button></TableHead>
                  <TableHead><Button variant="ghost" onClick={() => handleSort("data")}>Data</Button></TableHead>
                  <TableHead><Button variant="ghost" onClick={() => handleSort("tag")}>Tag</Button></TableHead>
                  <TableHead><Button className="mr-4" variant="ghost" onClick={() => handleSort("description")}>Descrição</Button></TableHead>
                  <TableHead className="text-right"><Button variant="ghost" onClick={() => handleSort("value")}>Valor</Button></TableHead>
                  <TableHead className="w-[32px]"><span className="sr-only">Ações</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPageData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell className="font-medium">{item.data}</TableCell>
                    <TableCell><Badge variant={item.tagColor}>{item.tag}</Badge></TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="text-right">R$ {item.value.toFixed(2)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <lucide.Menu className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setOpenDialog(true)}>Editar</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setAlertDelet(true)}>Excluir</DropdownMenuItem>
                          <DropdownMenuItem>Copiar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end gap-3 items-center mt-4">
            <span>Página {page} de {totalPages}</span>
            <Button variant="outline" onClick={() => handlePageChange(page - 1)} disabled={page === 1}><lucide.MoveLeft /></Button>
            <Button variant="outline" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} ><lucide.MoveRight /></Button>
          </div>
        </div>
      </div>
    </>
  )
}
