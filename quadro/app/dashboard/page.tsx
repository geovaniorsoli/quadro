"use client"
import TitleRoute from "@/components/titleRoute"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import * as lucide from "lucide-react"
import Pizza from "@/components/charts/pizza"
import Bar from "@/components/charts/bar"
import Area from "@/components/charts/area"
import Kpi from "@/components/charts/kpi"
export default function Dashboard() {

  const kpi = [
    { title: "Comida", value: 234.3 },
    { title: "Carro", value: 400.00 },
    { title: "Cachorro", value: 300 },
  ]

  return (
    <>
      <TitleRoute title="Resumo" />
      <div className="container mx-auto p-4 space-y-8">

        {/* Filtro */}
        <div className="w-full max-w-sm mx-auto">
          <Select>
            <SelectTrigger className="border rounded-lg">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hoje">Hoje</SelectItem>
              <SelectItem value="semana">Esta Semana</SelectItem>
              <SelectItem value="mes">Este Mês</SelectItem>
              <SelectItem value="ano">Este Ano</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Indicadores */}
        <Kpi 
        kpiInfo={kpi}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Pizza />
          <Bar />
        </div>
        <Area />
      </div>
    </>
  );
}