"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart"

const chartData = [
  { month: "Jan", Entradas: 186, Saidas: 80 },
  { month: "Fev", Entradas: 305, Saidas: 200 },
  { month: "Mar", Entradas: 237, Saidas: 120 },
  { month: "Abr", Entradas: 73, Saidas: 190 },
  { month: "Mai", Entradas: 209, Saidas: 130 },
  { month: "Jun", Entradas: 214, Saidas: 140 },
]

const chartConfig = {
  Entradas: {
    label: "Entradas",
    color: "hsl(var(--chart-1))",
  },
  Saidas: {
    label: "Saidas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function bar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relação entre meses</CardTitle>
        <CardDescription>Relação entre entradas e saída</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Entradas" fill="var(--color-Entradas)" radius={4} />
            <Bar dataKey="Saidas" fill="var(--color-Saidas)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
