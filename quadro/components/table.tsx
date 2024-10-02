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
import sty from "@/public/styles/table.module.css"
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
        <div className="w-full max-w-[900px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-4">
            <Input
              placeholder="Pesquisar..."
              value={search}
              onChange={handleSearch}
              className="w-full md:w-auto"
            />
            <Button className="w-full md:w-auto" onClick={() => setDialogOpen(true)}>Cadastrar</Button>
          </div>
          <div className="border rounded-lg overflow-auto">
            <Table className="min-w-full">
              <TableHeader className="hidden md:table-header-group">
                <TableRow>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort("id")}>
                      ID
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort("data")}>
                      Data
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort("tag")}>
                      Tag
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button className="mr-4" variant="ghost" onClick={() => handleSort("description")}>
                      Descrição
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">
                    <Button variant="ghost" onClick={() => handleSort("value")}>
                      Valor
                    </Button>
                  </TableHead>
                  <TableHead className="w-[32px]">
                    <span className="sr-only">Ações</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPageData.map((item) => (
                  <TableRow key={item.id} className="flex flex-col md:table-row mb-4 md:mb-0 border-b md:border-none">
                    <TableCell className="font-medium flex justify-between md:table-cell">
                      <span className="md:hidden">ID</span>
                      {item.id}
                    </TableCell>
                    <TableCell className="font-medium flex justify-between md:table-cell">
                      <span className="md:hidden">Data</span>
                      {item.data}
                    </TableCell>
                    <TableCell className="flex justify-between md:table-cell">
                      <span className="md:hidden">Tag</span>
                      <Badge variant={item.tagColor}>{item.tag}</Badge>
                    </TableCell>
                    <TableCell className="flex justify-between md:table-cell">
                      <span className="md:hidden">Descrição</span>
                      {item.description}
                    </TableCell>
                    <TableCell className="text-right flex justify-between md:table-cell">
                      <span className="md:hidden">Valor</span>
                      R$ {item.value.toFixed(2)}
                    </TableCell>
                    <TableCell className="flex justify-end md:table-cell">
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

          <section className={sty.containerEnd}>
            <div className="flex justify-between items-center gap-2 mt-4 md:mt-4 w-full flex-wrap md:flex-nowrap">
              <span className="text-center md:text-right w-auto mb-2 md:mb-0">
                Página {page} de {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <Button
                  className="w-auto"
                  variant="outline"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                >
                  <lucide.MoveLeft />
                </Button>
                <Button
                  className="w-auto"
                  variant="outline"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                >
                  <lucide.MoveRight />
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
