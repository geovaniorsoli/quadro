"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A simple pie chart"

const chartData = [
  { browser: "Entradas", visitors: 275, fill: "var(--color-Saidas)" },
  { browser: "Saidas", visitors: 200, fill: "var(--color-Entradas)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Entradas: {
    label: "Entradas",
    color: "hsl(var(--chart-1))",
  },
  Saidas: {
    label: "Saidas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function pizza() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Relações</CardTitle>
        <CardDescription>Relação entre entradas e saídas</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
