"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Dot,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, type ChartConfig, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type SalesRange = "7D" | "1M" | "1Y";

interface SalesDataPoint {
  day: string;
  revenue: number;
  orders: number;
}

interface SalesChartProps {
  title?: string;
  subtitle?: string;
  data?: Record<SalesRange, SalesDataPoint[]>;
}

const salesData: Record<SalesRange, SalesDataPoint[]> = {
  "7D": [
    { day: "Mon", revenue: 9200, orders: 180 },
    { day: "Tue", revenue: 10100, orders: 210 },
    { day: "Wed", revenue: 9800, orders: 196 },
    { day: "Thu", revenue: 11300, orders: 240 },
    { day: "Fri", revenue: 12500, orders: 268 },
    { day: "Sat", revenue: 11900, orders: 252 },
    { day: "Sun", revenue: 12850, orders: 284 },
  ],
  "1M": [
    { day: "Mon", revenue: 10200, orders: 210 },
    { day: "Tue", revenue: 11600, orders: 242 },
    { day: "Wed", revenue: 12100, orders: 248 },
    { day: "Thu", revenue: 12900, orders: 266 },
    { day: "Fri", revenue: 13600, orders: 284 },
    { day: "Sat", revenue: 14200, orders: 301 },
    { day: "Sun", revenue: 14800, orders: 320 },
  ],
  "1Y": [
    { day: "Mon", revenue: 7600, orders: 145 },
    { day: "Tue", revenue: 8400, orders: 162 },
    { day: "Wed", revenue: 9100, orders: 178 },
    { day: "Thu", revenue: 10300, orders: 204 },
    { day: "Fri", revenue: 11700, orders: 232 },
    { day: "Sat", revenue: 12200, orders: 246 },
    { day: "Sun", revenue: 13400, orders: 275 },
  ],
};

const chartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#22c55e",
  },
  orders: {
    label: "Orders",
    color: "#3b82f6",
  },
};

function DotPoint(props: React.ComponentProps<typeof Dot>) {
  return <Dot r={3.5} strokeWidth={2} className="stroke-background" {...props} />;
}

function SalesAreaChart({ data }: { data: SalesDataPoint[] }) {
  return (
    <ChartContainer config={chartConfig} className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 4 }}>
          <defs>
            <linearGradient id="revenue-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.35} />
              <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="revenue"
            orientation="left"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) => `$${value / 1000}k`}
          />
          <YAxis
            yAxisId="orders"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) => `${value}`}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Area
            yAxisId="revenue"
            dataKey="revenue"
            type="monotone"
            stroke="var(--color-revenue)"
            strokeWidth={2.5}
            fill="url(#revenue-gradient)"
            dot={<DotPoint fill="var(--color-revenue)" />}
            activeDot={{ r: 5 }}
          />
          <Line
            yAxisId="orders"
            dataKey="orders"
            type="monotone"
            stroke="var(--color-orders)"
            strokeWidth={2.5}
            dot={<DotPoint fill="var(--color-orders)" />}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export function SalesChart({
  title = "Sales Analytics",
  subtitle = "Revenue & Orders - April 2026",
  data = salesData,
}: SalesChartProps) {
  const [range, setRange] = React.useState<SalesRange>("7D");

  return (
    <Card className="rounded-xl bg-muted/50 shadow-sm">
      <CardHeader className="flex flex-col gap-4 pb-0 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
        <Tabs value={range} onValueChange={(v) => setRange(v as SalesRange)} className="w-auto">
          <TabsList>
            <TabsTrigger value="7D">7D</TabsTrigger>
            <TabsTrigger value="1M">1M</TabsTrigger>
            <TabsTrigger value="1Y">1Y</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={range}>
          <TabsContent value="7D">
            <SalesAreaChart data={data["7D"]} />
          </TabsContent>
          <TabsContent value="1M">
            <SalesAreaChart data={data["1M"]} />
          </TabsContent>
          <TabsContent value="1Y">
            <SalesAreaChart data={data["1Y"]} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
