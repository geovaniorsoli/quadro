"use client"
import TitleRoute from "@/components/titleRoute"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
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
import * as lucide from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const chartDataBar = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfigBar = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const chartDataBarUp = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const chartConfigBarUp = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function Dashboard() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Total de entradas', 'Total de saídas', 'Etiqueta com maior custo'].map((title, index) => (
            <Card key={index} className="rounded-lg shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <lucide.TrendingUp className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {index === 0 ? 'R$ 2.493,00' : index === 1 ? 'R$ 1.203,00' : 'CARRO R$40.000,00'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gráfico Radial */}
          <Card className="rounded-lg shadow-lg flex flex-col">
            <CardHeader className="items-center pb-2">
              <CardTitle>Radial Chart - Stacked</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[250px]"
              >
                <RadialBarChart
                  data={chartData}
                  endAngle={180}
                  innerRadius={80}
                  outerRadius={130}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 16}
                                className="fill-foreground text-2xl font-bold"
                              >
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 4}
                                className="fill-muted-foreground"
                              >
                                Visitors
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                  <RadialBar
                    dataKey="desktop"
                    stackId="a"
                    cornerRadius={5}
                    fill="var(--color-desktop)"
                    className="stroke-transparent stroke-2"
                  />
                  <RadialBar
                    dataKey="mobile"
                    fill="var(--color-mobile)"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Trending up by 5.2% this month <lucide.TrendingUp className="h-4 w-4" />
              <div>Showing total visitors for the last 6 months</div>
            </CardFooter>
          </Card>

          {/* Gráfico de Barras Horizontal */}
          <Card className="rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle>Bar Chart - Horizontal</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfigBar}>
                <BarChart
                  data={chartDataBar}
                  layout="vertical"
                  margin={{
                    left: -20,
                  }}
                >
                  <XAxis type="number" dataKey="desktop" hide />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Trending up by 5.2% this month <lucide.TrendingUp className="h-4 w-4" />
            </CardFooter>
          </Card>

          {/* Gráfico de Barras Múltiplo */}
          <Card className="rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle>Bar Chart - Multiple</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfigBarUp}>
                <BarChart data={chartDataBarUp}>
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
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Trending up by 5.2% this month <lucide.TrendingUp className="h-4 w-4" />
              <div>Showing total visitors for the last 6 months</div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}