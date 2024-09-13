"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
  { date: "2024-04-01", Entradas: 222, Saidas: 150 },
  { date: "2024-04-02", Entradas: 97, Saidas: 180 },
  { date: "2024-04-03", Entradas: 167, Saidas: 120 },
  { date: "2024-04-04", Entradas: 242, Saidas: 260 },
  { date: "2024-04-05", Entradas: 373, Saidas: 290 },
  { date: "2024-04-06", Entradas: 301, Saidas: 340 },
  { date: "2024-04-07", Entradas: 245, Saidas: 180 },
  { date: "2024-04-08", Entradas: 409, Saidas: 320 },
  { date: "2024-04-09", Entradas: 59, Saidas: 110 },
  { date: "2024-04-10", Entradas: 261, Saidas: 190 },
  { date: "2024-04-11", Entradas: 327, Saidas: 350 },
  { date: "2024-04-12", Entradas: 292, Saidas: 210 },
  { date: "2024-04-13", Entradas: 342, Saidas: 380 },
  { date: "2024-04-14", Entradas: 137, Saidas: 220 },
  { date: "2024-04-15", Entradas: 120, Saidas: 170 },
  { date: "2024-04-16", Entradas: 138, Saidas: 190 },
  { date: "2024-04-17", Entradas: 446, Saidas: 360 },
  { date: "2024-04-18", Entradas: 364, Saidas: 410 },
  { date: "2024-04-19", Entradas: 243, Saidas: 180 },
  { date: "2024-04-20", Entradas: 89, Saidas: 150 },
  { date: "2024-04-21", Entradas: 137, Saidas: 200 },
  { date: "2024-04-22", Entradas: 224, Saidas: 170 },
  { date: "2024-04-23", Entradas: 138, Saidas: 230 },
  { date: "2024-04-24", Entradas: 387, Saidas: 290 },
  { date: "2024-04-25", Entradas: 215, Saidas: 250 },
  { date: "2024-04-26", Entradas: 75, Saidas: 130 },
  { date: "2024-04-27", Entradas: 383, Saidas: 420 },
  { date: "2024-04-28", Entradas: 122, Saidas: 180 },
  { date: "2024-04-29", Entradas: 315, Saidas: 240 },
  { date: "2024-04-30", Entradas: 454, Saidas: 380 },
  { date: "2024-05-01", Entradas: 165, Saidas: 220 },
  { date: "2024-05-02", Entradas: 293, Saidas: 310 },
  { date: "2024-05-03", Entradas: 247, Saidas: 190 },
  { date: "2024-05-04", Entradas: 385, Saidas: 420 },
  { date: "2024-05-05", Entradas: 481, Saidas: 390 },
  { date: "2024-05-06", Entradas: 498, Saidas: 520 },
  { date: "2024-05-07", Entradas: 388, Saidas: 300 },
  { date: "2024-05-08", Entradas: 149, Saidas: 210 },
  { date: "2024-05-09", Entradas: 227, Saidas: 180 },
  { date: "2024-05-10", Entradas: 293, Saidas: 330 },
  { date: "2024-05-11", Entradas: 335, Saidas: 270 },
  { date: "2024-05-12", Entradas: 197, Saidas: 240 },
  { date: "2024-05-13", Entradas: 197, Saidas: 160 },
  { date: "2024-05-14", Entradas: 448, Saidas: 490 },
  { date: "2024-05-15", Entradas: 473, Saidas: 380 },
  { date: "2024-05-16", Entradas: 338, Saidas: 400 },
  { date: "2024-05-17", Entradas: 499, Saidas: 420 },
  { date: "2024-05-18", Entradas: 315, Saidas: 350 },
  { date: "2024-05-19", Entradas: 235, Saidas: 180 },
  { date: "2024-05-20", Entradas: 177, Saidas: 230 },
  { date: "2024-05-21", Entradas: 82, Saidas: 140 },
  { date: "2024-05-22", Entradas: 81, Saidas: 120 },
  { date: "2024-05-23", Entradas: 252, Saidas: 290 },
  { date: "2024-05-24", Entradas: 294, Saidas: 220 },
  { date: "2024-05-25", Entradas: 201, Saidas: 250 },
  { date: "2024-05-26", Entradas: 213, Saidas: 170 },
  { date: "2024-05-27", Entradas: 420, Saidas: 460 },
  { date: "2024-05-28", Entradas: 233, Saidas: 190 },
  { date: "2024-05-29", Entradas: 78, Saidas: 130 },
  { date: "2024-05-30", Entradas: 340, Saidas: 280 },
  { date: "2024-05-31", Entradas: 178, Saidas: 230 },
  { date: "2024-06-01", Entradas: 178, Saidas: 200 },
  { date: "2024-06-02", Entradas: 470, Saidas: 410 },
  { date: "2024-06-03", Entradas: 103, Saidas: 160 },
  { date: "2024-06-04", Entradas: 439, Saidas: 380 },
  { date: "2024-06-05", Entradas: 88, Saidas: 140 },
  { date: "2024-06-06", Entradas: 294, Saidas: 250 },
  { date: "2024-06-07", Entradas: 323, Saidas: 370 },
  { date: "2024-06-08", Entradas: 385, Saidas: 320 },
  { date: "2024-06-09", Entradas: 438, Saidas: 480 },
  { date: "2024-06-10", Entradas: 155, Saidas: 200 },
  { date: "2024-06-11", Entradas: 92, Saidas: 150 },
  { date: "2024-06-12", Entradas: 492, Saidas: 420 },
  { date: "2024-06-13", Entradas: 81, Saidas: 130 },
  { date: "2024-06-14", Entradas: 426, Saidas: 380 },
  { date: "2024-06-15", Entradas: 307, Saidas: 350 },
  { date: "2024-06-16", Entradas: 371, Saidas: 310 },
  { date: "2024-06-17", Entradas: 475, Saidas: 520 },
  { date: "2024-06-18", Entradas: 107, Saidas: 170 },
  { date: "2024-06-19", Entradas: 341, Saidas: 290 },
  { date: "2024-06-20", Entradas: 408, Saidas: 450 },
  { date: "2024-06-21", Entradas: 169, Saidas: 210 },
  { date: "2024-06-22", Entradas: 317, Saidas: 270 },
  { date: "2024-06-23", Entradas: 480, Saidas: 530 },
  { date: "2024-06-24", Entradas: 132, Saidas: 180 },
  { date: "2024-06-25", Entradas: 141, Saidas: 190 },
  { date: "2024-06-26", Entradas: 434, Saidas: 380 },
  { date: "2024-06-27", Entradas: 448, Saidas: 490 },
  { date: "2024-06-28", Entradas: 149, Saidas: 200 },
  { date: "2024-06-29", Entradas: 103, Saidas: 160 },
  { date: "2024-06-30", Entradas: 446, Saidas: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Entradas: {
    label: "Entradas",
    color: "hsl(var(--chart-2))",
  },
  Saidas: {
    label: "Saidas",
    color: "hsl(var(--chart-1))",

  },
} satisfies ChartConfig

export default function area() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle> Life time</CardTitle>
          <CardDescription>
            Relação em tempo real
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillEntradas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Entradas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Entradas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSaidas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Saidas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Saidas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Saidas"
              type="natural"
              fill="url(#fillSaidas)"
              stroke="var(--color-Saidas)"
              stackId="a"
            />
            <Area
              dataKey="Entradas"
              type="natural"
              fill="url(#fillEntradas)"
              stroke="var(--color-Entradas)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
