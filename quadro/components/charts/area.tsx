"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Dados aleatórios para o gráfico, incluindo a nova linha "Previsão"
const chartData = [
  { date: "2024-04-01", Entradas: 222, Saidas: 150, Previsao: 200 },
  { date: "2024-04-02", Entradas: 97, Saidas: 180, Previsao: 160 },
  { date: "2024-04-03", Entradas: 167, Saidas: 120, Previsao: 150 },
  { date: "2024-04-04", Entradas: 242, Saidas: 260, Previsao: 250 },
  { date: "2024-04-05", Entradas: 373, Saidas: 290, Previsao: 310 },
  { date: "2024-04-06", Entradas: 301, Saidas: 340, Previsao: 330 },
  { date: "2024-04-07", Entradas: 245, Saidas: 180, Previsao: 210 },
  { date: "2024-04-08", Entradas: 409, Saidas: 320, Previsao: 380 },
  { date: "2024-04-09", Entradas: 59, Saidas: 110, Previsao: 90 },
  { date: "2024-04-10", Entradas: 261, Saidas: 190, Previsao: 230 },
];

export default function AreaChartComponent() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Life time</CardTitle>
          <CardDescription>Relação em tempo real e previsão por IA</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorEntradas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorSaidas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#dc2626" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorPrevisao" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1f77b4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1f77b4" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis />
            <Tooltip
              formatter={(value, name) => [value, name]}
              labelFormatter={(label) => `Data: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="Entradas"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorEntradas)"
            />
            <Area
              type="monotone"
              dataKey="Saidas"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorSaidas)"
            />
            <Area
              type="monotone"
              dataKey="Previsao"
              stroke="#1f77b4"
              fillOpacity={1}
              fill="url(#colorPrevisao)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
